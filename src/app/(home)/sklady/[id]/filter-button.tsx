import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter } from "lucide-react";
import testData from "./data.json";

export default function FilterButton() {
   return (
      <Dialog>
         <DialogTrigger asChild>
            <Button variant="default">
               <Filter className="size-4" />
               Filtrovat
            </Button>
         </DialogTrigger>
         <DialogContent>
            <DialogHeader>
               <DialogTitle>Filtrovat</DialogTitle>
               <DialogDescription>Filtrování skladových zásob</DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-4">
               <div className="flex flex-col gap-2">
                  <Label>Stav</Label>
                  <Select defaultValue="all">
                     <SelectTrigger className="w-full">
                        <SelectValue placeholder="Vyberte stav" />
                     </SelectTrigger>
                     <SelectContent>
                        <SelectItem value="all">Vše</SelectItem>
                        <SelectItem value="available">Skladem</SelectItem>
                        <SelectItem value="low">Nedostatek</SelectItem>
                        <SelectItem value="unavailable">Vyprodáno</SelectItem>
                     </SelectContent>
                  </Select>
               </div>
               <div className="flex flex-col gap-2">
                  <Label>Kategorie</Label>
                  <Select>
                     <SelectTrigger className="w-full">
                        <SelectValue placeholder="Vyberte kategorii" />
                     </SelectTrigger>
                     <SelectContent>
                        {testData.items
                           .reduce((acc, item) => {
                              if (!acc.includes(item.category)) {
                                 acc.push(item.category);
                              }
                              return acc;
                           }, [] as string[])
                           .map((category) => (
                              <SelectItem key={category} value={category}>
                                 {category}
                              </SelectItem>
                           ))}
                     </SelectContent>
                  </Select>
               </div>
               <Button>Filtrovat</Button>
            </div>
         </DialogContent>
      </Dialog>
   );
}
