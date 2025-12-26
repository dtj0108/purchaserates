"use client";

import { TrendDown01 } from "@untitledui/icons";

interface HouseIllustrationProps {
    size?: "sm" | "lg";
}

export const HouseIllustration = ({ size = "lg" }: HouseIllustrationProps) => {
    const isSmall = size === "sm";

    return (
        <div className={isSmall ? "relative w-20 shrink-0" : "relative w-full max-w-lg"}>
            {/* Main SVG illustration */}
            <svg
                viewBox="0 0 400 350"
                className="w-full h-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Sky gradient background */}
                <defs>
                    <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#E0F2FE" />
                        <stop offset="100%" stopColor="#F0F9FF" />
                    </linearGradient>
                    <linearGradient id="grassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#86EFAC" />
                        <stop offset="100%" stopColor="#22C55E" />
                    </linearGradient>
                </defs>

                {/* Background */}
                <rect width="400" height="350" fill="url(#skyGradient)" rx="16" />

                {/* Clouds */}
                <ellipse cx="80" cy="60" rx="35" ry="18" fill="white" opacity="0.8" />
                <ellipse cx="60" cy="55" rx="25" ry="14" fill="white" opacity="0.8" />
                <ellipse cx="320" cy="45" rx="40" ry="20" fill="white" opacity="0.8" />
                <ellipse cx="345" cy="50" rx="25" ry="12" fill="white" opacity="0.8" />

                {/* Rolling hills background */}
                <ellipse cx="100" cy="320" rx="150" ry="60" fill="#BBF7D0" />
                <ellipse cx="320" cy="330" rx="140" ry="50" fill="#86EFAC" />

                {/* Main grass ground */}
                <ellipse cx="200" cy="340" rx="220" ry="70" fill="url(#grassGradient)" />

                {/* Back trees */}
                <ellipse cx="50" cy="220" rx="35" ry="55" fill="#16A34A" />
                <rect x="45" y="265" width="10" height="35" fill="#166534" />
                <ellipse cx="70" cy="235" rx="25" ry="40" fill="#22C55E" />

                <ellipse cx="360" cy="200" rx="40" ry="60" fill="#16A34A" />
                <rect x="355" y="250" width="10" height="40" fill="#166534" />
                <ellipse cx="340" cy="220" rx="30" ry="45" fill="#22C55E" />

                {/* House shadow */}
                <ellipse cx="200" cy="295" rx="100" ry="15" fill="#166534" opacity="0.2" />

                {/* House base */}
                <rect x="110" y="160" width="180" height="130" rx="4" fill="#FAFAFA" />
                <rect x="110" y="160" width="180" height="130" rx="4" stroke="#E5E7EB" strokeWidth="2" fill="none" />

                {/* Roof */}
                <path d="M90 165 L200 75 L310 165 Z" fill="#1E40AF" />
                <path d="M100 160 L200 80 L300 160 Z" fill="#3B82F6" />

                {/* Roof shingles detail */}
                <path d="M120 145 L200 95 L280 145" stroke="#1E3A8A" strokeWidth="2" fill="none" opacity="0.3" />
                <path d="M140 130 L200 100 L260 130" stroke="#1E3A8A" strokeWidth="2" fill="none" opacity="0.2" />

                {/* Chimney */}
                <rect x="245" y="90" width="28" height="55" fill="#6B7280" />
                <rect x="242" y="85" width="34" height="10" rx="2" fill="#4B5563" />
                {/* Smoke */}
                <ellipse cx="259" cy="70" rx="8" ry="10" fill="#E5E7EB" opacity="0.6" />
                <ellipse cx="265" cy="55" rx="6" ry="8" fill="#E5E7EB" opacity="0.4" />

                {/* Door */}
                <rect x="175" y="210" width="50" height="80" rx="4" fill="#1E40AF" />
                <rect x="180" y="215" width="40" height="70" rx="3" fill="#3B82F6" />
                {/* Door window */}
                <rect x="188" y="223" width="24" height="20" rx="10" fill="#BFDBFE" />
                {/* Door handle */}
                <circle cx="210" cy="260" r="4" fill="#FDE047" />

                {/* Left window */}
                <rect x="125" y="185" width="40" height="45" rx="3" fill="#BFDBFE" />
                <rect x="125" y="185" width="40" height="45" rx="3" stroke="#93C5FD" strokeWidth="2" fill="none" />
                <line x1="145" y1="185" x2="145" y2="230" stroke="#93C5FD" strokeWidth="2" />
                <line x1="125" y1="207" x2="165" y2="207" stroke="#93C5FD" strokeWidth="2" />
                {/* Window shutters */}
                <rect x="117" y="183" width="8" height="49" rx="1" fill="#1E40AF" />
                <rect x="165" y="183" width="8" height="49" rx="1" fill="#1E40AF" />

                {/* Right window */}
                <rect x="235" y="185" width="40" height="45" rx="3" fill="#BFDBFE" />
                <rect x="235" y="185" width="40" height="45" rx="3" stroke="#93C5FD" strokeWidth="2" fill="none" />
                <line x1="255" y1="185" x2="255" y2="230" stroke="#93C5FD" strokeWidth="2" />
                <line x1="235" y1="207" x2="275" y2="207" stroke="#93C5FD" strokeWidth="2" />
                {/* Window shutters */}
                <rect x="227" y="183" width="8" height="49" rx="1" fill="#1E40AF" />
                <rect x="275" y="183" width="8" height="49" rx="1" fill="#1E40AF" />

                {/* Front bushes */}
                <ellipse cx="130" cy="290" rx="25" ry="18" fill="#22C55E" />
                <ellipse cx="145" cy="288" rx="20" ry="15" fill="#4ADE80" />
                <ellipse cx="270" cy="290" rx="25" ry="18" fill="#22C55E" />
                <ellipse cx="255" cy="288" rx="20" ry="15" fill="#4ADE80" />

                {/* Flowers */}
                <circle cx="120" cy="285" r="4" fill="#F472B6" />
                <circle cx="135" cy="282" r="3" fill="#FBBF24" />
                <circle cx="265" cy="285" r="4" fill="#F472B6" />
                <circle cx="280" cy="282" r="3" fill="#FBBF24" />

                {/* Pathway */}
                <path d="M175 290 Q180 305 175 320 L225 320 Q220 305 225 290 Z" fill="#D1D5DB" />
                <path d="M180 295 Q183 305 180 315 L220 315 Q217 305 220 295 Z" fill="#E5E7EB" />

                {/* Chart trending down (good for rates) */}
                <rect x="300" y="120" width="85" height="65" rx="8" fill="white" />
                <rect x="300" y="120" width="85" height="65" rx="8" stroke="#E5E7EB" strokeWidth="2" fill="none" />
                {/* Chart bars */}
                <rect x="312" y="155" width="12" height="20" rx="2" fill="#BBF7D0" />
                <rect x="330" y="145" width="12" height="30" rx="2" fill="#86EFAC" />
                <rect x="348" y="135" width="12" height="40" rx="2" fill="#22C55E" />
                <rect x="366" y="150" width="12" height="25" rx="2" fill="#16A34A" />
                {/* Trend line */}
                <path d="M315 160 L340 145 L358 140 L375 155" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" fill="none" />

                {/* Dollar coin */}
                <circle cx="70" cy="140" r="30" fill="#FDE047" />
                <circle cx="70" cy="140" r="24" fill="#FBBF24" />
                <circle cx="70" cy="140" r="18" fill="#FDE047" />
                <text x="70" y="148" fontSize="24" fontWeight="bold" fill="#854D0E" textAnchor="middle">$</text>

                {/* Percent badge */}
                <circle cx="340" cy="70" r="22" fill="#22C55E" />
                <text x="340" y="78" fontSize="18" fontWeight="bold" fill="white" textAnchor="middle">%</text>
            </svg>

            {/* Rates trending badge - positioned top right (hidden on small) */}
            {!isSmall && (
                <div className="absolute top-4 right-4 rounded-xl bg-white px-4 py-3 shadow-lg ring-1 ring-gray-100">
                    <div className="flex items-center gap-1 mb-1">
                        <div className="flex gap-0.5">
                            <div className="size-1.5 rounded-full bg-success-500" />
                            <div className="size-1.5 rounded-full bg-success-400" />
                            <div className="size-1.5 rounded-full bg-success-300" />
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-tertiary">Rates Trending Down</span>
                        <TrendDown01 className="size-4 text-success-500" />
                    </div>
                    <p className="text-2xl font-bold text-brand-600 mt-1">6.35%</p>
                </div>
            )}
        </div>
    );
};
