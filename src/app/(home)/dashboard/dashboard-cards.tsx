import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TriangleAlert } from "lucide-react";

export function DashboardCards() {
   return (
      <div className="grid grid-cols-1 gap-4 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
         <Card>
            <CardHeader>
               <CardTitle className="text-3xl font-semibold">1 250</CardTitle>
               <CardDescription>Celkem položek</CardDescription>
            </CardHeader>
         </Card>
         <Card>
            <CardHeader>
               <CardTitle className="text-3xl font-semibold">45</CardTitle>
               <CardDescription>Dneska přijatých položek</CardDescription>
            </CardHeader>
         </Card>
         <Card>
            <CardHeader>
               <CardTitle className="text-3xl font-semibold flex items-center gap-2">
                  3 <TriangleAlert className="text-red-500 !size-7" /> <span className="text-sm text-red-500">Nízké zásoby</span>
               </CardTitle>
               <CardDescription>Nízké zásoby</CardDescription>
            </CardHeader>
         </Card>
         <Card>
            <CardHeader>
               <CardTitle className="text-3xl font-semibold">4</CardTitle>
               <CardDescription>Skladů</CardDescription>
            </CardHeader>
         </Card>
      </div>
   );
}
