"use client"

import type { TodoType } from "@/lib/models/TodoModel";

import { useState } from "react";
import {useForm} from 'react-hook-form'

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { editTodo } from "@/actions/todos";

const editFormSchema = z.object({
  content: z
    .string()
    .max(50)
})

type TodoEditFormProps = {
  todo: TodoType
}

export default function TodoEditForm ({todo}: TodoEditFormProps) {
  
  const [isLoading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof editFormSchema>>({
    resolver: zodResolver(editFormSchema),
    defaultValues: {
      content: todo.content
    }
  })

  const onSubmit = async ({content}: z.infer<typeof editFormSchema>) => {

    setLoading(true)
    await editTodo(todo.id, content)
    setLoading(false)
  }

  return <Form {...form}>
    <form 
      className="w-full flex flex-col gap-4"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <FormField
        name="content"
        control={form.control}
        render={({field}) => (
          <FormItem>
            <FormControl>
              <Input placeholder="Edit your todo..." {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <Button
        disabled={isLoading}
        className="w-full"
      >
        {
          isLoading
            ? "Saving changes..."
            : "Save changes"
        }
      </Button>
    </form>
  </Form>

}
