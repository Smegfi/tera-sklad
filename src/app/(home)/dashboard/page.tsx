import { DashboardCards } from "@/app/(home)/dashboard/dashboard-cards";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Upload } from "lucide-react";

export default function Page() {
   function getProgressValue() {
      const value = Math.round(Math.random() * 100);
      return (
         <>
            <span className="text-sm text-muted-foreground">{value}%</span>
            <Progress value={value} className="w-full" />
         </>
      );
   }

   return (
      <div className="flex flex-col gap-4">
         <DashboardCards />
         <div className="grid grid-cols-1">
            <Card>
               <CardHeader>
                  <CardTitle>
                     <h2 className="text-xl font-semibold">Aktuální pohyb zboží</h2>
                  </CardTitle>
               </CardHeader>
               <CardContent>
                  <Table>
                     <TableHeader>
                        <TableRow>
                           <TableHead>Čas</TableHead>
                           <TableHead>Typ</TableHead>
                           <TableHead>Materiál</TableHead>
                           <TableHead>Množství</TableHead>
                           <TableHead>Stavba</TableHead>
                           <TableHead>Sklad</TableHead>
                           <TableHead>Zpracovatel</TableHead>
                        </TableRow>
                     </TableHeader>
                     <TableBody>
                        <TableRow>
                           <TableCell>{new Date(Math.random() * 1000000000).toLocaleString("cs-CZ", { hour: "2-digit", minute: "2-digit" })}</TableCell>
                           <TableCell>
                              <div className="flex items-center gap-2">
                                 <Upload className="size-5 text-red-500" />
                                 <span>Výdej</span>
                              </div>
                           </TableCell>
                           <TableCell>Ytong 375mm</TableCell>
                           <TableCell>40 ks</TableCell>
                           <TableCell>BCC Delta</TableCell>
                           <TableCell>Praha 4 - U Rakovky</TableCell>
                           <TableCell>Tomáš Jedlička</TableCell>
                        </TableRow>

                        <TableRow>
                           <TableCell>{new Date(Math.random() * 1000000000).toLocaleString("cs-CZ", { hour: "2-digit", minute: "2-digit" })}</TableCell>
                           <TableCell>
                              <div className="flex items-center gap-2">
                                 <Download className="size-5 text-green-500" />
                                 <span>Příjem</span>
                              </div>
                           </TableCell>
                           <TableCell>Bednění - DOKA Framax Xli 1200x2400</TableCell>
                           <TableCell>10 ks</TableCell>
                           <TableCell>BCC Delta</TableCell>
                           <TableCell>Praha 4 - U Rakovky</TableCell>
                           <TableCell>Tomáš Jedlička</TableCell>
                        </TableRow>

                        <TableRow>
                           <TableCell>{new Date(Math.random() * 1000000000).toLocaleString("cs-CZ", { hour: "2-digit", minute: "2-digit" })}</TableCell>
                           <TableCell>
                              <div className="flex items-center gap-2">
                                 <Upload className="size-5 text-red-500" />
                                 <span>Výdej</span>
                              </div>
                           </TableCell>
                           <TableCell>Cement B20</TableCell>
                           <TableCell>10 pytlů</TableCell>
                           <TableCell>Lihovarská - Praha 9</TableCell>
                           <TableCell>Praha 10 - Měcholupy</TableCell>
                           <TableCell>Ján Novák</TableCell>
                        </TableRow>
                     </TableBody>
                  </Table>
               </CardContent>
            </Card>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
               <CardHeader>
                  <CardTitle>
                     <h2 className="text-xl font-semibold">Nedostatkové položky</h2>
                  </CardTitle>
               </CardHeader>
               <CardContent>
                  <Table>
                     <TableHeader>
                        <TableRow>
                           <TableHead>Materiál</TableHead>
                           <TableHead>Množství</TableHead>
                           <TableHead>Minimální zásoba</TableHead>
                        </TableRow>
                     </TableHeader>
                     <TableBody>
                        <TableRow>
                           <TableCell>Ytong 375mm</TableCell>
                           <TableCell className="text-red-500">40 ks</TableCell>
                           <TableCell>100 ks</TableCell>
                        </TableRow>
                        <TableRow>
                           <TableCell>EPS 100S</TableCell>
                           <TableCell className="text-orange-500">12 ks</TableCell>
                           <TableCell>15 ks</TableCell>
                        </TableRow>
                        <TableRow>
                           <TableCell>Beton B25</TableCell>
                           <TableCell className="text-orange-500">7 m3</TableCell>
                           <TableCell>10 m3</TableCell>
                        </TableRow>
                        <TableRow>
                           <TableCell>Bednění - DOKA Framax Xli 1200x2400</TableCell>
                           <TableCell className="text-yellow-500">10 ks</TableCell>
                           <TableCell>10 ks</TableCell>
                        </TableRow>
                     </TableBody>
                  </Table>
               </CardContent>
            </Card>
            <Card>
               <CardHeader>
                  <CardTitle>
                     <h2 className="text-xl font-semibold">Zaplnění skladů</h2>
                  </CardTitle>
               </CardHeader>
               <CardContent>
                  <Table>
                     <TableHeader>
                        <TableRow>
                           <TableHead>Sklad</TableHead>
                           <TableHead>Zaplnění</TableHead>
                        </TableRow>
                     </TableHeader>
                     <TableBody>
                        <TableRow>
                           <TableCell>Praha 4 - U Rakovky</TableCell>
                           <TableCell className="flex items-center gap-2">{getProgressValue()}</TableCell>
                        </TableRow>
                        <TableRow>
                           <TableCell>Praha 10 - Měcholupy</TableCell>
                           <TableCell className="flex items-center gap-2">{getProgressValue()}</TableCell>
                        </TableRow>
                        <TableRow>
                           <TableCell>Praha 9 - Čakovice</TableCell>
                           <TableCell className="flex items-center gap-2">{getProgressValue()}</TableCell>
                        </TableRow>
                     </TableBody>
                  </Table>
               </CardContent>
            </Card>
         </div>
      </div>
   );
}
