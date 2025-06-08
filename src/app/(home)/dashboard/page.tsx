import { DashboardCards } from "@/app/(home)/dashboard/dashboard-cards";

export default function Page() {
   return (
      <div className="flex flex-1 flex-col">
         <div className="@container/main flex flex-1 flex-col gap-2">
            <DashboardCards />
         </div>
      </div>
   );
}
