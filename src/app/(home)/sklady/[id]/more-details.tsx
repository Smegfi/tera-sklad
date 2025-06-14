import { Button } from "@/components/ui/button";
import {
   DropdownMenu,
   DropdownMenuCheckboxItem,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Calculator, EllipsisVertical, Pencil } from "lucide-react";

export default function MoreDetails() {
   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button variant="ghost">
               <EllipsisVertical className="size-4" />
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Možnosti</DropdownMenuLabel>
            <DropdownMenuItem>
               <Pencil className="size-4" />
               Upravit
            </DropdownMenuItem>
            <DropdownMenuItem>
               <Calculator className="size-4" />
               Nastavit limit
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked>Aktivní</DropdownMenuCheckboxItem>
         </DropdownMenuContent>
      </DropdownMenu>
   );
}
