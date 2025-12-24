"use client";

import { type FC, Fragment, type HTMLAttributes, useState } from "react";
import { ArrowRight, CheckCircle, Home04, MessageChatCircle, Percent01, PlayCircle, TrendUp02, Users01, ZapFast } from "@untitledui/icons";
import { Collection, Tab, TabList, TabPanel, Tabs } from "react-aria-components";
import { Avatar } from "@/components/base/avatar/avatar";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { PurchaseRatesLogo } from "@/components/foundations/logo/purchaserates-logo";
import { RatingBadge } from "@/components/foundations/rating-badge";
import { AngelList, Dribbble, Facebook, GitHub, Layers, LinkedIn, X } from "@/components/foundations/social-icons";
import { Header } from "@/components/marketing/header-navigation/header";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { FeatureTextFeaturedIconTopCentered } from "@/components/sections/feature-text";
import { BadgeWithDot } from "@/components/base/badges/badge-with-dot";
import { cx } from "@/utils/cx";

const footerSocials = [
    { label: "X (formerly Twitter)", icon: X, href: "https://x.com/" },
    { label: "LinkedIn", icon: LinkedIn, href: "https://www.linkedin.com/" },
    { label: "Facebook", icon: Facebook, href: "https://www.facebook.com/" },
    { label: "GitHub", icon: GitHub, href: "https://github.com/" },
    { label: "AngelList", icon: AngelList, href: "https://angel.co/" },
    { label: "Dribbble", icon: Dribbble, href: "https://dribbble.com/" },
    { label: "Layers", icon: Layers, href: "https://layers.com/" },
];

