"use client";

import type { User } from "@supabase/supabase-js";
import {
  CheckCircle,
  Clock,
  Upload01,
  File06,
  Download01,
  Eye,
} from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PortalLayout } from "../portal-layout";

interface DocumentsContentProps {
  user: User | null;
}

const requiredDocuments = [
  { name: "Pay Stubs (last 2)", status: "uploaded", date: "Dec 15, 2024" },
  { name: "W-2s (last 2 years)", status: "uploaded", date: "Dec 10, 2024" },
  { name: "Bank Statements (last 2 months)", status: "pending", date: null },
  { name: "Tax Returns (last 2 years)", status: "pending", date: null },
  { name: "ID / Driver's License", status: "uploaded", date: "Dec 8, 2024" },
];

const uploadedDocuments = [
  { name: "paystub_dec_2024.pdf", type: "Pay Stub", date: "Dec 15, 2024", status: "approved" },
  { name: "paystub_nov_2024.pdf", type: "Pay Stub", date: "Dec 15, 2024", status: "approved" },
  { name: "w2_2023.pdf", type: "W-2", date: "Dec 10, 2024", status: "approved" },
  { name: "w2_2022.pdf", type: "W-2", date: "Dec 10, 2024", status: "approved" },
  { name: "drivers_license.pdf", type: "ID", date: "Dec 8, 2024", status: "approved" },
  { name: "bank_statement_nov.pdf", type: "Bank Statement", date: "Dec 20, 2024", status: "review" },
];

const statusStyles = {
  approved: "bg-success-100 text-success-700",
  review: "bg-warning-100 text-warning-700",
  pending: "bg-gray-100 text-gray-600",
};

const statusLabels = {
  approved: "Approved",
  review: "Under Review",
  pending: "Pending",
};

export function DocumentsContent({ user }: DocumentsContentProps) {
  return (
    <PortalLayout user={user}>
      {/* Page Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-display-sm font-semibold text-primary">Documents</h1>
          <p className="text-md text-tertiary">Upload and manage your mortgage documents.</p>
        </div>
        <Button size="lg" iconLeading={Upload01}>
          Upload Document
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Required Documents */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Required Documents</CardTitle>
            <CardDescription>Documents needed for your application</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-3">
              {requiredDocuments.map((doc) => (
                <li key={doc.name} className="flex items-start gap-3">
                  {doc.status === "uploaded" ? (
                    <CheckCircle className="mt-0.5 size-5 shrink-0 text-success-500" />
                  ) : (
                    <Clock className="mt-0.5 size-5 shrink-0 text-tertiary" />
                  )}
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${doc.status === "uploaded" ? "text-primary" : "text-tertiary"}`}>
                      {doc.name}
                    </p>
                    {doc.date && (
                      <p className="text-xs text-tertiary">Uploaded {doc.date}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded-lg bg-warning-50 p-3">
              <p className="text-sm text-warning-700">
                <strong>2 documents remaining.</strong> Please upload your bank statements and tax returns.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Uploaded Documents Table */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Uploaded Documents</CardTitle>
            <CardDescription>All documents you&apos;ve submitted</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-secondary">
                    <th className="pb-3 text-left text-xs font-medium uppercase text-tertiary">Document</th>
                    <th className="pb-3 text-left text-xs font-medium uppercase text-tertiary">Type</th>
                    <th className="pb-3 text-left text-xs font-medium uppercase text-tertiary">Date</th>
                    <th className="pb-3 text-left text-xs font-medium uppercase text-tertiary">Status</th>
                    <th className="pb-3 text-right text-xs font-medium uppercase text-tertiary">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {uploadedDocuments.map((doc, index) => (
                    <tr key={index} className="border-b border-secondary last:border-0">
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <File06 className="size-5 text-tertiary" />
                          <span className="text-sm font-medium text-primary">{doc.name}</span>
                        </div>
                      </td>
                      <td className="py-4">
                        <span className="text-sm text-secondary">{doc.type}</span>
                      </td>
                      <td className="py-4">
                        <span className="text-sm text-secondary">{doc.date}</span>
                      </td>
                      <td className="py-4">
                        <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[doc.status as keyof typeof statusStyles]}`}>
                          {statusLabels[doc.status as keyof typeof statusLabels]}
                        </span>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button className="rounded-lg p-1.5 text-tertiary hover:bg-secondary hover:text-primary transition-colors">
                            <Eye className="size-4" />
                          </button>
                          <button className="rounded-lg p-1.5 text-tertiary hover:bg-secondary hover:text-primary transition-colors">
                            <Download01 className="size-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upload Tips */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-lg">Document Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="flex gap-3">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-primary text-brand-secondary">
                <span className="text-sm font-medium">1</span>
              </div>
              <div>
                <p className="text-sm font-medium text-primary">Clear & Legible</p>
                <p className="text-xs text-tertiary">Ensure all text is readable and documents aren&apos;t blurry.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-primary text-brand-secondary">
                <span className="text-sm font-medium">2</span>
              </div>
              <div>
                <p className="text-sm font-medium text-primary">Complete Pages</p>
                <p className="text-xs text-tertiary">Include all pages of multi-page documents.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-primary text-brand-secondary">
                <span className="text-sm font-medium">3</span>
              </div>
              <div>
                <p className="text-sm font-medium text-primary">PDF Format</p>
                <p className="text-xs text-tertiary">PDF files are preferred for best quality.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </PortalLayout>
  );
}
