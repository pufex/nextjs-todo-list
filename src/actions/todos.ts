"use server"

import dbConnect from "@/lib/dbConnect"
import Todo, { TodoType } from "@/lib/models/TodoModel"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const createTodo = async (user_name: string, content: string) => {
  return dbConnect()
    .catch(err => err)
    .then(async () => {
      await Todo.create({content, user_name})
      revalidatePath("/")
    })
}

export const toggleCompleted = async (todo_id: TodoType["id"]) => {
  return dbConnect()
    .catch(err => err)
    .then(async () => {
      const todo = await Todo.findById(todo_id)
        .exec()
      if(!todo)
        return {error: {message: "Todo not found."}}
      todo.completed = !todo.completed
      await todo.save()
      revalidatePath("/")
    })
}

export const editTodo = async (
  todo_id: TodoType["id"],
  content: string,
) => {
  return dbConnect()
    .catch(err => err)
    .then(async () => {
      const todo = await Todo.findById(todo_id)
        .exec()
      if(!todo)
        return
      todo.content = content
      await todo.save()
      revalidatePath("/")
      redirect("/")
    })
}

export const deleteTodo = async (todo_id: TodoType["id"]) => {
  return dbConnect()
    .catch(err => err)
    .then(async () => {
      const todo = await Todo.findById(todo_id)
      if(!todo)
        return 
      await todo.deleteOne()
      revalidatePath("/")
    })
}

