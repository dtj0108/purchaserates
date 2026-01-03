"use client";

import type { User } from "@supabase/supabase-js";
import {
  Lock01,
  Phone,
  ArrowUp,
  ArrowDown,
  CheckCircle,
} from "@untitledui/icons";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { Button } from "@/components/base/buttons/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PortalLayout } from "../portal-layout";

interface RatesContentProps {
  user: User | null;
}

// 30-day rate history
const rateHistory = [
  { date: "Dec 4", rate: 6.78 },
  { date: "Dec 6", rate: 6.72 },
  { date: "Dec 8", rate: 6.69 },
  { date: "Dec 10", rate: 6.65 },
  { date: "Dec 12", rate: 6.71 },
  { date: "Dec 14", rate: 6.68 },
  { date: "Dec 16", rate: 6.64 },
  { date: "Dec 18", rate: 6.58 },
  { date: "Dec 20", rate: 6.55 },
  { date: "Dec 22", rate: 6.52 },
  { date: "Dec 24", rate: 6.48 },
  { date: "Dec 26", rate: 6.51 },
  { date: "Dec 28", rate: 6.55 },
  { date: "Dec 30", rate: 6.59 },
  { date: "Jan 1", rate: 6.62 },
  { date: "Jan 3", rate: 6.65 },
];

const rateComparison = [
  { type: "30-Year Fixed", yourRate: 6.25, marketRate: 6.65, difference: -0.40 },
  { type: "15-Year Fixed", yourRate: null, marketRate: 5.89, difference: null },
  { type: "5/1 ARM", yourRate: null, marketRate: 6.15, difference: null },
  { type: "7/1 ARM", yourRate: null, marketRate: 6.25, difference: null },
  { type: "FHA 30-Year", yourRate: null, marketRate: 6.12, difference: null },
];

export function RatesContent({ user }: RatesContentProps) {
  return (
    <PortalLayout user={user}>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-display-sm font-semibold text-primary">Rates</h1>
        <p className="text-md text-tertiary">Your locked rate and current market rates.</p>
      </div>

      {/* Top Row: Rate Lock Status + Rate Info */}
      <div className="mb-6 grid gap-6 lg:grid-cols-3">
        {/* Your Locked Rate */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">Your Locked Rate</CardTitle>
                <CardDescription>Locked on December 15, 2024</CardDescription>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-success-100 px-3 py-1">
                <Lock01 className="size-4 text-success-600" />
                <span className="text-sm font-medium text-success-700">Active Lock</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 sm:grid-cols-4">
              <div>
                <p className="text-sm text-tertiary">Interest Rate</p>
                <p className="text-display-xs font-semibold text-primary">6.25%</p>
              </div>
              <div>
                <p className="text-sm text-tertiary">APR</p>
                <p className="text-display-xs font-semibold text-primary">6.38%</p>
              </div>
              <div>
                <p className="text-sm text-tertiary">Loan Type</p>
                <p className="text-display-xs font-semibold text-primary">30-Year Fixed</p>
              </div>
              <div>
                <p className="text-sm text-tertiary">Points</p>
                <p className="text-display-xs font-semibold text-primary">0.5</p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 rounded-lg bg-success-50 p-3">
              <CheckCircle className="size-5 text-success-600" />
              <p className="text-sm text-success-700">
                <strong>Great news!</strong> Your rate is 0.40% below today&apos;s market rate. You&apos;re saving approximately $96/month.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Lock Expiration */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Lock Expiration</CardTitle>
            <CardDescription>Time remaining on your rate lock</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-display-md font-bold text-primary">18</p>
              <p className="text-md text-tertiary">days remaining</p>
              <p className="mt-2 text-sm text-secondary">Expires January 21, 2025</p>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-secondary">
              <div className="h-full w-3/5 rounded-full bg-brand-solid" />
            </div>
            <p className="mt-2 text-center text-xs text-tertiary">60% of lock period used</p>
            <Button color="secondary" size="md" className="mt-4 w-full" iconLeading={Phone}>
              Request Extension
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Rate History Chart */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg">30-Day Rate History</CardTitle>
          <CardDescription>30-year fixed mortgage rates (national average)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={rateHistory} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: '#6b7280' }}
                  interval={2}
                />
                <YAxis
                  domain={[6.2, 6.9]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: '#6b7280' }}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip
                  formatter={(value: number) => [`${value}%`, 'Market Rate']}
                  contentStyle={{
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
                <ReferenceLine
                  y={6.25}
                  stroke="#16a34a"
                  strokeDasharray="5 5"
                  label={{ value: 'Your Rate: 6.25%', position: 'right', fill: '#16a34a', fontSize: 11 }}
                />
                <Line
                  type="monotone"
                  dataKey="rate"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 5, fill: '#3b82f6' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-center text-xs text-tertiary">
            Green dashed line shows your locked rate. Market rates are shown in blue.
          </p>
        </CardContent>
      </Card>

      {/* Rate Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Rate Comparison</CardTitle>
          <CardDescription>Compare your locked rate to today&apos;s market rates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-secondary">
                  <th className="pb-3 text-left text-xs font-medium uppercase text-tertiary">Loan Type</th>
                  <th className="pb-3 text-left text-xs font-medium uppercase text-tertiary">Your Rate</th>
                  <th className="pb-3 text-left text-xs font-medium uppercase text-tertiary">Today&apos;s Rate</th>
                  <th className="pb-3 text-left text-xs font-medium uppercase text-tertiary">Difference</th>
                </tr>
              </thead>
              <tbody>
                {rateComparison.map((row) => (
                  <tr key={row.type} className="border-b border-secondary last:border-0">
                    <td className="py-4">
                      <span className="text-sm font-medium text-primary">{row.type}</span>
                    </td>
                    <td className="py-4">
                      {row.yourRate ? (
                        <span className="text-sm font-semibold text-success-600">{row.yourRate}%</span>
                      ) : (
                        <span className="text-sm text-tertiary">—</span>
                      )}
                    </td>
                    <td className="py-4">
                      <span className="text-sm text-secondary">{row.marketRate}%</span>
                    </td>
                    <td className="py-4">
                      {row.difference !== null ? (
                        <div className="flex items-center gap-1">
                          <ArrowDown className="size-4 text-success-500" />
                          <span className="text-sm font-medium text-success-600">{Math.abs(row.difference).toFixed(2)}% better</span>
                        </div>
                      ) : (
                        <span className="text-sm text-tertiary">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-tertiary">
            * Market rates are updated daily and are for informational purposes only. Actual rates may vary based on credit score, loan amount, and other factors.
          </p>
        </CardContent>
      </Card>
    </PortalLayout>
  );
}
