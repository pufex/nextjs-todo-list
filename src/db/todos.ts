import type { TodoType } from "@/lib/models/TodoModel";
import dbConnect from "@/lib/dbConnect";
import Todo from "@/lib/models/TodoModel";
import { cache } from "react"
import { unstable_cache } from "next/cache"

export const getTodos = unstable_cache(
  cache(
    async () => {
      return dbConnect()
        .catch(err => err)
        .then(async () => {
          const todos = await Todo.find()
            .lean().exec()
          const refTodos: TodoType[] = todos
            .map(todo => ({
              ...todo,
              id: todo._id.toString()
            }))
          return refTodos
        })
    }
  ),
  ["todos", "user_name"]
)
export const getTodoById = unstable_cache(
  cache(
    async (todo_id: string) => {
      return dbConnect()
        .catch(err => err)
        .then(async () => {
          const todo = await Todo.findById(todo_id)
            .lean().exec()
          if (!todo)
            return null
          const refTodo: TodoType = {
            ...todo,
            id: todo._id.toString()
          }
          return refTodo
        })
    }
  ),
  ["todos", "todo_id"]
)