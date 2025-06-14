import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import DataTable from "./data-table";

interface SkladPageProps {
   params: Promise<{ id: number }>;
}

export default async function SkladPage({ params }: SkladPageProps) {
   const { id } = await params;

   return (
      <div className="space-y-4">
         <h1 className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">Sklad {id}</h1>
         <div className="flex items-start gap-4">
            <DataTable />
            <div className="w-1/4 space-y-4">
               <Card>
                  <CardHeader>
                     <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">Základní údaje</CardTitle>
                  </CardHeader>
                  <CardContent>
                     <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                           <MapPin className="size-4" />
                           Praha 4 - U Rakovky
                        </div>
                        <div className="flex items-center gap-2">
                           <Phone className="size-4" />
                           +420 123 456 789
                        </div>
                        <div className="flex items-center gap-2">
                           <Mail className="size-4" />
                           info@sklad.cz
                        </div>
                     </div>
                  </CardContent>
               </Card>
               <Card>
                  <CardHeader>
                     <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">Mapa</CardTitle>
                  </CardHeader>
                  <CardContent>
                     <div className="flex flex-col gap-2">
                        <iframe
                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d736.6196622823802!2d14.514111532236015!3d50.150007148077336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470bec64347832c5%3A0xf33a6526e9568dbc!2s%C4%8Cesk%C3%A1%20Doka%20bednic%C3%AD%20technika%20spol.%20s%20r.o.!5e1!3m2!1scs!2scz!4v1749939238036!5m2!1scs!2scz"
                           className="w-full h-96 rounded-lg"
                        />
                     </div>
                  </CardContent>
               </Card>
            </div>
         </div>
      </div>
   );
}
