"use client"

import { useForm } from "react-hook-form"
import { useState } from "react"

import { LoaderCircle, Plus } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import {
  Form,
  FormField,
  FormItem,
  FormControl
} from "./ui/form"
 

import { zodResolver } from "@hookform/resolvers/zod"
import {z} from "zod"
import { createTodo } from "@/actions/todos"

const todoFormSchema = z.object({
  content: z
    .string()
    .max(50)
})

export function TodoForm() {

  const [isLoading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof todoFormSchema>>({
    resolver: zodResolver(todoFormSchema),
    defaultValues: {
      content: ""
    }
  })

  const onSubmit = async ({content}: z.infer<typeof todoFormSchema>) => {
    setLoading(true)
    await createTodo("suzact", content)
    setLoading(false)
  }

  return <Form {...form}>
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="w-full flex items-start gap-4"
    >
      <FormField
        control={form.control}
        name="content"
        render={({field}) => (
          <FormItem className="w-full">
            <FormControl>
              <Input
                placeholder="What you gotta todo?"
                {...field}
              />
            </FormControl>
          </FormItem>
        )}
      />
      <Button
        disabled={isLoading}
        type="submit" 
        size={"icon"}
      >
        {
          isLoading
            ? <LoaderCircle
              size={25}
              fill="white"
              className="animate-spin"
            />
            : <Plus 
              size={30}
              fill="whtie"
            />
        }
      </Button>
    </form>
  </Form>
}

