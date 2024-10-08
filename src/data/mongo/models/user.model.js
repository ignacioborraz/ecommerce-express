import { Schema, model } from "mongoose";

const collection = "users";
const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  photo: {
    type: String,
    default:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonduck.com%2Ficons%2F69622%2Favatar&psig=AOvVaw2vNqIudPNt-_YrDTIC29JY&ust=1728516147154000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDW58n2_4gDFQAAAAAdAAAAABAE",
  },
  role: { type: String, enum: ["user", "admin", "prem"], default: "user" },
  isOnline: { type: Boolean, default: false },
});

const User = model(collection, schema);
export default User;
