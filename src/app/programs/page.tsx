"use client";

import { Home04, Shield01, Flag01, Building07, Bank, Users01, RefreshCcw01, TrendUp01 } from "@untitledui/icons";
import { Header } from "@/components/marketing/header-navigation/header";
import { Button } from "@/components/base/buttons/button";

interface Program {
    name: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    benefits: string[];
}

const programs: Program[] = [
    {
        name: "Conventional Loan",
        description: "Traditional mortgage for borrowers with good credit and stable income.",
        icon: Home04,
        benefits: [
            "Down payments as low as 3%",
            "No upfront mortgage insurance",
            "Flexible terms: 10, 15, 20, or 30 years",
        ],
    },
    {
        name: "FHA Loan",
        description: "Government-backed loan with flexible credit requirements.",
        icon: Building07,
        benefits: [
            "3.5% down with 580+ credit score",
            "Accept credit scores as low as 500",
            "Gift funds allowed for down payment",
        ],
    },
    {
        name: "VA Loan",
        description: "Exclusive benefits for veterans, active military, and eligible spouses.",
        icon: Flag01,
        benefits: [
            "No down payment required",
            "No private mortgage insurance",
            "Competitive interest rates",
        ],
    },
    {
        name: "USDA Loan",
        description: "Zero-down financing for homes in eligible rural and suburban areas.",
        icon: Bank,
        benefits: [
            "No down payment required",
            "Below-market interest rates",
            "Low monthly mortgage insurance",
        ],
    },
    {
        name: "Jumbo Loan",
        description: "Financing for high-value properties that exceed conforming loan limits.",
        icon: Shield01,
        benefits: [
            "Loan amounts above $766,550",
            "Competitive rates for qualified buyers",
            "Primary, secondary, and investment properties",
        ],
    },
    {
        name: "First-Time Homebuyer",
        description: "Special programs designed to help you purchase your first home.",
        icon: Users01,
        benefits: [
            "Down payment assistance available",
            "Lower credit score requirements",
            "Homebuyer education resources",
        ],
    },
    {
        name: "Refinance",
        description: "Replace your current mortgage with better terms or access your equity.",
        icon: RefreshCcw01,
        benefits: [
            "Lower your interest rate",
            "Reduce monthly payments",
            "Cash-out options available",
        ],
    },
    {
        name: "Adjustable Rate (ARM)",
        description: "Lower initial rate that adjusts after a fixed period.",
        icon: TrendUp01,
        benefits: [
            "Lower initial monthly payments",
            "5/1, 7/1, and 10/1 ARM options",
            "Ideal for short-term ownership",
        ],
    },
];

function ProgramCard({ program }: { program: Program }) {
    const Icon = program.icon;

    return (
        <div className="flex flex-col rounded-xl border border-secondary bg-primary p-4 shadow-sm">
            <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-secondary">
                    <Icon className="h-5 w-5 text-brand-primary" />
                </div>
                <h3 className="text-base font-semibold text-primary">{program.name}</h3>
            </div>
            <ul className="mt-3 space-y-1.5 flex-1">
                <li className="flex items-start gap-2 text-sm text-secondary">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-900" />
                    {program.description}
                </li>
                {program.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-secondary">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-900" />
                        {benefit}
                    </li>
                ))}
            </ul>
            <Button size="sm" href="/get-started" className="mt-4 w-full">
                Inquire Now
            </Button>
        </div>
    );
}

export default function ProgramsPage() {
    return (
        <div className="min-h-screen bg-secondary_alt">
            <Header />

            <main className="mx-auto max-w-4xl px-4 py-4 md:px-8 md:py-6">
                {/* Page Header */}
                <div className="mb-6 text-center">
                    <h1 className="text-xl font-semibold text-primary sm:text-2xl">
                        Mortgage Programs
                    </h1>
                    <p className="mt-1 text-sm text-tertiary">
                        Find the right loan for your situation
                    </p>
                </div>

                {/* Program Cards Grid */}
                <div className="grid gap-4 md:grid-cols-2">
                    {programs.map((program) => (
                        <ProgramCard key={program.name} program={program} />
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-4 rounded-xl border border-secondary bg-primary p-4 shadow-sm text-center">
                    <p className="text-sm text-secondary mb-3">
                        Not sure which program is right for you?
                    </p>
                    <Button size="md" href="/get-started">
                        Talk to a Loan Expert
                    </Button>
                </div>
            </main>
        </div>
    );
}
