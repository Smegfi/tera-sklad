"use client";

import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

export function NavMain({
   items,
}: {
   items: {
      title: string;
      url: string;
      icon?: LucideIcon;
   }[];
}) {
   return (
      <SidebarGroup>
         <SidebarGroupLabel>Navigace</SidebarGroupLabel>
         <SidebarGroupContent className="flex flex-col gap-2">
            <SidebarMenu>
               {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                     <Link href={item.url}>
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
