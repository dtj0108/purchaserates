"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "@untitledui/icons";
import { Header } from "@/components/marketing/header-navigation/header";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { Button } from "@/components/base/buttons/button";
import { PurchaseRatesLogo } from "@/components/foundations/logo/purchaserates-logo";
import { LinkedIn, X } from "@/components/foundations/social-icons";

const HeaderSpaceBetween = () => {
    return (
        <section className="bg-primary py-12 sm:py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mb-2 text-xs font-semibold text-brand-secondary sm:text-sm md:text-md sm:mb-3">Nice to meet you</div>
                <div className="flex flex-col gap-x-16 lg:flex-row">
                    <h1 className="flex-1 text-2xl font-semibold text-primary sm:text-display-sm md:text-display-md lg:text-display-lg">
                        Our mission is to help you find the best mortgage rates
                    </h1>

                    <p className="w-full mt-3 text-base text-tertiary sm:text-lg sm:mt-4 md:mt-6 md:text-xl lg:mt-3 lg:max-w-120">
                        PurchaseRates.com is a mortgage technology platform that connects homebuyers with licensed loan experts. 
                        We believe everyone deserves access to competitive rates and transparent guidance when financing their home purchase.
                    </p>
                </div>
            </div>
        </section>
    );
};

const MetricsCardGrayLight = () => {
    return (
        <section className="bg-primary pb-12 sm:pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-6 rounded-xl bg-secondary px-4 py-8 sm:gap-8 sm:rounded-2xl sm:px-6 sm:py-10 md:gap-16 md:rounded-none md:bg-transparent md:p-0">
                    <dl className="flex flex-col gap-6 rounded-xl bg-secondary sm:gap-8 sm:rounded-2xl md:flex-row md:p-16">
                        {[
                            { title: "4,000+", subtitle: "Homebuyers helped" },
                            { title: "4.9/5", subtitle: "Average rating" },
                            { title: "$100M+", subtitle: "Loans funded" },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-1 flex-col-reverse gap-3 text-center">
                                <dt className="text-lg font-semibold text-primary">{item.subtitle}</dt>
                                <dd className="text-display-lg font-semibold text-brand-tertiary md:text-display-xl">{item.title}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

const teamMembers = [
    {
        name: "Michael Rodriguez",
        title: "CEO & Founder",
        summary: "Former mortgage executive at Wells Fargo. 20+ years in lending.",
        avatarUrl: "https://www.untitledui.com/images/portraits/alisa-hester",
        socials: [
            { icon: X, href: "#" },
            { icon: LinkedIn, href: "#" },
        ],
    },
    {
        name: "Sarah Chen",
        title: "Head of Lending",
        summary: "Led lending teams at Quicken Loans and Chase. Expert in VA loans.",
        avatarUrl: "https://www.untitledui.com/images/portraits/rich-wilson",
        socials: [
            { icon: X, href: "#" },
            { icon: LinkedIn, href: "#" },
        ],
    },
    {
        name: "David Martinez",
        title: "Senior Loan Officer",
        summary: "Specializes in FHA and first-time homebuyers. NMLS certified.",
        avatarUrl: "https://www.untitledui.com/images/portraits/johnny-bell",
        socials: [
            { icon: X, href: "#" },
            { icon: LinkedIn, href: "#" },
        ],
    },
    {
        name: "Emily Thompson",
        title: "Jumbo Loan Specialist",
        summary: "Expert in high-value loans and investment properties.",
        avatarUrl: "https://www.untitledui.com/images/portraits/annie-stanley",
        socials: [
            { icon: X, href: "#" },
            { icon: LinkedIn, href: "#" },
        ],
    },
    {
        name: "James Wilson",
        title: "VA Loan Expert",
        summary: "Veteran himself, dedicated to helping military families.",
        avatarUrl: "https://www.untitledui.com/images/portraits/archie-young",
        socials: [
            { icon: X, href: "#" },
            { icon: LinkedIn, href: "#" },
        ],
    },
];

const TeamSection = () => {
    return (
        <section className="overflow-hidden bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex w-full flex-col justify-between md:flex-row">
                    <div className="flex flex-1 flex-col">
                        <h2 className="text-display-sm font-semibold text-primary md:text-display-md">Meet Our Lending Experts</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            Licensed professionals dedicated to finding you the best rates and guiding you through every step.
                        </p>
                    </div>
                    <div className="mt-8 flex flex-col gap-3 self-stretch md:mt-0 md:flex-row-reverse md:justify-center md:self-start">
                        <Button size="xl" href="/get-started">Get My Rate</Button>
                        <Button color="secondary" size="xl" href="/">
                            Back to Home
                        </Button>
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
                    {teamMembers.map((member) => (
                        <div
                            key={member.name}
                            className="relative flex h-108 w-full cursor-pointer flex-col justify-end overflow-hidden rounded-xl transition-transform hover:scale-[1.02]"
                        >
                            <img 
                                src={member.avatarUrl} 
                                alt={member.name} 
                                className="absolute inset-0 z-0 size-full object-cover" 
                            />

                            <div className="z-10 bg-gradient-to-t from-black/60 to-black/0 pt-16 md:pt-20">
                                <div className="relative bg-primary/30 px-5 pt-5 pb-6 text-white backdrop-blur-[10px] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-white/30">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-semibold md:text-2xl">{member.name}</h3>
                                        <ArrowUpRight className="size-6" />
                                    </div>
                                    <p className="mt-2 text-md font-semibold md:mt-3 md:text-lg">{member.title}</p>
                                    <p className="mt-1 text-sm md:text-md">{member.summary}</p>
                                    <ul className="mt-5 flex gap-5 md:mt-6">
                                        {member.socials.map((social, idx) => (
                                            <li key={idx}>
                                                <a
                                                    href={social.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex rounded-xs text-white outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                                >
                                                    <social.icon className="size-5 md:size-6" />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ContactCTA = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="rounded-2xl bg-brand-section px-6 py-10 text-center lg:p-16">
                    <h2 className="text-display-sm font-semibold text-white md:text-display-md">
                        Ready to find your best rate?
                    </h2>
                    <p className="mt-4 text-lg text-brand-200 md:mt-5 md:text-xl">
                        Connect with our licensed loan experts today. No pressure, no spam—just great rates and clear guidance.
                    </p>
                    <div className="mt-8 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start sm:justify-center md:mt-10">
                        <Button color="secondary" size="xl" className="bg-white/10 text-white border-white/20 hover:bg-white/20" href="tel:3107705539">
                            Call 310-770-5539
                        </Button>
                        <Button size="xl" className="bg-white text-brand-600 hover:bg-gray-50">
                            Get My Rate
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FooterSimple = () => {
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
                        </div>
                        <nav className="flex-1">
                            <ul className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-4">
                                {[
                                    { label: "Home", href: "/" },
                                    { label: "Rates", href: "/rates" },
                                    { label: "About", href: "/about" },
                                    { label: "Get Started", href: "/get-started" },
                                ].map((item) => (
                                    <li key={item.label}>
                                        <Button color="link-gray" size="lg" href={item.href}>
                                            {item.label}
                                        </Button>
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
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default function AboutPage() {
    return (
        <div className="bg-primary">
            <Header />

            <HeaderSpaceBetween />

            <MetricsCardGrayLight />

            <SectionDivider />

            <ContactCTA />

            <FooterSimple />
        </div>
    );
}

