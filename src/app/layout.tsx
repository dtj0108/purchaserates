import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { RouteProvider } from "@/providers/route-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import "@/styles/globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "PurchaseRates.com - Find the Best Mortgage Rates",
    description: "Compare real purchase mortgage options and get matched with licensed loan experts. No spam, no pressure. Same-day pre-approval available.",
    metadataBase: new URL('https://purchaserates.com'),
    openGraph: {
        title: "PurchaseRates.com - Find the Best Mortgage Rates",
        description: "Compare real purchase mortgage options and get matched with licensed loan experts. No spam, no pressure.",
        url: "https://purchaserates.com",
        siteName: "PurchaseRates.com",
        images: [
            {
                url: '/opengraph-image',
                width: 1200,
                height: 630,
                alt: 'PurchaseRates.com - Find the Best Mortgage Rates',
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "PurchaseRates.com - Find the Best Mortgage Rates",
        description: "Compare real purchase mortgage options and get matched with licensed loan experts.",
        images: ['/opengraph-image'],
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    colorScheme: "light",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
            <body className="bg-primary antialiased">
                <RouteProvider>
                    <ThemeProvider>
                        {children}
                    </ThemeProvider>
                </RouteProvider>
            </body>
        </html>
    );
}

