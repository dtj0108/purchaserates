"use client";

import { useState } from "react";
import { Mail01, Phone } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { PurchaseRatesLogo } from "@/components/foundations/logo/purchaserates-logo";
import { RatingBadge } from "@/components/foundations/rating-badge";
import { Avatar } from "@/components/base/avatar/avatar";

export default function GetStartedPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        
        const name = formData.get("name")?.toString() || "";
        const email = formData.get("email")?.toString() || "";
        const phone = formData.get("phone")?.toString() || "";
        const homePrice = formData.get("homePrice")?.toString() || "";
        const downPayment = formData.get("downPayment")?.toString() || "";
        const zipCode = formData.get("zipCode")?.toString() || "";
        const creditRange = formData.get("creditRange")?.toString() || "";
        
        // Format phone number (remove non-digits, format as XXX-XXX-XXXX)
        const phoneDigits = phone.replace(/\D/g, "");
        const formattedPhone = phoneDigits.length === 10 
            ? `${phoneDigits.slice(0, 3)}-${phoneDigits.slice(3, 6)}-${phoneDigits.slice(6)}`
            : phone;
        
        // Format home price - ensure it has $ and handle commas
        let formattedHomePrice = homePrice.replace(/[^0-9]/g, ""); // Remove all non-digits
        if (formattedHomePrice) {
            formattedHomePrice = `$${parseInt(formattedHomePrice).toLocaleString()}`; // Add $ and commas
        } else {
            formattedHomePrice = homePrice; // Keep original if can't parse
        }
        
        // Format down payment - ensure it has %
        let formattedDownPayment = downPayment.replace(/[^0-9.]/g, ""); // Keep only digits and decimal
        if (formattedDownPayment) {
            formattedDownPayment = `${formattedDownPayment}%`;
        } else {
            formattedDownPayment = downPayment; // Keep original if can't parse
        }
        
        // Create formatted text message
        const message = `NEW LEAD from PurchaseRates.com

Name: ${name.toUpperCase()}
Email: ${email}
Phone: ${formattedPhone}
Home Price: ${formattedHomePrice}
Down Payment: ${formattedDownPayment}
Zip code: ${zipCode}
Credit Range: ${creditRange}`;

        console.log("Sending message:", message);

        try {
            const response = await fetch("https://hook.us2.make.com/mzzwifwnsqohvgz2vbchmgt8sah5felu", {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain",
                },
                body: message,
                mode: 'no-cors',
            });

            console.log("Response status:", response.status);
            console.log("Response:", response);

            // With no-cors mode, we can't read the response, so just assume success
            // Redirect to thank you page
            window.location.href = "/thank-you";
        } catch (err) {
            console.error("Error submitting form:", err);
            setError("Something went wrong. Please try again or call us at 310-770-5539");
            setIsSubmitting(false);
        }
    };

    return (
        <section className="grid min-h-screen grid-cols-1 bg-primary lg:grid-cols-2">
            {/* Left side - Form */}
            <div className="flex flex-col bg-primary">
                <header className="hidden p-4 md:block lg:p-6">
                    <a href="/">
                        <PurchaseRatesLogo className="h-8" />
                    </a>
                </header>
                <div className="flex flex-1 justify-center px-4 py-6 md:items-center md:px-6 lg:px-8">
                    <div className="flex w-full flex-col gap-4 sm:max-w-90 lg:gap-5">
                        <div className="flex flex-col gap-3 lg:gap-4">
                            <a href="/" className="lg:hidden">
                                <PurchaseRatesLogo className="h-8" />
                            </a>

                            <div className="flex flex-col gap-1 lg:gap-2">
                                <h1 className="text-lg font-semibold text-primary sm:text-xl md:text-2xl lg:text-display-xs">
                                    Get Your Personalized Rate
                                </h1>
                                <p className="text-xs text-tertiary sm:text-sm lg:text-md">
                                    Connect with a licensed loan expert. No obligation. Same-day pre-approval.
                                </p>
                            </div>
                        </div>

                        <Form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:gap-5">
                            <div className="flex flex-col gap-3 lg:gap-4">
                                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:gap-4">
                                    <Input
                                        isRequired
                                        hideRequiredIndicator
                                        label="Full Name"
                                        name="name"
                                        placeholder="Enter your full name"
                                        size="sm"
                                    />
                                    <Input
                                        isRequired
                                        hideRequiredIndicator
                                        label="Phone Number"
                                        type="tel"
                                        name="phone"
                                        placeholder="(555) 123-4567"
                                        size="sm"
                                    />
                                </div>
                                <Input
                                    isRequired
                                    hideRequiredIndicator
                                    label="Email"
                                    type="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    size="sm"
                                />

                                <div className="border-t border-secondary pt-3 lg:pt-4">
                                    <h3 className="mb-3 text-xs font-semibold text-primary lg:text-sm">Estimated Purchase Details</h3>
                                    <div className="flex flex-col gap-3 lg:gap-4">
                                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:gap-4">
                                            <Input
                                                isRequired
                                                hideRequiredIndicator
                                                label="Home Price"
                                                type="text"
                                                name="homePrice"
                                                placeholder="$400,000"
                                                size="sm"
                                            />
                                            <Input
                                                isRequired
                                                hideRequiredIndicator
                                                label="Down Payment"
                                                type="text"
                                                name="downPayment"
                                                placeholder="10%"
                                                size="sm"
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:gap-4">
                                            <Input
                                                isRequired
                                                hideRequiredIndicator
                                                label="ZIP Code"
                                                type="text"
                                                name="zipCode"
                                                placeholder="90210"
                                                size="sm"
                                                maxLength={5}
                                                pattern="[0-9]{5}"
                                            />
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-xs font-medium text-secondary lg:text-sm">
                                                    Credit Range <span className="text-error-primary">*</span>
                                                </label>
                                                <select
                                                    name="creditRange"
                                                    required
                                                    className="rounded-lg border border-secondary bg-primary px-3 py-2 text-sm text-primary shadow-xs focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand"
                                                >
                                                    <option value="">Select credit range</option>
                                                    <option value="Excellent (720+)">Excellent (720+)</option>
                                                    <option value="Good (680-719)">Good (680-719)</option>
                                                    <option value="Fair (640-679)">Fair (640-679)</option>
                                                    <option value="Poor (<640)">Poor (&lt;640)</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {error && (
                                <div className="rounded-lg bg-error-primary border border-error-subtle p-3">
                                    <p className="text-xs text-error-primary lg:text-sm">{error}</p>
                                </div>
                            )}

                            <div className="flex flex-col gap-3">
                                <Button type="submit" size="md" isDisabled={isSubmitting}>
                                    {isSubmitting ? "Submitting..." : "Get My Rate"}
                                </Button>
                                <p className="text-center text-xs text-tertiary">
                                    By submitting, you agree to our Terms & Privacy Policy.
                                </p>
                            </div>
                        </Form>

                        <div className="flex items-center justify-center gap-3 text-xs lg:gap-4">
                            <div className="flex items-center gap-1.5">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="size-3 text-warning-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="font-semibold text-primary">4.9/5</span>
                            </div>
                            <div className="h-4 w-px bg-secondary" />
                            <div className="flex items-center gap-1.5">
                                <Phone className="size-3 text-tertiary" />
                                <a href="tel:3107705539" className="font-medium text-brand-secondary hover:text-brand-secondary_hover">
                                    310-770-5539
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="hidden justify-between p-4 lg:flex lg:p-6">
                    <p className="text-xs text-tertiary">© 2024 PurchaseRates.com</p>
                    <a href="mailto:help@purchaserates.com" className="flex items-center gap-1.5 text-xs text-tertiary hover:text-secondary">
                        <Mail01 className="size-3 text-fg-quaternary" />
                        help@purchaserates.com
                    </a>
                </footer>
            </div>

            {/* Right side - Testimonial/Branding */}
            <div className="hidden h-full bg-primary py-3 pr-3 lg:block">
                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-brand-section lg:flex lg:flex-col lg:justify-between">
                    <div className="flex w-full flex-1 flex-col items-center justify-center gap-6 p-8">
                        <div className="flex max-w-xl flex-col gap-6 text-center">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-2xl font-semibold text-white lg:text-display-xs">
                                    Join 4,000+ Happy Homebuyers
                                </h2>
                                <p className="text-sm font-medium text-brand-200 lg:text-md">
                                    Our licensed loan experts help you find the best rates and close faster.
                                </p>
                            </div>

                            <div className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-5">
                                <div className="flex flex-col gap-4">
                                    <div className="flex justify-center gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="size-4 text-warning-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <blockquote className="text-sm font-medium text-white">
                                        "Locked in an amazing rate and closed in just 3 weeks. My loan officer was incredibly helpful every step of the way."
                                    </blockquote>
                                    <div className="flex items-center justify-center gap-2.5">
                                        <Avatar
                                            src="https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80"
                                            alt="Jordan Miller"
                                            size="sm"
                                        />
                                        <div className="text-left">
                                            <p className="text-sm font-semibold text-white">Jordan Miller</p>
                                            <p className="text-xs text-brand-200">First-Time Homebuyer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 text-white">
                                <div className="flex flex-col gap-1">
                                    <p className="text-2xl font-bold lg:text-display-xs">4.9/5</p>
                                    <p className="text-xs text-brand-200">Avg. Rating</p>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-2xl font-bold lg:text-display-xs">4,000+</p>
                                    <p className="text-xs text-brand-200">Happy Clients</p>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-2xl font-bold lg:text-display-xs">3 Weeks</p>
                                    <p className="text-xs text-brand-200">Avg. Close</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Footer on green section */}
                    <div className="flex items-center justify-between border-t border-white/10 px-8 py-4">
                        <p className="text-xs text-white/70">© 2024 PurchaseRates.com</p>
                        <a href="mailto:help@purchaserates.com" className="flex items-center gap-1.5 text-xs text-white/70 hover:text-white">
                            <Mail01 className="size-3" />
                            help@purchaserates.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

