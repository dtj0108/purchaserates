"use client";

import { useState, useMemo } from "react";
import { Calculator, Home04, Percent01, Clock } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Header } from "@/components/marketing/header-navigation/header";

function formatCurrency(value: number): string {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(value);
}

function parseCurrency(value: string): number {
    return Number(value.replace(/[^0-9.-]+/g, "")) || 0;
}

export default function CalculatorPage() {
    const [homePrice, setHomePrice] = useState("400000");
    const [downPayment, setDownPayment] = useState("80000");
    const [downPaymentPercent, setDownPaymentPercent] = useState("20");
    const [interestRate, setInterestRate] = useState("6.35");
    const [loanTerm, setLoanTerm] = useState("30");

    const calculations = useMemo(() => {
        const principal = parseCurrency(homePrice) - parseCurrency(downPayment);
        const monthlyRate = parseFloat(interestRate) / 100 / 12;
        const numPayments = parseInt(loanTerm) * 12;

        if (principal <= 0 || monthlyRate <= 0 || numPayments <= 0) {
            return {
                monthlyPayment: 0,
                totalPayment: 0,
                totalInterest: 0,
                loanAmount: 0,
            };
        }

        // Monthly payment formula: M = P * [r(1+r)^n] / [(1+r)^n - 1]
        const monthlyPayment =
            (principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
            (Math.pow(1 + monthlyRate, numPayments) - 1);

        const totalPayment = monthlyPayment * numPayments;
        const totalInterest = totalPayment - principal;

        return {
            monthlyPayment,
            totalPayment,
            totalInterest,
            loanAmount: principal,
        };
    }, [homePrice, downPayment, interestRate, loanTerm]);

    const handleHomePriceChange = (value: string) => {
        const numValue = parseCurrency(value);
        setHomePrice(numValue.toString());
        // Update down payment to maintain percentage
        const percent = parseFloat(downPaymentPercent) / 100;
        setDownPayment(Math.round(numValue * percent).toString());
    };

    const handleDownPaymentChange = (value: string) => {
        const numValue = parseCurrency(value);
        setDownPayment(numValue.toString());
        // Update percentage
        const homePriceNum = parseCurrency(homePrice);
        if (homePriceNum > 0) {
            setDownPaymentPercent(((numValue / homePriceNum) * 100).toFixed(0));
        }
    };

    const handleDownPaymentPercentChange = (value: string) => {
        const percent = parseFloat(value) || 0;
        setDownPaymentPercent(percent.toString());
        const homePriceNum = parseCurrency(homePrice);
        setDownPayment(Math.round(homePriceNum * (percent / 100)).toString());
    };

    return (
        <div className="min-h-screen bg-secondary_alt">
            <Header />

            <main className="mx-auto max-w-4xl px-4 py-4 md:px-8 md:py-6">
                {/* Page Header */}
                <div className="mb-4 text-center">
                    <h1 className="text-xl font-semibold text-primary sm:text-2xl">
                        Mortgage Calculator
                    </h1>
                    <p className="mt-1 text-sm text-tertiary">
                        Estimate your monthly mortgage payment
                    </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
                    {/* Calculator Inputs */}
                    <div className="rounded-xl border border-secondary bg-primary p-4 shadow-sm">
                        <h2 className="text-base font-semibold text-primary mb-4">Loan Details</h2>

                        {/* Home Price */}
                        <div className="mb-3">
                            <label className="block text-sm font-medium text-secondary mb-1.5">
                                Home Price
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-tertiary">$</span>
                                <input
                                    type="text"
                                    value={parseCurrency(homePrice).toLocaleString()}
                                    onChange={(e) => handleHomePriceChange(e.target.value)}
                                    className="w-full rounded-lg border border-secondary bg-primary pl-8 pr-4 py-2 text-sm font-medium text-primary focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand"
                                />
                            </div>
                        </div>

                        {/* Down Payment */}
                        <div className="mb-3">
                            <label className="block text-sm font-medium text-secondary mb-1.5">
                                Down Payment
                            </label>
                            <div className="flex gap-2">
                                <div className="relative flex-1">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-tertiary">$</span>
                                    <input
                                        type="text"
                                        value={parseCurrency(downPayment).toLocaleString()}
                                        onChange={(e) => handleDownPaymentChange(e.target.value)}
                                        className="w-full rounded-lg border border-secondary bg-primary pl-8 pr-4 py-2 text-sm font-medium text-primary focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand"
                                    />
                                </div>
                                <div className="relative w-20">
                                    <input
                                        type="text"
                                        value={downPaymentPercent}
                                        onChange={(e) => handleDownPaymentPercentChange(e.target.value)}
                                        className="w-full rounded-lg border border-secondary bg-primary pl-3 pr-6 py-2 text-sm font-medium text-primary text-right focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand"
                                    />
                                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-tertiary">%</span>
                                </div>
                            </div>
                        </div>

                        {/* Interest Rate */}
                        <div className="mb-3">
                            <label className="block text-sm font-medium text-secondary mb-1.5">
                                Interest Rate
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={interestRate}
                                    onChange={(e) => setInterestRate(e.target.value)}
                                    className="w-full rounded-lg border border-secondary bg-primary pl-4 pr-8 py-2 text-sm font-medium text-primary focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand"
                                />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-tertiary">%</span>
                            </div>
                        </div>

                        {/* Loan Term */}
                        <div>
                            <label className="block text-sm font-medium text-secondary mb-1.5">
                                Loan Term
                            </label>
                            <div className="flex gap-2">
                                {["30", "20", "15", "10"].map((term) => (
                                    <button
                                        key={term}
                                        onClick={() => setLoanTerm(term)}
                                        className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                                            loanTerm === term
                                                ? "bg-brand-solid text-white"
                                                : "bg-secondary text-secondary hover:bg-tertiary"
                                        }`}
                                    >
                                        {term} yr
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="flex flex-col gap-4">
                        {/* Monthly Payment Card */}
                        <div className="rounded-xl border border-brand bg-brand-section p-4 text-white">
                            <p className="text-xs font-medium opacity-80">Estimated Monthly Payment</p>
                            <p className="mt-1 text-3xl font-bold">
                                {formatCurrency(calculations.monthlyPayment)}
                            </p>
                            <p className="mt-1 text-xs opacity-80">Principal & Interest</p>
                        </div>

                        {/* Breakdown */}
                        <div className="rounded-xl border border-secondary bg-primary p-4 shadow-sm">
                            <h3 className="text-base font-semibold text-primary mb-3">Loan Summary</h3>

                            <div className="space-y-0">
                                <div className="flex justify-between items-center py-1.5 border-b border-secondary">
                                    <span className="text-xs text-tertiary">Loan Amount</span>
                                    <span className="text-sm font-semibold text-primary">
                                        {formatCurrency(calculations.loanAmount)}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-1.5 border-b border-secondary">
                                    <span className="text-xs text-tertiary">Down Payment</span>
                                    <span className="text-sm font-semibold text-primary">
                                        {formatCurrency(parseCurrency(downPayment))} ({downPaymentPercent}%)
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-1.5 border-b border-secondary">
                                    <span className="text-xs text-tertiary">Total Interest</span>
                                    <span className="text-sm font-semibold text-primary">
                                        {formatCurrency(calculations.totalInterest)}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-1.5">
                                    <span className="text-xs text-tertiary">Total Cost of Loan</span>
                                    <span className="text-sm font-semibold text-primary">
                                        {formatCurrency(calculations.totalPayment)}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="rounded-xl border border-secondary bg-primary p-4 shadow-sm text-center">
                            <p className="text-sm text-secondary mb-3">
                                Ready to get your personalized rate?
                            </p>
                            <Button size="md" href="/get-started" className="w-full">
                                Get Pre-Approved
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="mt-4 rounded-lg bg-secondary p-3">
                    <p className="text-xs text-tertiary text-center">
                        This calculator provides estimates for informational purposes only. Actual rates and payments may vary based on your credit profile, property type, and other factors. Contact us for a personalized quote.
                    </p>
                </div>
            </main>
        </div>
    );
}
