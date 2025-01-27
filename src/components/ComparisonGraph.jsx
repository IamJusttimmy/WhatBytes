"use client";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const ComparisonGraph = () => {
  const chartData = [
    { value: 0, numberOfStudent: 9 },
    { value: 25, numberOfStudent: 47 },
    { value: 50, numberOfStudent: 23 },
    { value: 75, numberOfStudent: 90 },
    { value: 100, numberOfStudent: 30 },
  ];
  const chartConfig = {
    numberOfStudent: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
  };

  return (
    <div className="mx-4">
      <div>
        <h1 className="font-bold">Comparison Graph</h1>
        <div className="flex justify-between">
          <p>
            <span className="font-semibold">You scored 30% percentile</span>{" "}
            which is lower than the average percentile 72% of all the engineers
            who took this assessment.
          </p>
          📈
        </div>
      </div>

      <ChartContainer config={chartConfig}>
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            top: 20,
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid strokeDasharray={3} />
          <XAxis
            dataKey="value"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Line
            dataKey="numberOfStudent"
            type="bumpX"
            stroke="var(--color-numberOfStudent)"
            // strokeWidth={2}
            strokeDasharray="7"
            dot={{
              fill: "var(--color-numberOfStudent)",
            }}
            activeDot={{
              r: 6,
            }}
          >
            <LabelList
              position="top"
              offset={12}
              className="fill-foreground"
              fontSize={12}
            />
          </Line>
        </LineChart>
      </ChartContainer>
    </div>
  );
};

export default ComparisonGraph;
