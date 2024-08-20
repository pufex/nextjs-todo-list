import type { TodoType } from "@/lib/models/TodoModel"
import { Card, CardContent } from "./ui/card"
import TodoCheckbox from "./TodoCheckbox"
import TodoDelete from "./TodoDelete"
import TodoEditRedirect from "./TodoEditRedirect"

type TodoItemProps = {
  todo: TodoType
}

export default function TodoItem({todo}: TodoItemProps) {
  return <div className="w-full h-16 bg-slate-100 px-4 rounded-md border">
    <div className="w-full min-h-full flex items-center">
      <div className="flex justify-between w-full gap-4">
        <TodoCheckbox todo={todo} />
        <h1 className="w-full text-lg font-medium text-black text-left">
          {todo.content}
        </h1>
        <div className="flex items-center gap-2">
          <TodoDelete todo_id={todo.id} />
          <TodoEditRedirect todo_id={todo.id}/>
        </div>
      </div>
    </div>
  </div>
}