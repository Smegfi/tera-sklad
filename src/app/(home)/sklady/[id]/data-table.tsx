"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search } from "lucide-react";
import testData from "./data.json";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import FilterButton from "./filter-button";
import MoreDetails from "./more-details";

export default function DataTable() {
   const [search, setSearch] = useState("");
   const [data, setData] = useState(testData.items);

   function handleSearch() {
      setData(testData.items.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())));
      console.log(data);
   }

   return (
      <Card className="w-3/4">
         <CardHeader>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">Skladové zásoby</CardTitle>
            <div className="flex items-center gap-6">
               <div className="flex items-center gap-2 flex-1">
                  <Input type="text" placeholder="Hledat" value={search} onChange={(e) => setSearch(e.target.value)} />
                  <Button onClick={handleSearch}>
                     <Search className="size-4" />
                     Hledat
                  </Button>
                  <FilterButton />
               </div>
               <Button variant="outline">
                  <Plus className="size-4" />
                  Přidat zásobu
               </Button>
            </div>
         </CardHeader>
         <CardContent>
            <Table>
               <TableHeader>
                  <TableRow>
                     <TableHead>Název</TableHead>
                     <TableHead>Množství</TableHead>
                     <TableHead>Jednotka</TableHead>
                     <TableHead>Kategorie</TableHead>
                     <TableHead>Stav</TableHead>
                     <TableHead></TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {data.map((item) => {
                     return (
                        <TableRow key={item.id}>
                           <TableCell>{item.name}</TableCell>
                           <TableCell>{item.quantity}</TableCell>
                           <TableCell>{item.unit}</TableCell>
                           <TableCell>{item.category}</TableCell>
                           <TableCell>{item.status}</TableCell>
                           <TableCell>
                              <MoreDetails />
                           </TableCell>
                        </TableRow>
                     );
                  })}
               </TableBody>
            </Table>
         </CardContent>
      </Card>
   );
}
