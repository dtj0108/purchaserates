"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/base/buttons/button";
import { PurchaseRatesLogo } from "@/components/foundations/logo/purchaserates-logo";
import { Menu01, XClose, Phone } from "@untitledui/icons";

const navLinks = [
    { href: "/rates", label: "Rates", isExternal: false },
    { href: "/calculator", label: "Calculator", isExternal: false },
    { href: "/programs", label: "Programs", isExternal: false },
    { href: "/articles", label: "Articles", isExternal: false },
    { href: "/faq", label: "FAQs", isExternal: false },
];

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="relative z-50 border-b border-secondary bg-primary">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex h-16 items-center justify-between md:h-20">
                    <Link href="/">
                        <PurchaseRatesLogo className="h-8 md:h-10" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) =>
                            link.isExternal ? (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-md font-medium text-secondary hover:text-primary transition-colors"
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-md font-medium text-secondary hover:text-primary transition-colors"
                                >
                                    {link.label}
                                </Link>
                            )
                        )}
                    </nav>

                    <div className="flex items-center gap-3">
                        <Button
                            color="secondary"
                            size="md"
                            iconLeading={Phone}
                            className="hidden sm:inline-flex"
                            href="tel:3107705539"
                        >
                            310-770-5539
                        </Button>
                        <Button size="md" href="/get-started" className="hidden md:inline-flex">
                            Get My Rate
                        </Button>

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="inline-flex items-center justify-center rounded-lg p-2 text-secondary hover:bg-secondary hover:text-primary transition-colors md:hidden"
                            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {mobileMenuOpen ? (
                                <XClose className="size-6" />
                            ) : (
                                <Menu01 className="size-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute left-0 right-0 top-full border-b border-secondary bg-primary shadow-lg md:hidden">
                    <nav className="mx-auto max-w-container px-4 py-4">
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) =>
                                link.isExternal ? (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="rounded-lg px-4 py-3 text-md font-medium text-secondary hover:bg-secondary hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                ) : (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="rounded-lg px-4 py-3 text-md font-medium text-secondary hover:bg-secondary hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                )
                            )}
                        </div>
                        <div className="mt-4 flex flex-col gap-3 border-t border-secondary pt-4">
                            <Button size="lg" href="/get-started" className="w-full">
                                Get My Rate
                            </Button>
                            <Button
                                color="secondary"
                                size="lg"
                                iconLeading={Phone}
                                href="tel:3107705539"
                                className="w-full"
                            >
                                310-770-5539
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

