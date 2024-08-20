import type { TodoType } from "@/lib/models/TodoModel";
import { Pencil } from "lucide-react";
import Link from "next/link";

type TodoEditRedirectProps = {
  todo_id: TodoType["id"]
}

export default function TodoEditRedirect({todo_id}: TodoEditRedirectProps) {
  return <Link
    href={`/edit/${todo_id}`}
    className="w-8 aspect-square border border-sky-600 rounded-sm grid place-items-center bg-sky-500"
  >
    <Pencil
      stroke="none"
      fill="white"
      size={20}
    />
  </Link>
}