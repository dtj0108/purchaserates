"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase-client";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { PurchaseRatesLogo } from "@/components/foundations/logo/purchaserates-logo";

export default function ForgotPasswordPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      setError(error.message);
      setIsSubmitting(false);
      return;
    }

    setSuccess(true);
    setIsSubmitting(false);
  };

  if (success) {
    return (
      <section className="grid min-h-screen grid-cols-1 bg-gradient-sky lg:grid-cols-2">
        <div className="flex flex-col bg-primary">
          <header className="hidden p-4 md:block lg:p-6">
            <Link href="/">
              <PurchaseRatesLogo className="h-8" />
            </Link>
          </header>
          <div className="flex flex-1 justify-center px-4 py-6 md:items-center md:px-6 lg:px-8">
            <div className="flex w-full flex-col gap-6 sm:max-w-90">
              <Link href="/" className="lg:hidden">
                <PurchaseRatesLogo className="h-8" />
              </Link>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-semibold text-primary sm:text-xl md:text-2xl lg:text-display-xs">
                    Check your email
                  </h1>
                  <p className="text-sm text-tertiary lg:text-md">
                    We&apos;ve sent you a password reset link. Please check your email.
                  </p>
                </div>
                <Button href="/login" color="secondary" size="lg">
                  Back to login
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden h-full bg-primary py-3 pr-3 lg:block">
          <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-brand-section p-8">
            <div className="flex max-w-md flex-col gap-4 text-center">
              <h2 className="text-2xl font-semibold text-white lg:text-display-xs">
                Reset Your Password
              </h2>
              <p className="text-md text-brand-200">
                Follow the link in your email to create a new password.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="grid min-h-screen grid-cols-1 bg-gradient-sky lg:grid-cols-2">
      {/* Left side - Form */}
      <div className="flex flex-col bg-primary">
        <header className="hidden p-4 md:block lg:p-6">
          <Link href="/">
            <PurchaseRatesLogo className="h-8" />
          </Link>
        </header>
        <div className="flex flex-1 justify-center px-4 py-6 md:items-center md:px-6 lg:px-8">
          <div className="flex w-full flex-col gap-6 sm:max-w-90">
            <div className="flex flex-col gap-3">
              <Link href="/" className="lg:hidden">
                <PurchaseRatesLogo className="h-8" />
              </Link>

              <div className="flex flex-col gap-1 lg:gap-2">
                <h1 className="text-lg font-semibold text-primary sm:text-xl md:text-2xl lg:text-display-xs">
                  Forgot password?
                </h1>
                <p className="text-sm text-tertiary lg:text-md">
                  Enter your email and we&apos;ll send you a reset link.
                </p>
              </div>
            </div>

            <Form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <Input
                isRequired
                label="Email"
                type="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
              />

              {error && (
                <div className="rounded-lg border border-error-subtle bg-error-primary p-3">
                  <p className="text-sm text-error-primary">{error}</p>
                </div>
              )}

              <Button type="submit" size="lg" isDisabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send reset link"}
              </Button>
            </Form>

            <p className="text-center text-sm text-tertiary">
              Remember your password?{" "}
              <Link
                href="/login"
                className="font-medium text-brand-secondary hover:text-brand-secondary_hover"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Branding */}
      <div className="hidden h-full bg-primary py-3 pr-3 lg:block">
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-brand-section p-8">
          <div className="flex max-w-md flex-col gap-4 text-center">
            <h2 className="text-2xl font-semibold text-white lg:text-display-xs">
              Reset Your Password
            </h2>
            <p className="text-md text-brand-200">
              We&apos;ll help you get back into your account.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
