"use client";

import { Header } from "@/components/marketing/header-navigation/header";
import { Button } from "@/components/base/buttons/button";
import {
    ConventionalIcon,
    FHAIcon,
    VAIcon,
    USDAIcon,
    JumboIcon,
    FirstTimeBuyerIcon,
    RefinanceIcon,
    ARMIcon,
} from "@/components/illustrations/program-icons";

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
        icon: ConventionalIcon,
        benefits: [
            "Down payments as low as 3%",
            "No upfront mortgage insurance",
            "Flexible terms: 10, 15, 20, or 30 years",
        ],
    },
    {
        name: "FHA Loan",
        description: "Government-backed loan with flexible credit requirements.",
        icon: FHAIcon,
        benefits: [
            "3.5% down with 580+ credit score",
            "Accept credit scores as low as 500",
            "Gift funds allowed for down payment",
        ],
    },
    {
        name: "VA Loan",
        description: "Exclusive benefits for veterans, active military, and eligible spouses.",
        icon: VAIcon,
        benefits: [
            "No down payment required",
            "No private mortgage insurance",
            "Competitive interest rates",
        ],
    },
    {
        name: "USDA Loan",
        description: "Zero-down financing for homes in eligible rural and suburban areas.",
        icon: USDAIcon,
        benefits: [
            "No down payment required",
            "Below-market interest rates",
            "Low monthly mortgage insurance",
        ],
    },
    {
        name: "Jumbo Loan",
        description: "Financing for high-value properties that exceed conforming loan limits.",
        icon: JumboIcon,
        benefits: [
            "Loan amounts above $766,550",
            "Competitive rates for qualified buyers",
            "Primary, secondary, and investment properties",
        ],
    },
    {
        name: "First-Time Homebuyer",
        description: "Special programs designed to help you purchase your first home.",
        icon: FirstTimeBuyerIcon,
        benefits: [
            "Down payment assistance available",
            "Lower credit score requirements",
            "Homebuyer education resources",
        ],
    },
    {
        name: "Refinance",
        description: "Replace your current mortgage with better terms or access your equity.",
        icon: RefinanceIcon,
        benefits: [
            "Lower your interest rate",
            "Reduce monthly payments",
            "Cash-out options available",
        ],
    },
    {
        name: "Adjustable Rate (ARM)",
        description: "Lower initial rate that adjusts after a fixed period.",
        icon: ARMIcon,
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
        <div className="flex flex-col rounded-2xl border border-secondary bg-primary p-5 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4">
                <div className="shrink-0">
                    <Icon className="h-16 w-16" />
                </div>
                <h3 className="text-lg font-semibold text-primary">{program.name}</h3>
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
        <div className="min-h-screen bg-gradient-sky">
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
