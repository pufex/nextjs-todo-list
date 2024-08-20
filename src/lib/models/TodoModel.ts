import type { IdProp } from "./ModelTypes";
import mongoose from "mongoose"

export type TodoSchemaType = {
  user_name: string,
  content: string,
  completed: boolean,
}

export type TodoType = TodoSchemaType & IdProp

const TodoSchema = new mongoose.Schema<TodoSchemaType>({
  user_name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: () => false,
  },
})

const TodoModel = (mongoose.models?.Todo || mongoose.model("Todo", TodoSchema)) as mongoose.Model<TodoSchemaType>

export default TodoModel