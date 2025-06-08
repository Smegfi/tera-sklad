"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Home() {
   const { theme, setTheme } = useTheme();

   return (
      <div className="flex flex-col gap-4">
         <section>
            <h1 className="text-3xl font-bold uppercase">Terrasklad</h1>
            <p>Vítejte na stránce pro správu skladů. Zde můžete spravovat své sklady a jejich obsah.</p>

            <p className="gap-2 mt-6">V levém části obrazovky je k dispozici menu, které vám umožní přecházení na různé stránky.</p>
         </section>

         <section>
            <h2 className="text-xl font-bold uppercase mt-6">Dashboard</h2>
            <p className="mt-2">Zobrazuje rychle a přehledně aktuální stav skladu, informuje o docházejícím zboží a o tom, jaké zboží je na skladě.</p>

            <h2 className="text-xl font-bold uppercase mt-6">Sklady</h2>
            <p className="mt-2">V této sekci se nachází správá skladů, kde je možnost přidávat nové sklady, upravovat existující sklady.</p>
            <p className="mt-2">Všechny sklady mají k sobě přižazené zboží, které je možnost přidávat, upravovat, naskladnit a vykládat.</p>

            <h2 className="text-xl font-bold uppercase mt-6">Stavby</h2>
            <p className="mt-2">V této sekci se nachází správá stavby, kde je možnost přidávat nové stavby, upravovat existující stavby.</p>
            <p className="mt-2">Stavby se evidují aby bylo známo kam předmět / položka ze skladu putuje.</p>
         </section>

         <section className="mt-6">
            <h2 className="text-xl font-bold uppercase mt-6">O aplikaci</h2>
            <p className="mt-2">
               Aplikace je responsivní a je optimalizovaná pro všechny velikosti obrazovek.
               <br />
               Splňuje veškeré moderní standardy na zabezpečení a uživatelské rozhraní.
               <br />
               Podporuje také možnost přizpůsobení podle vlastního vzhledu, včetně možnosti{" "}
               {theme === "dark" ? (
                  <>
                     <Button variant="outline" onClick={() => setTheme("dark")}>
                        tmavého
                     </Button>
                     <span className="mx-2">a</span>
                     <Button variant="default" onClick={() => setTheme("light")}>
                        světlého
                     </Button>
                  </>
               ) : (
                  <>
                     <Button variant="default" onClick={() => setTheme("dark")}>
                        tmavého
                     </Button>
                     <span className="mx-2">a</span>
                     <Button variant="outline" onClick={() => setTheme("light")}>
                        světlého
                     </Button>
                  </>
               )}{" "}
               režimu <span className="text-muted-foreground">(kliknutím na tlačítko se změní režim)</span>
            </p>
         </section>
      </div>
   );
}
