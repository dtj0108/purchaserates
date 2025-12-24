"use client";

import { Button } from "@/components/base/buttons/button";
import { PurchaseRatesLogo } from "@/components/foundations/logo/purchaserates-logo";
import { Phone } from "@untitledui/icons";

export const Header = () => {
    return (
        <header className="relative z-10 border-b border-secondary bg-primary">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex h-16 items-center justify-between md:h-20">
                    <a href="/">
                        <PurchaseRatesLogo className="h-8 md:h-10" />
                    </a>
                    
                    <nav className="hidden items-center gap-8 md:flex">
                        <a href="/" className="text-md font-medium text-secondary hover:text-primary transition-colors">
                            Home
                        </a>
                        <a href="#programs" className="text-md font-medium text-secondary hover:text-primary transition-colors">
                            Programs
                        </a>
                        <a href="/about" className="text-md font-medium text-secondary hover:text-primary transition-colors">
                            About
                        </a>
                        <a href="#reviews" className="text-md font-medium text-secondary hover:text-primary transition-colors">
                            Reviews
                        </a>
                        <a href="#faqs" className="text-md font-medium text-secondary hover:text-primary transition-colors">
                            FAQs
                        </a>
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
                        <Button size="md" href="/get-started">
                            Get My Rate
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

