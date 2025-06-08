import Image from "next/image";

export function AuthImage() {
   return (
      <div className="bg-muted relative hidden lg:block">
         <Image src="/auth-bg.webp" alt="Image" fill className="object-cover absolute inset-0 h-full w-full dark:brightness-[0.4] dark:grayscale" />
      </div>
   );
}
