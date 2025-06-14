import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardTitle, CardDescription, CardHeader, CardFooter, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import FilterBar from "@/app/(home)/stavby/filter-bar";
import Image from "next/image";

export default function Page() {
   return (
      <div className="space-y-4">
         <FilterBar />
         <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            <Card>
               <CardHeader>
                  <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">BBC Delta</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                     <MapPin className="size-4" />
                     Praha 4
                  </CardDescription>
                  <CardAction>
                     <Badge variant="default">Online</Badge>
                  </CardAction>
               </CardHeader>
               <CardContent>
                  <div className="relative h-40 w-full">
                     <Image src="/1.jpg" alt="BBC Delta" fill className="object-cover object-left h-full w-full brightness-[0.7] grayscale rounded-lg" />
                  </div>
               </CardContent>
               <CardFooter className="flex justify-end items-center gap-1.5 text-sm">
                  <Button variant="outline">Zobrazit</Button>
               </CardFooter>
            </Card>
            <Card>
               <CardHeader>
                  <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">Suomi Hloubětín</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                     <MapPin className="size-4" />
                     Praha 9
                  </CardDescription>
                  <CardAction>
                     <Badge variant="default">Online</Badge>
                  </CardAction>
               </CardHeader>
               <CardContent>
                  <div className="relative h-40 w-full">
                     <Image src="/3.jpg" alt="BBC Delta" fill className="object-cover object-left h-full w-full brightness-[0.7] grayscale rounded-lg" />
                  </div>
               </CardContent>
               <CardFooter className="flex justify-end items-center gap-1.5 text-sm">
                  <Button variant="outline">Zobrazit</Button>
               </CardFooter>
            </Card>
            <Card>
               <CardHeader>
                  <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">OC Chodov</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                     <MapPin className="size-4" />
                     Praha 4 - Chodov
                  </CardDescription>
                  <CardAction>
                     <Badge variant="destructive">Offline</Badge>
                  </CardAction>
               </CardHeader>
               <CardContent>
                  <div className="relative h-40 w-full">
                     <Image src="/5.jpg" alt="BBC Delta" fill className="object-cover object-left h-full w-full brightness-[0.7] grayscale rounded-lg" />
                  </div>
               </CardContent>
               <CardFooter className="flex justify-end items-center gap-1.5 text-sm">
                  <Button variant="outline">Zobrazit</Button>
               </CardFooter>
            </Card>
            <Card>
               <CardHeader>
                  <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">Liberty</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                     <MapPin className="size-4" />
                     Praha 10
                  </CardDescription>
                  <CardAction>
                     <Badge variant="destructive">Offline</Badge>
                  </CardAction>
               </CardHeader>
               <CardContent>
                  <div className="relative h-40 w-full">
                     <Image src="/4.jpg" alt="BBC Delta" fill className="object-cover object-left h-full w-full brightness-[0.7] grayscale rounded-lg" />
                  </div>
               </CardContent>
               <CardFooter className="flex justify-end items-center gap-1.5 text-sm">
                  <Button variant="outline">Zobrazit</Button>
               </CardFooter>
            </Card>
         </div>
      </div>
   );
}
