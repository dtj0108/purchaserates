"use client";

import type { User } from "@supabase/supabase-js";
import {
  Upload01,
  Phone,
  Lock01,
  CheckCircle,
  Clock
} from "@untitledui/icons";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/components/base/buttons/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PortalLayout } from "./portal-layout";

interface PortalContentProps {
  user: User | null;
}

const rateData = [
  { month: "Aug", rate: 7.23 },
  { month: "Sep", rate: 7.18 },
  { month: "Oct", rate: 6.94 },
  { month: "Nov", rate: 6.84 },
  { month: "Dec", rate: 6.69 },
  { month: "Jan", rate: 6.62 },
];

const applicationSteps = [
  { label: "Applied", completed: true },
  { label: "Processing", completed: true },
  { label: "Underwriting", completed: true },
  { label: "Approved", completed: false, current: true },
  { label: "Closing", completed: false },
];

export function PortalContent({ user }: PortalContentProps) {
  return (
    <PortalLayout user={user}>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-display-sm font-semibold text-primary">Dashboard</h1>
        <p className="text-md text-tertiary">Welcome back! Here&apos;s your mortgage overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Your Rate</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-display-xs font-semibold text-primary">6.25%</span>
              <span className="text-sm font-medium text-success-600">Locked</span>
            </div>
            <p className="mt-1 text-xs text-tertiary">30-year fixed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Loan Amount</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-display-xs font-semibold text-primary">$450,000</div>
            <p className="mt-1 text-xs text-tertiary">Principal balance</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Monthly Payment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-display-xs font-semibold text-primary">$2,771</div>
            <p className="mt-1 text-xs text-tertiary">Principal & interest</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Days to Close</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-display-xs font-semibold text-primary">18</span>
              <span className="text-sm text-tertiary">days</span>
            </div>
            <p className="mt-1 text-xs text-tertiary">Estimated closing: Jan 21</p>
          </CardContent>
        </Card>
      </div>

      {/* Two Column Layout */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Rate Trends Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Rate Trends</CardTitle>
            <CardDescription>30-year fixed mortgage rates (national average)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={rateData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#6b7280' }}
                  />
                  <YAxis
                    domain={[6, 7.5]}
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#6b7280' }}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip
                    formatter={(value: number) => [`${value}%`, 'Rate']}
                    contentStyle={{
                      borderRadius: '8px',
                      border: '1px solid #e5e7eb',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="rate"
                    stroke="#16a34a"
                    strokeWidth={2}
                    dot={{ fill: '#16a34a', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, fill: '#16a34a' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-4 text-center text-xs text-tertiary">
              Your locked rate of 6.25% is below the current national average
            </p>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Button color="secondary" size="md" iconLeading={Upload01} href="/portal/documents" className="w-full justify-start">
              Upload Documents
            </Button>
            <Button color="secondary" size="md" iconLeading={Phone} className="w-full justify-start">
              Contact Loan Officer
            </Button>
            <Button color="secondary" size="md" iconLeading={Lock01} href="/portal/rates" className="w-full justify-start">
              View Rate Lock Details
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Application Status */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-lg">Application Status</CardTitle>
          <CardDescription>Track your mortgage application progress</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            {applicationSteps.map((step, index) => (
              <div key={step.label} className="flex flex-1 items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex size-10 items-center justify-center rounded-full ${
                      step.completed
                        ? "bg-success-100 text-success-600"
                        : step.current
                        ? "bg-brand-primary text-brand-secondary"
                        : "bg-secondary text-tertiary"
                    }`}
                  >
                    {step.completed ? (
                      <CheckCircle className="size-5" />
                    ) : step.current ? (
                      <Clock className="size-5" />
                    ) : (
                      <span className="text-sm font-medium">{index + 1}</span>
                    )}
                  </div>
                  <span
                    className={`mt-2 text-xs font-medium ${
                      step.completed || step.current ? "text-primary" : "text-tertiary"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {index < applicationSteps.length - 1 && (
                  <div
                    className={`mx-2 h-0.5 flex-1 ${
                      step.completed ? "bg-success-500" : "bg-secondary"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg bg-brand-primary p-4">
            <p className="text-sm font-medium text-brand-secondary">
              Your application is being reviewed for final approval. Expected decision within 2-3 business days.
            </p>
          </div>
        </CardContent>
      </Card>
    </PortalLayout>
  );
}
