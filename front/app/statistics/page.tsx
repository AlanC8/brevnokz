"use client"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import Link from "next/link"
import { CartesianGrid, XAxis, Line, LineChart } from "recharts"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"

export default function Component() {
  return (
    <div className="p-4 max-w-sm mx-auto">
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="Tree" />
            <AvatarFallback>🌳</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-bold">Ваша статистика</h2>
            <p className="text-sm">Вы спасли</p>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold">1 🌳</span>
              <span className="text-lg font-semibold">1200см3</span>
              <ClockIcon className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm">До следующего уровня</span>
          <span className="text-lg font-semibold">52 🌳</span>
        </div>
        <h3 className="text-lg font-bold">Прогресс</h3>
        <Card>
          <CardContent>
            <div className="flex items-center justify-between p-5">
              <div>
                <div className="text-2xl font-bold">32.4k</div>
                <p className="text-sm text-muted-foreground">Users this week</p>
              </div>
              <div className="text-green-500 text-sm font-semibold">12% ↑</div>
            </div>
            <LinechartChart className="w-full h-[150px]" />
            <div className="flex justify-between items-center mt-10">
              <Select>
                <SelectTrigger id="timeframe" aria-label="Timeframe">
                  <SelectValue placeholder="Last 7 days" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7days">Last 7 days</SelectItem>
                  <SelectItem value="14days">Last 14 days</SelectItem>
                  <SelectItem value="30days">Last 30 days</SelectItem>
                </SelectContent>
              </Select>
              <Link href="#" className="text-blue-500 text-sm font-semibold" prefetch={false}>
                USERS REPORT
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function LinechartChart(props: any) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <LineChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Line dataKey="desktop" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
        </LineChart>
      </ChartContainer>
    </div>
  )
}