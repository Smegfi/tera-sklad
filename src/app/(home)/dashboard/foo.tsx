"use client";

import { Line, LineChart } from "recharts";

import { ChartConfig, ChartContainer, ChartTooltipContent, ChartTooltip } from "@/components/ui/chart";

export const description = "A line chart with dots";

const chartData = [
   { month: "January", items: 900 },
   { month: "February", items: 1200 },
   { month: "March", items: 1188 },
   { month: "April", items: 1900 },
   { month: "May", items: 1266 },
   { month: "June", items: 1250 },
];

const chartConfig = {
   items: {
      label: "Položek",
      color: "var(--chart-1)",
   },
} satisfies ChartConfig;

export function ChartLineDots() {
   return (
      <ChartContainer config={chartConfig} className="h-12 w-full">
         <LineChart accessibilityLayer data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Line dataKey="items" strokeWidth={2} stroke="var(--chart-1)" fill="var(--chart-1)" isAnimationActive={false} />
         </LineChart>
      </ChartContainer>
   );
}
