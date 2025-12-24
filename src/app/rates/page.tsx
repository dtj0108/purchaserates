"use client";

import { useState } from "react";
import { TrendDown02, TrendUp02 } from "@untitledui/icons";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { Button } from "@/components/base/buttons/button";
import { Badge } from "@/components/base/badges/badges";
import { PurchaseRatesLogo } from "@/components/foundations/logo/purchaserates-logo";
import { Header } from "@/components/marketing/header-navigation/header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

// Mock data for rates
const currentRates = [
    {
        id: "30-year-fixed",
        loanType: "30-Year Fixed",
        currentRate: 6.35,
        apr: 6.42,
        points: 0.5,
        change: 0.12,
        trend: "up" as const,
        monthlyPayment: 2491,
    },
    {
        id: "15-year-fixed",
        loanType: "15-Year Fixed",
        currentRate: 5.49,
        apr: 5.58,
        points: 0.5,
        change: -0.08,
        trend: "down" as const,
        monthlyPayment: 3247,
    },
    {
        id: "fha",
        loanType: "FHA 30-Year",
        currentRate: 5.17,
        apr: 5.98,
        points: 0,
        change: -0.15,
        trend: "down" as const,
        monthlyPayment: 2186,
    },
    {
        id: "va",
        loanType: "VA 30-Year",
        currentRate: 5.25,
        apr: 5.45,
        points: 0,
        change: 0.05,
        trend: "up" as const,
        monthlyPayment: 2208,
    },
    {
        id: "jumbo",
        loanType: "Jumbo 30-Year",
        currentRate: 6.45,
        apr: 6.52,
        points: 0.5,
        change: 0.18,
        trend: "up" as const,
        monthlyPayment: 2531,
    },
];

// Historical data for the chart (last 90 days)
const historicalData = Array.from({ length: 90 }, (_, i) => {
    const date = new Date("2024-06-30");
    date.setDate(date.getDate() - (89 - i));
    const baseDecline = i * 0.005; // Gradual decline over time
    return {
        date: date.toISOString().split('T')[0],
        rate30Yr: 6.50 - baseDecline + (Math.random() - 0.5) * 0.15,
        rate15Yr: 5.65 - baseDecline * 0.8 + (Math.random() - 0.5) * 0.12,
        rateFHA: 5.35 - baseDecline * 0.7 + (Math.random() - 0.5) * 0.10,
    };
});

const chartConfig = {
  rate30Yr: {
    label: "30-Year Fixed",
    color: "hsl(142, 76%, 36%)", // Green
  },
  rate15Yr: {
    label: "15-Year Fixed",
    color: "hsl(217, 91%, 60%)", // Blue
  },
  rateFHA: {
    label: "FHA",
    color: "hsl(142, 71%, 45%)", // Light green
  },
} satisfies ChartConfig;

const MetricCard = ({
    title,
    value,
    change,
    trend,
}: {
    title: string;
    value: string;
    change: string;
    trend: "up" | "down";
}) => {
    return (
        <div className="flex-1 rounded-xl border border-secondary bg-primary p-5 shadow-xs">
            <p className="text-sm font-medium text-tertiary">{title}</p>
            <p className="mt-2 text-display-sm font-semibold text-primary">{value}</p>
            <div className="mt-2 flex items-center gap-1.5">
                {trend === "down" ? (
                    <>
                        <TrendDown02 className="size-4 text-success-600" />
                        <span className="text-sm font-medium text-success-600">{change}</span>
                    </>
                ) : (
                    <>
                        <TrendUp02 className="size-4 text-error-600" />
                        <span className="text-sm font-medium text-error-600">{change}</span>
                    </>
                )}
                <span className="text-sm text-tertiary">vs last week</span>
            </div>
        </div>
    );
};

