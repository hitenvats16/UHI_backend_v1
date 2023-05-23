import { connect } from "mongoose";
import { config } from "dotenv";
config()

const PASS = process.env.DB_PASS;
const USER = process.env.DB_USER;

try {
  await connect(
    `mongodb+srv://${USER}:${PASS}@cluster0.k8g5y4d.mongodb.net/?retryWrites=true&w=majority`
  );
  console.info("database connected successfully");
} catch (e) {
  throw new Error("database not able to connect");
}
