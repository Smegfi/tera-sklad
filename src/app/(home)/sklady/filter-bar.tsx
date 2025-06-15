import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";

export default function FilterBar() {
   return (
      <div className="flex justify-between items-center gap-2">
         <div className="flex w-full max-w-sm items-center gap-2">
            <Input type="text" placeholder="Hledat sklady" />
            <Button type="submit" variant="outline">
               <Search />
               <span className="hidden md:flex">Hledat</span>
            </Button>
         </div>
         <div className="flex items-center gap-2">
            <Button>
               <Plus />
               <span className="hidden md:flex">Přidat sklad</span>
            </Button>
         </div>
      </div>
   );
}