const RateChartInteractive = () => {
    const [timeRange, setTimeRange] = useState("90d");

    const filteredData = historicalData.filter((item) => {
        const date = new Date(item.date);
        const referenceDate = new Date("2024-06-30");
        let daysToSubtract = 90;
        if (timeRange === "30d") {
            daysToSubtract = 30;
        } else if (timeRange === "7d") {
            daysToSubtract = 7;
        }
        const startDate = new Date(referenceDate);
        startDate.setDate(startDate.getDate() - daysToSubtract);
        return date >= startDate;
    });

    return (
        <Card className="border-secondary">
            <CardHeader className="flex items-center gap-2 space-y-0 border-b border-secondary py-5 sm:flex-row">
                <div className="grid flex-1 gap-1">
                    <CardTitle>Mortgage Rate Trends</CardTitle>
                    <CardDescription>
                        Historical rates over the selected time period
                    </CardDescription>
                </div>
                <div className="hidden sm:flex gap-2">
                    {["90d", "30d", "7d"].map((period) => (
                        <button
                            key={period}
                            onClick={() => setTimeRange(period)}
                            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                                timeRange === period
                                    ? "bg-brand-solid text-white"
                                    : "text-tertiary hover:bg-secondary"
                            }`}
                        >
                            {period === "90d" ? "90 Days" : period === "30d" ? "30 Days" : "7 Days"}
                        </button>
                    ))}
                </div>
            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[250px] w-full"
                >
                    <AreaChart data={filteredData}>
                        <defs>
                            <linearGradient id="fill30Yr" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--color-rate30Yr)" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="var(--color-rate30Yr)" stopOpacity={0.1} />
                            </linearGradient>
                            <linearGradient id="fill15Yr" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--color-rate15Yr)" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="var(--color-rate15Yr)" stopOpacity={0.1} />
                            </linearGradient>
                            <linearGradient id="fillFHA" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--color-rateFHA)" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="var(--color-rateFHA)" stopOpacity={0.1} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            minTickGap={32}
                            tickFormatter={(value) => {
                                const date = new Date(value);
                                return date.toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                });
                            }}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={
                                <ChartTooltipContent
                                    labelFormatter={(value) => {
                                        return new Date(value).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                        });
                                    }}
                                    formatter={(value) => `${Number(value).toFixed(2)}%`}
                                    indicator="dot"
                                />
                            }
                        />
                        <Area
                            dataKey="rateFHA"
                            type="natural"
                            fill="url(#fillFHA)"
                            stroke="var(--color-rateFHA)"
                            stackId="a"
                        />
                        <Area
                            dataKey="rate15Yr"
                            type="natural"
                            fill="url(#fill15Yr)"
                            stroke="var(--color-rate15Yr)"
                            stackId="a"
                        />
                        <Area
                            dataKey="rate30Yr"
                            type="natural"
                            fill="url(#fill30Yr)"
                            stroke="var(--color-rate30Yr)"
                            stackId="a"
                        />
                        <ChartLegend content={<ChartLegendContent />} />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
};

export default function RatesPage() {
    return (
        <div className="min-h-screen bg-secondary_alt">
            <Header />

            <main className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-12">
                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-display-sm font-semibold text-primary md:text-display-md">
                        Current Mortgage Rates
                    </h1>
                    <p className="mt-2 text-lg text-tertiary">
                        Updated {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} at{" "}
                        {new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}
                    </p>
                </div>

                {/* Metrics Cards */}
                <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                    <MetricCard title="30-Year Fixed" value="6.35%" change="0.12%" trend="up" />
                    <MetricCard title="15-Year Fixed" value="5.49%" change="0.08%" trend="down" />
                    <MetricCard title="FHA 30-Year" value="5.17%" change="0.15%" trend="down" />
                </div>

                {/* Interactive Chart Section */}
                <div className="mb-8">
                    <RateChartInteractive />
                </div>

                {/* Rates Table */}
                <div className="rounded-xl border border-secondary bg-primary shadow-xs">
                    <div className="border-b border-secondary p-6">
                        <h2 className="text-xl font-semibold text-primary">Compare Rates</h2>
                        <p className="mt-1 text-sm text-tertiary">Based on $400,000 loan amount</p>
                    </div>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-secondary bg-secondary_subtle">
                                    <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase">Loan Type</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase">Rate</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase">APR</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase">Points</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase">Monthly Payment</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase">Change</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-secondary uppercase">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-secondary">
                                {currentRates.map((rate) => (
                                    <tr key={rate.id} className="hover:bg-secondary_subtle transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col">
                                                <span className="font-semibold text-primary">{rate.loanType}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-lg font-bold text-brand-600">{rate.currentRate}%</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-sm text-secondary">{rate.apr}%</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-sm text-secondary">{rate.points}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="font-medium text-primary">${rate.monthlyPayment.toLocaleString()}/mo</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Badge 
                                                color={rate.trend === "down" ? "success" : "error"} 
                                                size="sm"
                                                type="modern"
                                            >
                                                {rate.trend === "down" ? "↓" : "↑"} {Math.abs(rate.change)}%
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <Button size="sm" href="/get-started">
                                                Get My Rate
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="border-t border-secondary bg-secondary_subtle p-4">
                        <p className="text-xs text-tertiary text-center">
                            Rates shown are estimates and may vary based on your credit profile, location, and other factors. 
                            Contact us for a personalized rate quote.
                        </p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 rounded-xl bg-brand-section p-8 text-center">
                    <h2 className="text-2xl font-semibold text-white">Ready to Lock in Your Rate?</h2>
                    <p className="mt-2 text-brand-200">Get a personalized rate quote in minutes</p>
                    <Button size="xl" className="mt-6 bg-white text-brand-600 hover:bg-gray-50" href="/get-started">
                        Get My Rate
                    </Button>
                </div>
            </main>
        </div>
    );
}

