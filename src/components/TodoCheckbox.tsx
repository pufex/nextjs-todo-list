"use client"

import type { TodoType } from "@/lib/models/TodoModel"
import { useOptimistic } from "react"
import { useTransition } from "react"
import { Check } from "lucide-react"
import { toggleCompleted } from "@/actions/todos"

type CheckboxProps = {
  todo: TodoType
}

export default function TodoCheckbox({
  todo: {
    id: todo_id,
    completed
  }
}: CheckboxProps) {
  
  const [optCompleted, setOpt] = useOptimistic(completed)
  const [isPending, startTransition] = useTransition()

  const handleClick = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    if(isPending)
      return
    startTransition(async () => {
      setOpt(!completed)
      await toggleCompleted(todo_id)
    })
  }
  
  return <div 
    className="cursor-pointer w-8 flex-shrink-0 aspect-square rounded-sm border grid place-items-center"
    onClick={handleClick}
  >
    {
      optCompleted
        && <Check 
          stroke="green"
          size={30}
        />
    }
  </div>
}