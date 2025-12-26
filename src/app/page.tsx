"use client";

import { useState } from "react";
import { CheckCircle, Home04, Percent01, Phone, TrendUp02, Users01 } from "@untitledui/icons";
import { Avatar } from "@/components/base/avatar/avatar";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { RatingBadge } from "@/components/foundations/rating-badge";
import { Header } from "@/components/marketing/header-navigation/header";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { BadgeWithDot } from "@/components/base/badges/badge-with-dot";
import { HouseIllustration } from "@/components/illustrations/HouseIllustration";
import { cx } from "@/utils/cx";

const lenders = [
    { name: "Wells Fargo", imageUrl: "https://www.untitledui.com/logos/logotype/color/odeaolabs.svg" },
    { name: "Bank of America", imageUrl: "https://www.untitledui.com/logos/logotype/color/kintsugi.svg" },
    { name: "Chase", imageUrl: "https://www.untitledui.com/logos/logotype/color/stackedlab.svg" },
    { name: "Quicken Loans", imageUrl: "https://www.untitledui.com/logos/logotype/color/magnolia.svg" },
    { name: "Caliber Home Loans", imageUrl: "https://www.untitledui.com/logos/logotype/color/powersurge.svg" },
    { name: "Guaranteed Rate", imageUrl: "https://www.untitledui.com/logos/logotype/color/warpspeed.svg" },
];

