"use client";

import { useState } from "react";
import type { User } from "@supabase/supabase-js";
import { Phone, Mail01, Clock } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/base/avatar/avatar";
import { PortalLayout } from "../portal-layout";

interface SettingsContentProps {
  user: User | null;
}

interface ToggleSwitchProps {
  enabled: boolean;
  onToggle: () => void;
  label: string;
  description?: string;
}

function ToggleSwitch({ enabled, onToggle, label, description }: ToggleSwitchProps) {
  return (
    <div className="flex items-center justify-between py-3">
      <div>
        <p className="text-sm font-medium text-primary">{label}</p>
        {description && <p className="text-xs text-tertiary">{description}</p>}
      </div>
      <button
        type="button"
        onClick={onToggle}
        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 ${
          enabled ? "bg-brand-solid" : "bg-gray-200"
        }`}
      >
        <span
          className={`pointer-events-none inline-block size-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
            enabled ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}

export function SettingsContent({ user }: SettingsContentProps) {
  const [name, setName] = useState("Jordan Miller");
  const [phone, setPhone] = useState("(555) 123-4567");
  const [isSaving, setIsSaving] = useState(false);

  const [notifications, setNotifications] = useState({
    applicationUpdates: true,
    rateAlerts: true,
    documentRequests: true,
    smsNotifications: false,
  });

  const handleSaveProfile = async () => {
    setIsSaving(true);
    // Mock save - would call API
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSaving(false);
  };

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <PortalLayout user={user}>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-display-sm font-semibold text-primary">Settings</h1>
        <p className="text-md text-tertiary">Manage your account and preferences.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column: Profile & Notifications */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          {/* Profile Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Profile Information</CardTitle>
              <CardDescription>Update your personal details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  label="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                />
                <Input
                  label="Email"
                  value={user?.email || ""}
                  disabled
                  hint="Email cannot be changed"
                />
                <Input
                  label="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(555) 123-4567"
                  type="tel"
                />
              </div>
              <div className="mt-6 flex justify-end">
                <Button size="md" onPress={handleSaveProfile} isDisabled={isSaving}>
                  {isSaving ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Notification Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Notification Preferences</CardTitle>
              <CardDescription>Choose how you want to be notified</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="divide-y divide-secondary">
                <div className="pb-4">
                  <p className="mb-2 text-sm font-medium text-secondary">Email Notifications</p>
                  <ToggleSwitch
                    enabled={notifications.applicationUpdates}
                    onToggle={() => toggleNotification("applicationUpdates")}
                    label="Application Updates"
                    description="Status changes, approvals, and closing updates"
                  />
                  <ToggleSwitch
                    enabled={notifications.rateAlerts}
                    onToggle={() => toggleNotification("rateAlerts")}
                    label="Rate Alerts"
                    description="Notifications when rates change significantly"
                  />
                  <ToggleSwitch
                    enabled={notifications.documentRequests}
                    onToggle={() => toggleNotification("documentRequests")}
                    label="Document Requests"
                    description="When new documents are needed"
                  />
                </div>
                <div className="pt-4">
                  <p className="mb-2 text-sm font-medium text-secondary">SMS Notifications</p>
                  <ToggleSwitch
                    enabled={notifications.smsNotifications}
                    onToggle={() => toggleNotification("smsNotifications")}
                    label="Text Messages"
                    description="Receive important updates via SMS"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Security</CardTitle>
              <CardDescription>Manage your account security</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between rounded-lg border border-secondary p-4">
                <div>
                  <p className="text-sm font-medium text-primary">Password</p>
                  <p className="text-xs text-tertiary">Last changed 30 days ago</p>
                </div>
                <Button color="secondary" size="sm" href="/reset-password">
                  Change Password
                </Button>
              </div>
              <div className="mt-4 rounded-lg bg-secondary p-4">
                <p className="text-xs text-tertiary">
                  <strong>Last login:</strong> January 3, 2025 at 10:42 AM from Chrome on macOS
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Loan Officer */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Your Loan Officer</CardTitle>
              <CardDescription>Questions? Reach out anytime.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center text-center">
                <Avatar
                  src="https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80"
                  alt="Sarah Johnson"
                  size="2xl"
                />
                <h3 className="mt-4 text-lg font-semibold text-primary">Sarah Johnson</h3>
                <p className="text-sm text-tertiary">Senior Loan Officer</p>
                <p className="text-xs text-tertiary">NMLS #789456</p>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="tel:3107705539"
                  className="flex items-center gap-3 rounded-lg border border-secondary p-3 transition-colors hover:bg-secondary"
                >
                  <Phone className="size-5 text-tertiary" />
                  <div>
                    <p className="text-sm font-medium text-primary">(310) 770-5539</p>
                    <p className="text-xs text-tertiary">Direct line</p>
                  </div>
                </a>
                <a
                  href="mailto:sarah@purchaserates.com"
                  className="flex items-center gap-3 rounded-lg border border-secondary p-3 transition-colors hover:bg-secondary"
                >
                  <Mail01 className="size-5 text-tertiary" />
                  <div>
                    <p className="text-sm font-medium text-primary">sarah@purchaserates.com</p>
                    <p className="text-xs text-tertiary">Usually responds within 2 hours</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 rounded-lg bg-secondary p-3">
                  <Clock className="size-5 text-tertiary" />
                  <div>
                    <p className="text-sm font-medium text-primary">Office Hours</p>
                    <p className="text-xs text-tertiary">Mon-Fri: 8AM - 6PM PST</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="mt-6 w-full" iconLeading={Phone} href="tel:3107705539">
                Call Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </PortalLayout>
  );
}
