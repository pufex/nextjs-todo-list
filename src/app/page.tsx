import type { Metadata } from "next";

import { TodoForm } from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import { Suspense } from "react";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";

import { getTodos } from "@/db/todos";

export const metadata: Metadata = {
  title: "Todos app",
  description: "Your Next JS todo app with server actions and database workflow.",
};

export default function Homepage() {
  return <main className="w-full min-h-[100vh] grid place-items-center">
    <div className="w-full max-w-[500px] flex flex-col">
      <header className="mb-8 w-full">
        <TodoForm />
      </header>
      <Suspense 
        fallback={
          <div className="w-full h-40 grid place-items-center">
            <LoaderCircle
              className="animate-spin"
              size={30}
              stroke="black"
            />
          </div>
        }
      >
        <Todos />
      </Suspense>
    </div>
  </main>
}

async function Todos() {
  const todos = await getTodos()
  return <TodoList todos={todos} />
}