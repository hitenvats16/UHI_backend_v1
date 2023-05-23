import { Schema, model } from "mongoose";

const userSchema = new Schema({
  user_type: {
    type: Schema.Types.String,
    default: "patient",
    required: true,
  },
  contact_number: {
    type: Schema.Types.String,
    required: true,
  },
  address: {
    type: Schema.Types.String,
  },
  coords: {
    type: Schema.Types.Array,
  },
  name: {
    type: Schema.Types.String,
    required: true
  },
  password: {
    type: Schema.Types.String,
    required: true
  },
  number_of_beds: {
    type: Schema.Types.Number
  },
  treatments: {
    type: Schema.Types.Array
  }
});

const UserModel = model("User", userSchema);
export default UserModel
