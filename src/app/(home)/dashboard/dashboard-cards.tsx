import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TriangleAlert } from "lucide-react";

export function DashboardCards() {
   return (
      <div className="grid grid-cols-2 gap-4 xl:grid-cols-2 2xl:grid-cols-4 ">
         <Card>
            <CardHeader>
               <CardTitle className="text-3xl font-semibold">1 250</CardTitle>
               <CardDescription>Celkem položek</CardDescription>
            </CardHeader>
         </Card>
         <Card>
            <CardHeader>
               <CardTitle className="text-3xl font-semibold">45</CardTitle>
               <CardDescription>Dnes přijatých položek</CardDescription>
            </CardHeader>
         </Card>
         <Card>
            <CardHeader>
               <CardTitle className="text-3xl font-semibold">3</CardTitle>
               <CardDescription className="flex items-center gap-1">
                  <TriangleAlert className="text-red-500 !size-4" /> <span className="text-sm text-red-500">Nízké zásoby</span>
               </CardDescription>
            </CardHeader>
         </Card>
         <Card>
            <CardHeader>
               <CardTitle className="text-3xl font-semibold">4</CardTitle>
               <CardDescription>Počet skladů</CardDescription>
            </CardHeader>
         </Card>
      </div>
   );
}
