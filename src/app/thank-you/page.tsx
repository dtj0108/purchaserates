"use client";

import { CheckCircle, Phone, Mail01, Home04 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { PurchaseRatesLogo } from "@/components/foundations/logo/purchaserates-logo";

export default function ThankYouPage() {
    return (
        <div className="min-h-screen bg-gradient-sky">
            {/* Header */}
            <header className="border-b border-secondary bg-primary">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="flex h-16 items-center justify-between md:h-20">
                        <a href="/">
                            <PurchaseRatesLogo className="h-8 md:h-10" />
                        </a>
                        <div className="flex items-center gap-3">
                            <Button color="secondary" size="md" iconLeading={Phone} href="tel:3107705539">
                                310-770-5539
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="py-8 md:py-12">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto max-w-2xl">
                        <div className="rounded-2xl bg-primary p-6 shadow-lg md:p-8">
                            {/* Success Icon */}
                            <div className="mb-6 flex justify-center">
                                <div className="flex size-12 items-center justify-center rounded-full bg-success-primary md:size-14">
                                    <CheckCircle className="size-6 text-success-600 md:size-7" />
                                </div>
                            </div>

                            {/* Main Message */}
                            <div className="text-center">
                                <h1 className="text-2xl font-semibold text-primary md:text-display-xs">
                                    Thank You! We've Got Your Information
                                </h1>
                                <p className="mt-3 text-md text-tertiary md:text-lg">
                                    A licensed loan expert will contact you within 1 business hour to discuss your personalized rate options.
                                </p>
                            </div>

                            {/* What Happens Next */}
                            <div className="mt-6 rounded-xl bg-secondary p-4 md:p-5">
                                <h2 className="mb-4 text-lg font-semibold text-primary md:text-xl">What Happens Next?</h2>
                                <div className="space-y-3">
                                    <div className="flex gap-3">
                                        <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-primary text-brand-600 font-semibold text-sm">
                                            1
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-semibold text-primary">Expert Review</h3>
                                            <p className="mt-0.5 text-xs text-tertiary">
                                                Our team reviews your information and prepares personalized rate options.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-primary text-brand-600 font-semibold text-sm">
                                            2
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-semibold text-primary">Personalized Call</h3>
                                            <p className="mt-0.5 text-xs text-tertiary">
                                                We'll call you to discuss your best options—no pressure, just clear answers.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-primary text-brand-600 font-semibold text-sm">
                                            3
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-semibold text-primary">Pre-Approval (Optional)</h3>
                                            <p className="mt-0.5 text-xs text-tertiary">
                                                If you're ready, we can start your pre-approval process the same day.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Options */}
                            <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
                                <div className="flex items-center gap-2.5 rounded-lg border border-secondary bg-secondary_subtle p-3">
                                    <Phone className="size-4 text-brand-600" />
                                    <div>
                                        <p className="text-xs font-medium text-secondary">Call us now</p>
                                        <a href="tel:3107705539" className="text-sm font-semibold text-brand-secondary hover:text-brand-secondary_hover">
                                            310-770-5539
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2.5 rounded-lg border border-secondary bg-secondary_subtle p-3">
                                    <Mail01 className="size-4 text-brand-600" />
                                    <div>
                                        <p className="text-xs font-medium text-secondary">Email us</p>
                                        <a
                                            href="mailto:help@purchaserates.com"
                                            className="text-sm font-semibold text-brand-secondary hover:text-brand-secondary_hover"
                                        >
                                            help@purchaserates.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="mt-5 flex justify-center">
                                <Button size="md" href="/" iconLeading={Home04}>
                                    Back to Home
                                </Button>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="mt-4 text-center">
                            <p className="text-xs text-tertiary">
                                Check your email for a confirmation message. We respect your privacy and will never sell your information.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-secondary bg-primary py-4">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
                        <p className="text-xs text-tertiary">© 2024 PurchaseRates.com. All rights reserved.</p>
                        <p className="text-xs text-tertiary">NMLS #123456 | Equal Housing Lender</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

