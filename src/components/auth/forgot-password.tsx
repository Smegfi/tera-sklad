import { cn } from "@/lib/utils";
import Link from "next/link";

export function ForgotPasswordForm({ className, ...props }: React.ComponentProps<"form">) {
   return (
      <form className={cn("flex flex-col gap-6", className)} {...props}>
         <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-bold">Zapomněli jste heslo?</h1>
            <p className="text-muted-foreground text-sm text-balance">
               Tato funkcionalita zatím není implementována, pokud máte potíže s příhlášením kontaktujte prosím administrátora.
            </p>
         </div>
         <div className="text-center text-sm">
            <Link href="/login" className="underline underline-offset-4">
               Pokračovat na přihlášení
            </Link>
         </div>
      </form>
   );
}
