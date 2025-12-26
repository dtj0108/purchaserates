"use client";

import { TrendUp02 } from "@untitledui/icons";
import { cx } from "@/utils/cx";

interface HouseIllustrationProps {
    size?: "sm" | "lg";
}

export const HouseIllustration = ({ size = "lg" }: HouseIllustrationProps) => {
    const isSmall = size === "sm";

    return (
        <div className={cx("relative", isSmall ? "w-20 shrink-0" : "w-full max-w-lg")}>
            {/* Main SVG illustration */}
            <svg
                viewBox="0 0 400 320"
                className="w-full h-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Background hills/landscape */}
                <ellipse cx="200" cy="320" rx="250" ry="80" className="fill-success-100" />
                <ellipse cx="320" cy="300" rx="120" ry="50" className="fill-success-200" />
                <ellipse cx="80" cy="310" rx="100" ry="40" className="fill-success-50" />

                {/* House base/walls */}
                <rect x="120" y="140" width="160" height="130" rx="4" className="fill-white stroke-gray-200" strokeWidth="2" />

                {/* Roof */}
                <path d="M100 150 L200 70 L300 150 L100 150" className="fill-brand-600" />
                <path d="M110 145 L200 75 L290 145" className="stroke-brand-700" strokeWidth="3" fill="none" />

                {/* Chimney */}
                <rect x="240" y="85" width="25" height="45" className="fill-brand-500" />
                <rect x="237" y="80" width="31" height="8" rx="2" className="fill-brand-600" />

                {/* Door */}
                <rect x="175" y="195" width="50" height="75" rx="4" className="fill-brand-700" />
                <circle cx="215" cy="235" r="4" className="fill-brand-400" />

                {/* Windows */}
                <rect x="135" y="165" width="30" height="35" rx="2" className="fill-brand-100 stroke-brand-300" strokeWidth="2" />
                <line x1="150" y1="165" x2="150" y2="200" className="stroke-brand-300" strokeWidth="2" />
                <line x1="135" y1="182" x2="165" y2="182" className="stroke-brand-300" strokeWidth="2" />

                <rect x="235" y="165" width="30" height="35" rx="2" className="fill-brand-100 stroke-brand-300" strokeWidth="2" />
                <line x1="250" y1="165" x2="250" y2="200" className="stroke-brand-300" strokeWidth="2" />
                <line x1="235" y1="182" x2="265" y2="182" className="stroke-brand-300" strokeWidth="2" />

                {/* Trees */}
                <ellipse cx="60" cy="220" rx="30" ry="40" className="fill-success-400" />
                <rect x="55" y="250" width="10" height="30" className="fill-success-700" />

                <ellipse cx="350" cy="200" rx="35" ry="50" className="fill-success-500" />
                <rect x="345" y="240" width="10" height="40" className="fill-success-800" />

                {/* Small bush */}
                <ellipse cx="310" cy="260" rx="20" ry="15" className="fill-success-400" />

                {/* Trend arrow going up */}
                <path
                    d="M50 250 Q100 220 150 200 T250 120 T320 60"
                    className="stroke-success-500"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                />
                <polygon
                    points="310,70 330,50 335,75"
                    className="fill-success-500"
                />

                {/* Dollar sign circle */}
                <circle cx="200" cy="120" r="25" className="fill-success-500" />
                <text x="200" y="128" textAnchor="middle" className="fill-white text-xl font-bold">$</text>
            </svg>

            {/* Rates trending badge - positioned top right (hidden on small) */}
            {!isSmall && (
            <div className="absolute top-2 right-0 rounded-lg bg-white px-4 py-3 shadow-lg ring-1 ring-gray-200">
                <div className="flex items-center gap-1 mb-1">
                    <div className="flex gap-0.5">
                        <div className="size-2 rounded-full bg-success-500" />
                        <div className="size-2 rounded-full bg-success-400" />
                        <div className="size-2 rounded-full bg-success-300" />
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-tertiary">Rates Trending Down</span>
                    <TrendUp02 className="size-4 text-success-500 rotate-180" />
                </div>
                <p className="text-2xl font-bold text-brand-600 mt-1">6.35%</p>
            </div>
            )}
        </div>
    );
};
