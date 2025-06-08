import { Forklift } from "lucide-react";
import { ThemeToggle } from "../theme-toggle";
import Link from "next/link";

export function AuthHeader() {
   return (
      <div className="flex justify-between items-center">
         <Link href="" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-md">
               <Forklift className="size-5" />
            </div>
            <span className="text-xl uppercase">Terrasklad - DEMO</span>
         </Link>
         <ThemeToggle />
      </div>
   );
}
