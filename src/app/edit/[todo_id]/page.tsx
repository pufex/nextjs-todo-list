import { getTodoById } from "@/db/todos";
import { notFound } from "next/navigation";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TodoEditForm from "./_components/TodoEditForm";
import GoBack from "./_components/GoBack";

type PageProps = {
  params: {todo_id: string}
}

export default async function Page ({
  params: {todo_id}
}: PageProps) {
  const todo = await getTodoById(todo_id)
  if(!todo) 
    return notFound()
  else
  return <main className="w-full min-h-[100vh] grid place-items-center">
    <Card className="w-full max-w-[400px]">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>
            Edit your todo.
          </CardTitle>
          <GoBack />
        </div>
      </CardHeader>
      <CardContent className="w-full">
        <TodoEditForm todo={todo} />
      </CardContent>
    </Card>
  </main>
}