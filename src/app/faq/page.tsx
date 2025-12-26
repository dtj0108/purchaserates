"use client";

import { useState } from "react";
import { ChevronDown } from "@untitledui/icons";
import { Header } from "@/components/marketing/header-navigation/header";
import { cx } from "@/utils/cx";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "What is PurchaseRates?",
        answer: "PurchaseRates is a mortgage rate comparison platform that helps homebuyers find the best mortgage rates from top lenders. We provide real-time rate comparisons, educational resources, and connect you with trusted loan experts to help you secure the best deal on your home loan.",
    },
    {
        question: "How does PurchaseRates make money?",
        answer: "We partner with lenders who pay us a referral fee when you choose to work with them through our platform. This means our service is completely free for you, and we're committed to showing you the best rates available regardless of our partnerships.",
    },
    {
        question: "Are the rates shown on PurchaseRates accurate?",
        answer: "Yes, we update our rates multiple times daily to ensure accuracy. However, the rates displayed are estimates based on general criteria. Your actual rate will depend on factors like your credit score, down payment, loan amount, and property type. Getting pre-approved will give you a personalized rate.",
    },
    {
        question: "What credit score do I need to get a mortgage?",
        answer: "Most conventional loans require a minimum credit score of 620, while FHA loans may accept scores as low as 580 with a 3.5% down payment. However, higher credit scores typically qualify for better interest rates. A score of 740 or above usually gets you the best available rates.",
    },
    {
        question: "How much should I put down on a house?",
        answer: "While 20% down is traditionally recommended to avoid private mortgage insurance (PMI), many loan programs allow much lower down payments. FHA loans require as little as 3.5%, and some conventional loans accept 3% down. The right amount depends on your financial situation and goals.",
    },
    {
        question: "What's the difference between APR and interest rate?",
        answer: "The interest rate is the cost of borrowing the principal loan amount. The APR (Annual Percentage Rate) includes the interest rate plus other costs like origination fees, points, and mortgage insurance. APR gives you a more complete picture of the total cost of the loan.",
    },
    {
        question: "Should I choose a fixed-rate or adjustable-rate mortgage?",
        answer: "Fixed-rate mortgages offer predictable payments that never change, ideal if you plan to stay in your home long-term. Adjustable-rate mortgages (ARMs) typically start with lower rates but can change over time. ARMs may be a good choice if you plan to sell or refinance before the rate adjusts.",
    },
    {
        question: "How long does the mortgage approval process take?",
        answer: "The typical mortgage process takes 30-45 days from application to closing. Getting pre-approved can take just a few days and strengthens your position when making offers. The timeline can vary based on your documentation readiness, property appraisal, and lender workload.",
    },
    {
        question: "What documents do I need to apply for a mortgage?",
        answer: "You'll typically need proof of income (pay stubs, W-2s, tax returns), proof of assets (bank statements, investment accounts), identification, and employment verification. Self-employed borrowers may need additional documentation like profit and loss statements.",
    },
    {
        question: "Can I get a mortgage if I'm self-employed?",
        answer: "Yes, self-employed borrowers can qualify for mortgages. You'll typically need to provide two years of tax returns, profit and loss statements, and demonstrate consistent income. Some lenders offer bank statement loans that use deposits to verify income instead of tax returns.",
    },
    {
        question: "What are closing costs and how much should I expect?",
        answer: "Closing costs typically range from 2-5% of the loan amount and include fees for appraisal, title insurance, origination, attorney fees, and prepaid items like property taxes and insurance. Your lender will provide a Loan Estimate detailing these costs within three days of your application.",
    },
    {
        question: "Can I lock in my interest rate?",
        answer: "Yes, most lenders allow you to lock your rate once you have an accepted offer on a property. Rate locks typically last 30-60 days. If rates drop after you lock, some lenders offer float-down options. If your closing is delayed beyond your lock period, you may need to pay to extend it.",
    },
];

function FAQAccordion({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
    return (
        <div className="border-b border-secondary">
            <button
                onClick={onToggle}
                className="flex w-full items-center justify-between py-4 text-left"
            >
                <span className="text-sm font-medium text-primary pr-4">{item.question}</span>
                <ChevronDown
                    className={cx(
                        "h-5 w-5 shrink-0 text-tertiary transition-transform duration-200",
                        isOpen && "rotate-180"
                    )}
                />
            </button>
            <div
                className={cx(
                    "grid transition-all duration-200",
                    isOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
                )}
            >
                <div className="overflow-hidden">
                    <p className="text-sm text-tertiary leading-relaxed">{item.answer}</p>
                </div>
            </div>
        </div>
    );
}

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="min-h-screen bg-secondary_alt">
            <Header />

            <main className="mx-auto max-w-3xl px-4 py-4 md:px-8 md:py-6">
                {/* Page Header */}
                <div className="mb-6 text-center">
                    <h1 className="text-xl font-semibold text-primary sm:text-2xl">
                        Frequently Asked Questions
                    </h1>
                    <p className="mt-1 text-sm text-tertiary">
                        Everything you need to know about mortgages and our platform
                    </p>
                </div>

                {/* FAQ List */}
                <div className="rounded-xl border border-secondary bg-primary p-4 shadow-sm md:p-6">
                    {faqs.map((faq, index) => (
                        <FAQAccordion
                            key={index}
                            item={faq}
                            isOpen={openIndex === index}
                            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-4 rounded-xl border border-secondary bg-primary p-4 shadow-sm text-center">
                    <p className="text-sm text-secondary">
                        Still have questions?{" "}
                        <a href="/contact" className="font-medium text-brand-primary hover:underline">
                            Contact our team
                        </a>{" "}
                        and we'll be happy to help.
                    </p>
                </div>
            </main>
        </div>
    );
}
