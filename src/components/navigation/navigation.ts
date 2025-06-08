import { HardHat, LayoutDashboard, Warehouse } from "lucide-react";

export const data = {
   user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
   },
   navMain: [
      {
         title: "Dashboard",
         url: "/dashboard",
         icon: LayoutDashboard,
      },
      {
         title: "Sklady",
         url: "/sklady",
         icon: Warehouse,
      },
      {
         title: "Stavby",
         url: "/stavby",
         icon: HardHat,
      },
   ],
};
