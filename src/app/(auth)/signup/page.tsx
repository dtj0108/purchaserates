"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "@untitledui/icons";
import { createClient } from "@/lib/supabase-client";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { PurchaseRatesLogo } from "@/components/foundations/logo/purchaserates-logo";

export default function SignupPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsSubmitting(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setIsSubmitting(false);
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
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
      <section className="flex min-h-screen items-center justify-center bg-primary px-4 py-12">
        <div className="flex w-full max-w-md flex-col items-center gap-8">
          <Link href="/">
            <PurchaseRatesLogo className="h-10" />
          </Link>
          <div className="flex w-full flex-col gap-4 text-center">
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-semibold text-primary md:text-2xl lg:text-display-xs">
                Check your email
              </h1>
              <p className="text-sm text-tertiary lg:text-md">
                We&apos;ve sent you a confirmation link. Please check your email to verify your account.
              </p>
            </div>
            <Button href="/login" color="secondary" size="lg">
              Back to login
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="flex min-h-screen items-center justify-center bg-primary px-4 py-12">
      <div className="flex w-full max-w-md flex-col items-center gap-8">
        <Link href="/">
          <PurchaseRatesLogo className="h-10" />
        </Link>

        <div className="flex w-full flex-col gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-xl font-semibold text-primary md:text-2xl lg:text-display-xs">
              Create an account
            </h1>
            <p className="text-sm text-tertiary lg:text-md">
              Sign up to access your mortgage portal.
            </p>
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
              <div className="relative">
                <Input
                  isRequired
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a password"
                  autoComplete="new-password"
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-[38px] text-tertiary hover:text-secondary transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                </button>
              </div>
              <div className="relative">
                <Input
                  isRequired
                  label="Confirm Password"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  autoComplete="new-password"
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-[38px] text-tertiary hover:text-secondary transition-colors"
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                >
                  {showConfirmPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="rounded-lg border border-error-subtle bg-error-primary p-3">
                <p className="text-sm text-error-primary">{error}</p>
              </div>
            )}

            <Button type="submit" size="lg" isDisabled={isSubmitting}>
              {isSubmitting ? "Creating account..." : "Create account"}
            </Button>
          </Form>

          <p className="text-center text-sm text-tertiary">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-brand-secondary hover:text-brand-secondary_hover"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
