import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function RegisterForm({ className, ...props }: React.ComponentProps<"form">) {
   return (
      <form className={cn("flex flex-col gap-6", className)} {...props}>
         <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-bold">Vytvořit nový účet</h1>
            <p className="text-muted-foreground text-sm text-balance">Vyplňte prosím následující údaje pro vytvoření nového účtu</p>
         </div>
         <div className="grid gap-6">
            <div className="grid gap-3">
               <Label htmlFor="first-name">Jméno</Label>
               <Input id="first-name" type="text" placeholder="Jan" required />
            </div>
            <div className="grid gap-3">
               <Label htmlFor="last-name">Příjmení</Label>
               <Input id="last-name" type="text" placeholder="Novák" required />
            </div>
            <div className="grid gap-3">
               <Label htmlFor="email">Email</Label>
               <Input id="email" type="email" placeholder="jan.novak@example.com" required />
            </div>
            <div className="grid gap-3">
               <Label htmlFor="password">Heslo</Label>
               <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
               Registrovat se
            </Button>
         </div>
         <div className="text-center text-sm">
            Už máte účet?{" "}
            <Link href="/login" className="underline underline-offset-4">
               Přihlašte se
            </Link>
         </div>
      </form>
   );
}
