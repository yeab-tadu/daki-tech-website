'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import { Users, Eye, FileText, Send } from 'lucide-react';
import type { ChartConfig } from '@/components/ui/chart';

const chartData = [
  { month: 'January', visitors: 186, submissions: 80 },
  { month: 'February', visitors: 305, submissions: 200 },
  { month: 'March', visitors: 237, submissions: 120 },
  { month: 'April', visitors: 73, submissions: 190 },
  { month: 'May', visitors: 209, submissions: 130 },
  { month: 'June', visitors: 214, submissions: 140 },
];

const chartConfig = {
  visitors: {
    label: 'Visitors',
    color: 'hsl(var(--primary))',
  },
  submissions: {
    label: 'Submissions',
    color: 'hsl(var(--accent))',
  },
} satisfies ChartConfig;

const summaryCards = [
  { title: 'Total Visitors', value: '10,234', icon: <Eye className="h-6 w-6" /> },
  { title: 'Blog Posts', value: '12', icon: <FileText className="h-6 w-6" /> },
  { title: 'Job Applicants', value: '89', icon: <Users className="h-6 w-6" /> },
  { title: 'Contact Submissions', value: '152', icon: <Send className="h-6 w-6" /> },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {summaryCards.map((card) => (
          <Card key={card.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
              <div className="text-primary">{card.icon}</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Website Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="visitors" fill="var(--color-visitors)" radius={4} />
              <Bar dataKey="submissions" fill="var(--color-submissions)" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
