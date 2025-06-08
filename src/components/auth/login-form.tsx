import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

export function LoginForm({ className, ...props }: React.ComponentProps<"form">) {
   return (
      <form className={cn("flex flex-col gap-6", className)} {...props}>
         <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-bold">Přihlásit se</h1>
            <p className="text-muted-foreground text-sm text-balance">Vyplňte prosím následující údaje pro přihlášení</p>
         </div>
         <div className="grid gap-6">
            <div className="grid gap-3">
               <Label htmlFor="email">Email</Label>
               <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="grid gap-3">
               <div className="flex items-center">
                  <Label htmlFor="password">Heslo</Label>
                  <Link href="/forgot-password" className="ml-auto text-sm underline-offset-4 hover:underline">
                     Zapomněli jste heslo?
                  </Link>
               </div>
               <Input id="password" type="password" required />
            </div>
            <Alert className="text-green-600 border-green-600">
               <Info />
               <AlertTitle>Upozornění</AlertTitle>
               <AlertDescription>V DEMO verzi se nepřihlašuje, stačí kliknout na tlačítko Přihlásit se.</AlertDescription>
            </Alert>
            <Link href="/">
               <Button type="submit" className="w-full">
                  Přihlásit se
               </Button>
            </Link>
         </div>
         <div className="text-center text-sm">
            Nemáte účet?{" "}
            <Link href="/register" className="underline underline-offset-4">
               Registrujte se
            </Link>
         </div>
      </form>
   );
}