const HeroScreenMockup01 = () => {
    return (
        <div className="relative overflow-hidden bg-secondary_alt">
            <Header />

            <section className="relative overflow-hidden py-12 sm:py-16 md:py-20">
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
                        {/* Left Column - Content & Form */}
                        <div className="order-2 flex flex-col lg:order-1">
                            <h1 className="text-3xl font-semibold text-primary sm:text-display-sm md:text-display-md">
                                Get the Best Purchase Mortgage Rate—Fast
                            </h1>
                            <p className="mt-4 text-base text-tertiary sm:text-lg md:mt-5 md:text-xl">
                                Compare real purchase options and get matched with a loan expert in minutes. No spam. No pressure.
                            </p>

                            {/* Trust indicators */}
                            <ul className="mt-6 flex flex-col gap-3">
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="size-5 text-fg-success-primary shrink-0" />
                                    <span className="text-md text-secondary">Licensed loan experts</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="size-5 text-fg-success-primary shrink-0" />
                                    <span className="text-md text-secondary">Secure form</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="size-5 text-fg-success-primary shrink-0" />
                                    <span className="text-md text-secondary">Same-day pre-approval available</span>
                                </li>
                            </ul>

                            {/* Calculator Form */}
                            <div className="mt-8 rounded-xl bg-primary p-6 shadow-lg ring-1 ring-secondary">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                    <div>
                                        <label className="block text-xs font-medium text-tertiary mb-1.5">Home Price</label>
                                        <input
                                            type="text"
                                            defaultValue="$400,000"
                                            className="w-full rounded-lg border border-secondary bg-primary px-3 py-2.5 text-md font-semibold text-primary focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-tertiary mb-1.5">Down Payment</label>
                                        <input
                                            type="text"
                                            defaultValue="10%"
                                            className="w-full rounded-lg border border-secondary bg-primary px-3 py-2.5 text-md font-semibold text-primary focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-tertiary mb-1.5">ZIP Code</label>
                                        <input
                                            type="text"
                                            defaultValue="90210"
                                            className="w-full rounded-lg border border-secondary bg-primary px-3 py-2.5 text-md font-semibold text-primary focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label className="block text-xs font-medium text-tertiary mb-1.5">Credit Range</label>
                                    <div className="flex gap-2">
                                        {["Excellent", "Good", "Fair"].map((credit) => (
                                            <button
                                                key={credit}
                                                className={cx(
                                                    "flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                                                    credit === "Excellent"
                                                        ? "bg-brand-solid text-white"
                                                        : "bg-secondary text-secondary hover:bg-tertiary"
                                                )}
                                            >
                                                {credit}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <Button size="lg" className="w-full mt-4" href="/get-started">
                                    Get My Rate
                                </Button>
                            </div>

                            <a href="/rates" className="mt-3 text-sm text-brand-secondary hover:text-brand-secondary_hover font-medium transition-colors">
                                See Today's Rates →
                            </a>
                        </div>

                        {/* Right Column - Illustration */}
                        <div className="order-1 relative flex flex-col items-center justify-center lg:order-2 lg:items-end">
                            <HouseIllustration />

                            {/* Rating and testimonial */}
                            <div className="mt-6 flex flex-col items-center gap-3 rounded-lg bg-primary/80 px-4 py-3 backdrop-blur-sm lg:items-start">
                                <RatingBadge />
                                <p className="text-sm text-tertiary italic text-center lg:text-left">
                                    "Locked a great rate and closed on time." — Jordan M.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const SocialProofLenders = () => {
    return (
        <section className="overflow-hidden bg-primary_alt py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-8">
                    <p className="text-center text-md font-medium text-tertiary">Trusted by 4,000+ homebuyers</p>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                        {lenders.slice(0, 6).map((lender) => (
                            <img key={lender.name} alt={lender.name} src={lender.imageUrl} className="h-8 opacity-70 md:h-10" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const HowItWorksSection = () => {
    const steps = [
        {
            number: 1,
            icon: Users01,
            title: "Tell us your scenario",
            description: "Purchase price, down payment, timeline.",
        },
        {
            number: 2,
            icon: Percent01,
            title: "See your best options",
            description: "Conventional, FHA, VA, Jumbo—explained clearly.",
        },
        {
            number: 3,
            icon: CheckCircle,
            title: "Get pre-approved",
            description: "Upload docs securely. Fast turnaround.",
        },
    ];

    return (
        <section id="how-it-works" className="bg-primary py-12 sm:py-16 md:py-20">
            <div className="mx-auto max-w-container px-4 md:px-8">
                {/* Two-column layout: steps on left, press logos on right */}
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr] lg:items-center lg:gap-16">
                    {/* Left: How it works */}
                    <div>
                        <h2 className="text-2xl font-semibold text-primary mb-8 sm:text-display-sm">
                            How It Works
                        </h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                            {steps.map((step) => (
                                <div key={step.number} className="flex flex-col items-center text-center sm:items-start sm:text-left">
                                    <FeaturedIcon icon={step.icon} size="md" color="brand" theme="light" />
                                    <h3 className="mt-4 text-lg font-semibold text-primary">{step.title}</h3>
                                    <p className="mt-1 text-sm text-tertiary">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Press/Trust logos */}
                    <div className="flex flex-col items-center gap-4 rounded-xl bg-secondary p-6">
                        <p className="text-sm font-medium text-tertiary">As seen in</p>
                        <div className="flex flex-wrap items-center justify-center gap-6">
                            {/* Placeholder press logos */}
                            <div className="flex h-6 items-center px-3 text-sm font-semibold text-quaternary">Forbes</div>
                            <div className="flex h-6 items-center px-3 text-sm font-semibold text-quaternary">Zillow</div>
                            <div className="flex h-6 items-center px-3 text-sm font-semibold text-quaternary">BBB</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TodaysRatesSection = () => {
    const rates = [
        { type: "30-Year Fixed", rate: "5.99%" },
        { type: "15-Year Fixed", rate: "5.49%" },
        { type: "FHA", rate: "5.17%" },
        { type: "VA", rate: "5.17%" },
        { type: "Jumbo", rate: "5.25%" },
    ];

    return (
        <section className="bg-secondary py-8 sm:py-12">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="rounded-xl border border-secondary bg-primary p-4 sm:p-6">
                    <div className="mb-4 text-center">
                        <h2 className="text-lg font-semibold text-primary sm:text-xl">
                            Today's Purchase Rates <span className="text-tertiary text-sm">(Examples)</span>
                        </h2>
                        <p className="mt-1 text-xs text-tertiary sm:text-sm">
                            Rates vary by credit, LTV, property type, and location.
                        </p>
                    </div>

                    {/* Compact horizontal rate list */}
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 sm:gap-x-8">
                        {rates.map((rate) => (
                            <div key={rate.type} className="flex items-center gap-2">
                                <CheckCircle className="size-4 text-fg-brand-primary shrink-0" />
                                <span className="text-sm font-medium text-primary">{rate.type}</span>
                                <span className="text-sm text-tertiary">—</span>
                                <span className="text-sm font-bold text-brand-tertiary">from {rate.rate}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 flex justify-center">
                        <Button size="md" color="secondary" href="/rates">
                            View All Rates
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const LoanProgramsSection = () => {
    const programs = [
        {
            icon: Home04,
            title: "Conventional",
            subtitle: "Best for closing fastest timeline.",
        },
        {
            icon: CheckCircle,
            title: "FHA",
            subtitle: "Flexible credit, low down.",
        },
        {
            icon: Users01,
            title: "VA",
            subtitle: "Eligible veterans, 0% down.",
        },
        {
            icon: TrendUp02,
            title: "Jumbo",
            subtitle: "High-$ loan amounts.",
        },
        {
            icon: Home04,
            title: "First Time Buyer",
            subtitle: "3%-5% down options.",
        },
    ];

    return (
        <section className="bg-primary py-12 sm:py-16 md:py-20">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center mb-10">
                    <BadgeWithDot color="brand" type="modern" size="md">
                        Loan Programs
                    </BadgeWithDot>
                    <h2 className="mt-4 text-xl font-semibold text-primary sm:text-2xl md:text-display-sm">
                        Find Your Best Purchase Program
                    </h2>
                </div>

                {/* Horizontal program cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {programs.map((program) => (
                        <div
                            key={program.title}
                            className="flex flex-col items-center gap-3 rounded-xl border border-secondary bg-primary p-6 text-center transition-colors hover:border-brand"
                        >
                            <FeaturedIcon icon={program.icon} size="md" color="brand" theme="light" />
                            <h3 className="text-md font-semibold text-primary">{program.title}</h3>
                            <p className="text-sm text-tertiary">{program.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CheckItemText = (props: {
    size?: "sm" | "md" | "lg" | "xl";
    text?: string;
    color?: "primary" | "success";
    iconStyle?: "outlined" | "contained" | "filled";
    textClassName?: string;
    iconClassName?: string;
}) => {
    const { text, color = "primary", size = "md", iconStyle = "contained", textClassName, iconClassName } = props;

    return (
        <li className="flex gap-3">
            {iconStyle === "outlined" && (
                <CheckCircle
                    className={cx(
                        "shrink-0",
                        color === "success" ? "text-fg-success-primary" : "text-fg-brand-primary",
                        size === "lg" ? "size-7 md:h-8 md:w-8" : size === "md" ? "size-7" : "size-6",
                        iconClassName
                    )}
                />
            )}
            <span className={cx(
                textClassName || "text-tertiary", 
                size === "md" ? "pt-0.5 text-md md:pt-0 md:text-lg" : "text-md"
            )}>
                {text}
            </span>
        </li>
    );
};

const PreApprovalCTA = () => {
    return (
        <section className="relative bg-brand-section py-16 md:py-24 overflow-hidden">
            {/* Background cityscape illustration */}
            <div className="absolute inset-0 pointer-events-none">
                <svg
                    className="absolute bottom-0 left-0 w-full h-48 opacity-10"
                    viewBox="0 0 1200 200"
                    preserveAspectRatio="xMidYMax slice"
                    fill="currentColor"
                >
                    {/* Houses and buildings silhouette */}
                    <rect x="50" y="100" width="60" height="100" className="fill-white" />
                    <polygon points="50,100 80,60 110,100" className="fill-white" />
                    <rect x="130" y="80" width="40" height="120" className="fill-white" />
                    <rect x="190" y="120" width="50" height="80" className="fill-white" />
                    <polygon points="190,120 215,80 240,120" className="fill-white" />
                    <rect x="260" y="60" width="30" height="140" className="fill-white" />
                    <rect x="310" y="90" width="70" height="110" className="fill-white" />
                    <polygon points="310,90 345,50 380,90" className="fill-white" />
                    <rect x="400" y="110" width="45" height="90" className="fill-white" />
                    <rect x="470" y="70" width="35" height="130" className="fill-white" />
                    <rect x="530" y="100" width="55" height="100" className="fill-white" />
                    <polygon points="530,100 557,65 585,100" className="fill-white" />
                    <rect x="610" y="85" width="40" height="115" className="fill-white" />
                    <rect x="670" y="120" width="60" height="80" className="fill-white" />
                    <polygon points="670,120 700,75 730,120" className="fill-white" />
                    <rect x="750" y="95" width="50" height="105" className="fill-white" />
                    <rect x="820" y="110" width="35" height="90" className="fill-white" />
                    <rect x="880" y="80" width="45" height="120" className="fill-white" />
                    <polygon points="880,80 902,45 925,80" className="fill-white" />
                    <rect x="950" y="100" width="60" height="100" className="fill-white" />
                    <rect x="1030" y="90" width="40" height="110" className="fill-white" />
                    <polygon points="1030,90 1050,55 1070,90" className="fill-white" />
                    <rect x="1100" y="110" width="50" height="90" className="fill-white" />
                </svg>
            </div>

            <div className="relative mx-auto max-w-container px-4 md:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col justify-center text-white">
                        <h2 className="text-display-sm font-semibold md:text-display-md">Ready to make an offer stronger?</h2>
                        <p className="mt-4 text-lg opacity-90">
                            A verified pre-approval helps you stand out and move fast at closing.
                        </p>
                        <ul className="mt-8 flex flex-col gap-4">
                            {[
                                "Same day review available",
                                "Clear explanations (no confusing lender speech)",
                                "Lock strategy help (timing matters)",
                            ].map((feat) => (
                                <CheckItemText
                                    key={feat}
                                    size="md"
                                    iconStyle="outlined"
                                    color="primary"
                                    text={feat}
                                    textClassName="text-white"
                                    iconClassName="text-white"
                                />
                            ))}
                        </ul>
                        <p className="mt-8 text-sm opacity-75">No spam. We don't sell your info to dozens of lenders.</p>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
                            <h3 className="text-2xl font-bold text-primary mb-6">Get Pre-Approved</h3>
                            <ul className="space-y-4 mb-6">
                                <CheckItemText text="Same day review available" iconStyle="outlined" />
                                <CheckItemText text="Secure upload" iconStyle="outlined" />
                                <CheckItemText text="Dedicated loan officer" iconStyle="outlined" />
                            </ul>
                            <div className="flex flex-col gap-3">
                                <Button size="xl" className="w-full" href="/get-started">
                                    Get Pre-Approved
                                </Button>
                                <Button size="lg" color="secondary" className="w-full" href="/rates">
                                    See Current Rates
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const reviews = [
    {
        id: "review-01",
        quote: "Love the simplicity of the service and the prompt customer support. Closed in 3 weeks!",
        author: { name: "Kelly Williams", role: "First-time Buyer", avatarUrl: "https://www.untitledui.com/images/avatars/kelly-williams?fm=webp&q=80" },
    },
    {
        id: "review-02",
        quote: "Best rates I found anywhere. The process was smooth and my loan officer was fantastic.",
        author: { name: "Candice Wu", role: "Refinance Customer", avatarUrl: "https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80" },
    },
    {
        id: "review-03",
        quote: "Got pre-approved same day and locked a great rate. Highly recommend!",
        author: { name: "Jordan Miller", role: "Home Buyer", avatarUrl: "https://www.untitledui.com/images/avatars/ammar-foley?fm=webp&q=80" },
    },
];

const TestimonialSection = () => {
    const [selectedReviewIndex, setSelectedReviewIndex] = useState(0);

    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-center gap-10 md:gap-12">
                    <blockquote className="text-display-sm font-medium text-balance text-center text-primary md:text-display-md lg:max-w-4xl">
                        {reviews[selectedReviewIndex].quote}
                    </blockquote>
                    <figcaption className="flex justify-center">
                        <div className="flex flex-col items-center gap-4">
                            <Avatar src={reviews[selectedReviewIndex].author.avatarUrl} alt={reviews[selectedReviewIndex].author.name} size="2xl" />
                            <div className="flex flex-col gap-1 text-center">
                                <p className="text-lg font-semibold text-primary">{reviews[selectedReviewIndex].author.name}</p>
                                <cite className="text-md text-tertiary not-italic">{reviews[selectedReviewIndex].author.role}</cite>
                            </div>
                        </div>
                    </figcaption>

                    <div className="flex gap-2">
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedReviewIndex(index)}
                                className={cx(
                                    "size-2 rounded-full transition-colors",
                                    index === selectedReviewIndex ? "bg-brand-solid" : "bg-secondary"
                                )}
                                aria-label={`View review ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const FooterMinimal = () => {
    const legalLinks = [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
        { label: "Licensing", href: "/licensing" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <footer className="border-t border-secondary bg-primary py-6">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                    {/* Left: Legal links */}
                    <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                        {legalLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm text-tertiary hover:text-secondary transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <span className="text-sm text-quaternary">NMLS #123456</span>
                    </nav>

                    {/* Right: Phone number */}
                    <a
                        href="tel:1234567890"
                        className="flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors"
                    >
                        <Phone className="size-4" />
                        (123) 456-7890
                    </a>
                </div>

                <p className="mt-4 text-center text-xs text-quaternary">
                    © 2024 PurchaseRates.com. All rights reserved. Equal Housing Lender.
                </p>
            </div>
        </footer>
    );
};

export default function Home() {
    return (
        <div className="bg-primary">
            <HeroScreenMockup01 />
            
            <SectionDivider className="max-md:hidden" />
            
            <SocialProofLenders />
            
            <SectionDivider />
            
            <HowItWorksSection />
            
            <TodaysRatesSection />
            
            <LoanProgramsSection />
            
            <PreApprovalCTA />
            
            <TestimonialSection />
            
            <FooterMinimal />
        </div>
    );
}
