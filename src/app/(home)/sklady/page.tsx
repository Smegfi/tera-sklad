import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardTitle, CardDescription, CardHeader, CardFooter } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import FilterBar from "@/app/(home)/sklady/filter-bar";
import Link from "next/link";

export default function Page() {
   return (
      <div className="space-y-4">
         <FilterBar />
         <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            <Card>
               <CardHeader>
                  <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">Sklad 1</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                     <MapPin className="size-4" />
                     Praha 4 - U Rakovky
                  </CardDescription>
                  <CardAction>
                     <Badge variant="default">Online</Badge>
                  </CardAction>
               </CardHeader>
               <CardFooter className="flex justify-end items-center gap-1.5 text-sm">
                  <Link href="/sklady/1">
                     <Button variant="outline">Zobrazit</Button>
                  </Link>
               </CardFooter>
            </Card>
            <Card>
               <CardHeader>
                  <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">Sklad 2</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                     <MapPin className="size-4" />
                     Praha 10 - Měcholupy
                  </CardDescription>
                  <CardAction>
                     <Badge variant="default">Online</Badge>
                  </CardAction>
               </CardHeader>
               <CardFooter className="flex justify-end items-center gap-1.5 text-sm">
                  <Link href="/sklady/1">
                     <Button variant="outline">Zobrazit</Button>
                  </Link>
               </CardFooter>
            </Card>
            <Card>
               <CardHeader>
                  <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">Sklad 3</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                     <MapPin className="size-4" />
                     Praha 9 - Čakovice
                  </CardDescription>
                  <CardAction>
                     <Badge variant="destructive">Offline</Badge>
                  </CardAction>
               </CardHeader>
               <CardFooter className="flex justify-end items-center gap-1.5 text-sm">
                  <Link href="/sklady/1">
                     <Button variant="outline">Zobrazit</Button>
                  </Link>
               </CardFooter>
            </Card>
         </div>
      </div>
   );
}
