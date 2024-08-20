import type { IdProp } from "./ModelTypes"
import mongoose from "mongoose"

export type UserSchemaType = {
  name: string,
  password: string,
}

export type UserType = UserSchemaType & IdProp

const UserSchema = new mongoose.Schema<UserSchemaType>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  }
})

const UserModel = (mongoose.models?.User || mongoose.model("User", UserSchema)) as mongoose.Model<UserSchemaType>

export default UserModel