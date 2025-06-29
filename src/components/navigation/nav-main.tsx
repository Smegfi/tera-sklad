"use client";

import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import NewOrder from "./new-order";

interface NavMainProps {
   items: {
      title: string;
      url: string;
      icon?: LucideIcon;
   }[];
}

export function NavMain({ items }: NavMainProps) {
   const { setOpenMobile } = useSidebar();
   return (
      <SidebarGroup>
         <NewOrder />
         <SidebarGroupLabel>Navigace</SidebarGroupLabel>
         <SidebarGroupContent className="flex flex-col gap-2">
            <SidebarMenu>
               {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                     <Link href={item.url} onClick={() => setOpenMobile(false)}>
                        <SidebarMenuButton tooltip={item.title}>
                           {item.icon && <item.icon className="!size-5" />}
                           <span>{item.title}</span>
                        </SidebarMenuButton>
                     </Link>
                  </SidebarMenuItem>
               ))}
            </SidebarMenu>
         </SidebarGroupContent>
      </SidebarGroup>
   );
}
