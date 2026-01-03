"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase-client";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { PurchaseRatesLogo } from "@/components/foundations/logo/purchaserates-logo";

function LoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setIsSubmitting(false);
      return;
    }

    const redirect = searchParams.get("redirect") || "/portal";
    router.push(redirect);
    router.refresh();
  };

  return (
    <div className="flex w-full flex-col gap-6 sm:max-w-90">
      <div className="flex flex-col gap-3">
        <Link href="/" className="lg:hidden">
          <PurchaseRatesLogo className="h-8" />
        </Link>

        <div className="flex flex-col gap-1 lg:gap-2">
          <h1 className="text-lg font-semibold text-primary sm:text-xl md:text-2xl lg:text-display-xs">
            Welcome back
          </h1>
          <p className="text-sm text-tertiary lg:text-md">
            Sign in to access your mortgage portal.
          </p>
        </div>
      </div>

      <Form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <Input
            isRequired
            label="Email"
            type="email"
            name="email"
            placeholder="you@example.com"
            autoComplete="email"
          />
          <Input
            isRequired
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            autoComplete="current-password"
          />
        </div>

        <div className="flex justify-end">
          <Link
            href="/forgot-password"
            className="text-sm font-medium text-brand-secondary hover:text-brand-secondary_hover"
          >
            Forgot password?
          </Link>
        </div>

        {error && (
          <div className="rounded-lg border border-error-subtle bg-error-primary p-3">
            <p className="text-sm text-error-primary">{error}</p>
          </div>
        )}

        <Button type="submit" size="lg" isDisabled={isSubmitting}>
          {isSubmitting ? "Signing in..." : "Sign in"}
        </Button>
      </Form>

      <p className="text-center text-sm text-tertiary">
        Don&apos;t have an account?{" "}
        <Link
          href="/signup"
          className="font-medium text-brand-secondary hover:text-brand-secondary_hover"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}

export default function LoginPage() {
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
          <Suspense fallback={<div className="flex w-full flex-col gap-6 sm:max-w-90 animate-pulse" />}>
            <LoginForm />
          </Suspense>
        </div>
      </div>

      {/* Right side - Branding */}
      <div className="hidden h-full bg-primary py-3 pr-3 lg:block">
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-brand-section p-8">
          <div className="flex max-w-md flex-col gap-4 text-center">
            <h2 className="text-2xl font-semibold text-white lg:text-display-xs">
              Your Mortgage Portal
            </h2>
            <p className="text-md text-brand-200">
              Track your application, view rate updates, and connect with your loan expert.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
