import type { TodoType } from "@/lib/models/TodoModel";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: TodoType[]
}

export default function TodoList({todos}: TodoListProps) {
  return !todos || !todos.length
    ? "No todos to display."
    : <ul className="w-full flex flex-col gap-2">
      {
        todos.map(todo => (
          <TodoItem todo={todo}/>
        ))
      }
    </ul>
}