"use client";

import { Label, Pie, PieChart } from "recharts";
import { CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const QuestionAnalysis = () => {
  const chartData = [
    { browser: "score", marks: 10, fill: "blue" },
    { browser: "failed", marks: 5, fill: "lightblue" },
  ];
  const chartConfig = {
    marks: {
      label: "Marks",
    },
    score: {
      label: "Score",
      color: "hsl(var(--chart-1))",
    },
    failed: {
      label: "Failed",
      color: "hsl(var(--chart-2))",
    },
  };

  return (
    <div className="mt-6 mx-2">
      <div className="flex items-center justify-between my-2">
        <h2 className="font-bold">Question Analysis</h2>
        <p className="text-blue-400">10/15</p>
      </div>
      <p className="font-semibold">
        You scored 10 questions correct out of 15. However, you still need
        improvement
      </p>

      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="marks"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={3}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        ></tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Score
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </div>
  );
};

export default QuestionAnalysis;
