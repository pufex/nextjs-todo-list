import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return <main className="w-full min-h-[100vh] grid place-items-center">
    <LoaderCircle 
      className="animate-spin"
      stroke="black"
      size={40}
    />
  </main>
}