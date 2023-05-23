import { Router } from "express";

import { findUserById, listHospitals } from "../database/controllers/user.js";
import { calcDistance } from "../utils/hospital.js";

const hospitalRouter = Router();

hospitalRouter.get("/search", async (req, res) => {
  const { token } = req.query;
  const currHos = await findUserById(token);
  const data = await listHospitals();
  data.sort((item1, item2) => {
    const coord1 = item1.coords;
    const coord2 = item2.coords;
    const dis1 = calcDistance(currHos.coords, coord1);
    const dis2 = calcDistance(currHos.coords, coord2);
    return dis1 - dis2;
  });
  return res.json({
    data: data.filter(
      ({ _id, number_of_beds }) => _id !== currHos._id || number_of_beds > 0
    ),
    error: null,
  });
});

export default hospitalRouter;
