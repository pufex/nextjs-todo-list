import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function GoBack() {
  return <Link 
    href="/"
    className="grid place-items-center w-8 aspect-square rounded-full bg-sky-600"
  >
    <ArrowLeft 
      stroke="white"
      size={25}
    />
  </Link>
}