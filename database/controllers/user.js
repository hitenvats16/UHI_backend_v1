import { PATIENT_ATTRIBUTES_SET } from "../../constants/users.js";
import UserModel from "../models/users.js";

export async function createUser(data, { type }) {
  try {
    const user = await UserModel.create({
      ...data,
      user_type: type,
    });

    if(type==='patient'){
      const filteredObj = {}
      for(const key in user){
        if(PATIENT_ATTRIBUTES_SET.has(key)){
          filteredObj[key] = user[key]
        }
      }
      return {
        data: filteredObj,
        error: null,
      };
    }
    return {
      data: user,
      error: null,
    };
  } catch (e) {
    console.log(e)
    return {
      data: null,
      error: e,
    };
  }
}

export async function listHospitals() {
  const users = await UserModel.find({ user_type: 'hospital' });
  return users;
}

export async function searchUser(options) {
  const user = await UserModel.findOne(options);
  return user;
}

export async function findUserById(id){
  const user = await UserModel.findById(id)
  return user
}
