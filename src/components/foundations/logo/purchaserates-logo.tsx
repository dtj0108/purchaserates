import { type ComponentPropsWithoutRef } from "react";

export const PurchaseRatesLogo = (props: ComponentPropsWithoutRef<"svg">) => {
    return (
        <svg viewBox="0 0 220 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            {/* House illustration */}
            <g>
                {/* House base */}
                <rect x="8" y="18" width="24" height="18" rx="2" fill="#FAFAFA" stroke="#E5E7EB" strokeWidth="1" />

                {/* Roof */}
                <path d="M5 20 L20 8 L35 20 Z" fill="#3B82F6" />
                <path d="M7 19 L20 9 L33 19 Z" fill="#60A5FA" />

                {/* Door */}
                <rect x="17" y="26" width="6" height="10" rx="1" fill="#1E40AF" />
                <circle cx="21.5" cy="31" r="0.8" fill="#FDE047" />

                {/* Window */}
                <rect x="10" y="22" width="5" height="5" rx="0.5" fill="#BFDBFE" stroke="#93C5FD" strokeWidth="0.5" />
                <line x1="12.5" y1="22" x2="12.5" y2="27" stroke="#93C5FD" strokeWidth="0.5" />
                <line x1="10" y1="24.5" x2="15" y2="24.5" stroke="#93C5FD" strokeWidth="0.5" />

                <rect x="25" y="22" width="5" height="5" rx="0.5" fill="#BFDBFE" stroke="#93C5FD" strokeWidth="0.5" />
                <line x1="27.5" y1="22" x2="27.5" y2="27" stroke="#93C5FD" strokeWidth="0.5" />
                <line x1="25" y1="24.5" x2="30" y2="24.5" stroke="#93C5FD" strokeWidth="0.5" />

                {/* Chimney */}
                <rect x="26" y="10" width="4" height="8" fill="#6B7280" />

                {/* Grass */}
                <ellipse cx="20" cy="37" rx="18" ry="4" fill="#22C55E" />
                <ellipse cx="20" cy="36.5" rx="16" ry="3" fill="#4ADE80" />

                {/* Dollar badge */}
                <circle cx="32" cy="12" r="6" fill="#FDE047" />
                <circle cx="32" cy="12" r="4.5" fill="#FBBF24" />
                <text x="32" y="15" fontSize="8" fontWeight="bold" fill="#854D0E" textAnchor="middle">$</text>

                {/* Small trend arrow */}
                <path d="M6 14 L6 10 L10 10" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </g>

            {/* Text */}
            <text x="48" y="27" fontSize="17" fontWeight="700" fill="currentColor" fontFamily="system-ui, -apple-system, sans-serif">
                PurchaseRates
            </text>
            <text x="167" y="27" fontSize="17" fontWeight="400" fill="currentColor" fontFamily="system-ui, -apple-system, sans-serif" opacity="0.7">
                .com
            </text>
        </svg>
    );
};
