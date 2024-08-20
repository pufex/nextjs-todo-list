import { Titillium_Web } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const titillium = Titillium_Web({ 
  subsets: ["latin"],
  weight: ["400", "600", "700"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        titillium.className,
        "bg-slate-300"
      )}>
        {children}
      </body>
    </html>
  );
}
