import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { PlusIcon } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

export default function NewOrder() {
   return (
      <SidebarGroupContent>
         <SidebarMenu>
            <SidebarMenuItem className="flex items-center gap-2">
               <Dialog>
                  <DialogTrigger asChild>
                     <SidebarMenuButton
                        tooltip="Žádost o materiál"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
                     >
                        <PlusIcon className="!size-5" />
                        <span>Žádost o materiál</span>
                     </SidebarMenuButton>
                  </DialogTrigger>
                  <DialogContent>
                     <DialogHeader>
                        <DialogTitle>Vytvoření nové žádosti o materiál</DialogTitle>
                        <DialogDescription>Zde můžete vytvořit novou žádost o materiál.</DialogDescription>
                     </DialogHeader>
                     <div className="flex flex-col gap-6">
                        <Skeleton className="h-12 w-full" />
                        <Skeleton className="h-12 w-full" />
                     </div>
                     Možnost žádosti o materiál pomocí tohoto formuláře...
                  </DialogContent>
               </Dialog>
            </SidebarMenuItem>
         </SidebarMenu>
      </SidebarGroupContent>
   );
}