const footerNavList = [
    {
        label: "Product",
        items: [
            { label: "Mortgage Rates", href: "#" },
            { label: "Programs", href: "#" },
            { label: "Calculator", href: "#" },
            { label: "Pre-Approval", href: "#" },
            { label: "Refinance", href: "#" },
        ],
    },
    {
        label: "Company",
        items: [
            { label: "About us", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Press", href: "#" },
            { label: "Contact", href: "#" },
        ],
    },
    {
        label: "Resources",
        items: [
            { label: "Blog", href: "#" },
            { label: "Mortgage Guide", href: "#" },
            { label: "First-Time Buyers", href: "#" },
            { label: "Help Centre", href: "#" },
            { label: "Support", href: "#" },
        ],
    },
    {
        label: "Legal",
        items: [
            { label: "Terms", href: "#" },
            { label: "Privacy", href: "#" },
            { label: "Licensing", href: "#" },
            { label: "NMLS Info", href: "#" },
        ],
    },
];

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

            <section className="relative overflow-hidden py-16 md:py-24">
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
                        <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">
                            Get the Best Purchase Mortgage Rate—Fast
                        </h1>
                        <p className="mt-4 max-w-3xl text-lg text-tertiary md:mt-6 md:text-xl">
                            Compare real purchase options and get matched with a loan expert in minutes. No spam. No pressure. Licensed loan experts ready to help.
                        </p>
                        <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-12">
                            <Button color="secondary" size="xl" href="/rates">
                                View Rates Dashboard
                            </Button>
                            <Button size="xl" href="/get-started">Get My Rate</Button>
                        </div>
                    </div>
                </div>

                <div className="mx-auto mt-16 w-full max-w-container px-4 md:px-8">
                    <div className="flex flex-col md:items-start">
                        <div className="mx-auto flex h-full w-full items-center justify-center">
                            <div className="w-full max-w-2xl rounded-2xl bg-primary p-8 shadow-2xl ring-1 ring-secondary">
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                                    <div>
                                        <label className="block text-sm font-medium text-secondary mb-2">Home Price</label>
                                        <input 
                                            type="text" 
                                            defaultValue="$400,000" 
                                            className="w-full rounded-lg border border-secondary bg-primary px-4 py-3 text-lg font-semibold text-primary focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-secondary mb-2">Down Payment</label>
                                        <input 
                                            type="text" 
                                            defaultValue="10%" 
                                            className="w-full rounded-lg border border-secondary bg-primary px-4 py-3 text-lg font-semibold text-primary focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-secondary mb-2">ZIP Code</label>
                                        <input 
                                            type="text" 
                                            defaultValue="90210" 
                                            className="w-full rounded-lg border border-secondary bg-primary px-4 py-3 text-lg font-semibold text-primary focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand"
                                        />
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <label className="block text-sm font-medium text-secondary mb-2">Credit Range</label>
                                    <div className="flex gap-2">
                                        {["Excellent", "Good", "Fair"].map((credit) => (
                                            <button
                                                key={credit}
                                                className={cx(
                                                    "flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
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
                                <Button size="xl" className="w-full mt-6" href="/get-started">
                                    Get My Rate
                                </Button>
                                <a href="/rates" className="mt-4 text-center text-sm text-brand-secondary hover:text-brand-secondary_hover font-medium block transition-colors">
                                    See Today's Rates →
                                </a>
                            </div>
                        </div>
                        
                        <div className="mx-auto mt-8 flex items-center gap-4">
                            <RatingBadge />
                            <div className="h-8 w-px bg-secondary" />
                            <p className="text-sm text-tertiary italic">"Locked a great rate and closed on time." — Jordan M.</p>
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
            <section id="how-it-works" className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">How It Works</h2>
                </div>
                <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                    {steps.map((step) => (
                        <div key={step.number} className="flex flex-col items-center text-center">
                            <FeaturedIcon icon={step.icon} size="lg" color="brand" theme="light" />
                            <h3 className="mt-5 text-xl font-semibold text-primary">{step.title}</h3>
                            <p className="mt-2 text-md text-tertiary">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TodaysRatesSection = () => {
    const rates = [
        { type: "30-Year Fixed", rate: "5.99%", badge: "Most Popular" },
        { type: "15-Year Fixed", rate: "5.49%" },
        { type: "FHA", rate: "5.17%" },
        { type: "VA", rate: "5.17%" },
        { type: "Jumbo", rate: "5.25%" },
    ];

    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                        Today's Purchase Rates <span className="text-tertiary">(Examples)</span>
                    </h2>
                    <p className="mt-4 text-lg text-tertiary">Rates may vary by credit, LTV, property type, and location.</p>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
                    {rates.map((rate) => (
                        <div key={rate.type} className="flex flex-col gap-2 rounded-xl border border-secondary bg-primary p-6">
                            {rate.badge && (
                                <Badge color="success" size="sm" className="self-start">
                                    {rate.badge}
                                </Badge>
                            )}
                            <div className="flex items-center gap-2">
                                <CheckCircle className="size-5 text-fg-brand-primary" />
                                <span className="text-md font-semibold text-primary">{rate.type}</span>
                            </div>
                            <p className="text-display-xs font-bold text-brand-tertiary">from {rate.rate}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-8 flex justify-center">
                    <Button size="lg" color="secondary" href="/rates">
                        View Full Rates Dashboard
                    </Button>
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
            cta: "Learn more",
            href: "/get-started",
        },
        {
            icon: CheckCircle,
            title: "FHA",
            subtitle: "Flexible credit, low down.",
            cta: "Learn more",
            href: "/get-started",
        },
        {
            icon: Users01,
            title: "VA",
            subtitle: "Eligible veterans, 0%-5% down.",
            cta: "Learn more",
            href: "/get-started",
        },
        {
            icon: TrendUp02,
            title: "Jumbo",
            subtitle: "High-$ loan amounts.",
            cta: "Learn more",
            href: "/get-started",
        },
        {
            icon: Home04,
            title: "First Time Buyer",
            subtitle: "3%-5% down, payment approvals.",
            cta: "Learn more",
            href: "/get-started",
        },
    ];

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="hidden md:flex">
                        <BadgeWithDot color="brand" type="modern" size="lg">
                            Loan Programs
                        </BadgeWithDot>
                    </span>
                    <span className="flex md:hidden">
                        <BadgeWithDot color="brand" type="modern" size="md">
                            Loan Programs
                        </BadgeWithDot>
                    </span>
                    <h2 className="mt-4 text-display-sm font-semibold text-primary md:text-display-md">
                        Find Your Best Purchase Program
                    </h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Whether you're a first-time buyer or seasoned homeowner, we have the right loan program for your needs.
                    </p>
                </div>

                <div className="mt-12 flex flex-col gap-12 md:mt-16 md:gap-16 lg:items-center">
                    <div className="flex w-full items-center justify-center">
                        <div className="w-full max-w-4xl rounded-2xl border border-secondary bg-primary p-1 shadow-xl">
                            <div className="overflow-hidden rounded-xl bg-gradient-to-br from-brand-50 to-success-50">
                                {/* Dashboard Mockup */}
                                <div className="p-6 md:p-8">
                                    {/* Header */}
                                    <div className="mb-6 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="size-3 rounded-full bg-success-500" />
                                            <span className="text-sm font-semibold text-secondary">Live Rates</span>
                                        </div>
                                        <div className="text-xs text-tertiary">Updated: Just now</div>
                                    </div>
                                    
                                    {/* Main Rate Cards */}
                                    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
                                        <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-secondary">
                                            <div className="mb-2 text-xs font-medium text-tertiary">30-Year Fixed</div>
                                            <div className="text-2xl font-bold text-brand-600">6.35%</div>
                                            <div className="mt-1 flex items-center gap-1 text-xs text-success-600">
                                                <TrendUp02 className="size-3" />
                                                <span>Best rate</span>
                                            </div>
                                        </div>
                                        
                                        <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-secondary">
                                            <div className="mb-2 text-xs font-medium text-tertiary">FHA</div>
                                            <div className="text-2xl font-bold text-brand-600">5.17%</div>
                                            <div className="mt-1 text-xs text-tertiary">Low down</div>
                                        </div>
                                        
                                        <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-secondary">
                                            <div className="mb-2 text-xs font-medium text-tertiary">VA</div>
                                            <div className="text-2xl font-bold text-brand-600">5.25%</div>
                                            <div className="mt-1 text-xs text-tertiary">0% down</div>
                                        </div>
                                        
                                        <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-secondary">
                                            <div className="mb-2 text-xs font-medium text-tertiary">Jumbo</div>
                                            <div className="text-2xl font-bold text-brand-600">6.45%</div>
                                            <div className="mt-1 text-xs text-tertiary">High value</div>
                                        </div>
                                    </div>
                                    
                                    {/* Mini Chart */}
                                    <div className="mt-6 rounded-lg bg-white p-4 shadow-sm ring-1 ring-secondary">
                                        <div className="mb-3 text-xs font-medium text-secondary">Rate Trends (30 Days)</div>
                                        <div className="flex h-20 items-end justify-between gap-1">
                                            {[45, 52, 48, 55, 58, 54, 60, 62, 58, 65, 68, 64, 70, 72].map((height, i) => (
                                                <div
                                                    key={i}
                                                    className="flex-1 rounded-t bg-gradient-to-t from-brand-500 to-brand-400"
                                                    style={{ height: `${height}%` }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ul className="flex flex-1 flex-wrap justify-center gap-x-8 gap-y-10 lg:flex-nowrap">
                        {programs.map((program) => (
                            <li key={program.title}>
                                <FeatureTextFeaturedIconTopCentered
                                    icon={program.icon}
                                    title={program.title}
                                    subtitle={program.subtitle}
                                    footer={
                                        <Button color="link-color" size="lg" href={program.href} iconTrailing={ArrowRight}>
                                            {program.cta}
                                        </Button>
                                    }
                                />
                            </li>
                        ))}
                    </ul>
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
        <section className="bg-brand-section py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col justify-center text-white">
                        <h2 className="text-display-sm font-semibold md:text-display-md">Ready to make an offer stronger?</h2>
                        <p className="mt-4 text-lg opacity-90">
                            A verified pre-approval helps you pull past and move re=fast at closing.
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

const FooterLarge02 = () => {
    return (
        <footer className="dark-mode">
            <div className="bg-primary py-12 md:pt-16">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="flex flex-col gap-12 md:gap-16 xl:flex-row">
                        <div className="flex flex-col items-start gap-6 md:w-80">
                            <a href="/">
                                <PurchaseRatesLogo className="h-10 w-auto text-white" />
                            </a>
                            <p className="text-md text-tertiary">
                                Find the best purchase mortgage rates and get matched with licensed loan experts. 
                                No spam, no pressure—just great rates.
                            </p>
                            <RatingBadge />
                        </div>
                        <nav className="flex-1">
                            <ul className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-4">
                                {footerNavList.map((category) => (
                                    <li key={category.label}>
                                        <h4 className="text-sm font-semibold text-quaternary">{category.label}</h4>
                                        <ul className="mt-4 flex flex-col gap-3">
                                            {category.items.map((item) => (
                                                <li key={item.label}>
                                                    <Button color="link-gray" size="lg" href={item.href}>
                                                        {item.label}
                                                    </Button>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-secondary_alt py-10 md:py-12">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="flex flex-col-reverse justify-between gap-6 md:flex-row">
                        <div className="flex flex-col gap-2">
                            <p className="text-md text-quaternary">© 2024 PurchaseRates.com. All rights reserved.</p>
                            <p className="text-sm text-quaternary">NMLS #123456 | Equal Housing Lender</p>
                        </div>
                        <ul className="flex gap-6">
                            {footerSocials.map(({ label, icon: Icon, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-fg-quaternary transition duration-100 hover:text-fg-quaternary_hover"
                                        aria-label={label}
                                    >
                                        <Icon width={24} height={24} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
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
            
            <FooterLarge02 />
        </div>
    );
}
