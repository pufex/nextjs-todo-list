"use client"

import { TodoType } from "@/lib/models/TodoModel"
import { LoaderCircle, Trash2 } from "lucide-react"
import { useTransition } from "react"
import { deleteTodo } from "@/actions/todos"

type TodoDeleteProps = {
  todo_id: TodoType["id"]
}

export default function TodoDelete({todo_id}: TodoDeleteProps) {
  
  const [isPending, startTransition] = useTransition()
  
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    if(isPending)
      return
    startTransition(async () => {
      await deleteTodo(todo_id)
    })
  }

  return <div
    className="w-8 aspect-square border border-rose-500 rounded-sm grid place-items-center bg-rose-600 cursor-pointer"
    onClick={handleClick}
  >
    {
      isPending
        ? <LoaderCircle
          stroke="white"
          size={20}
          className="animate-spin"
        />
        : <Trash2
          stroke="white"
          size={25}
        />
    }
  </div>
}