import { type ComponentPropsWithoutRef } from "react";

export const PurchaseRatesLogo = (props: ComponentPropsWithoutRef<"svg">) => {
    return (
        <svg viewBox="0 0 195 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            {/* House illustration */}
            <g>
                {/* House base */}
                <rect x="6" y="18" width="20" height="16" rx="2" fill="#FAFAFA" stroke="#E5E7EB" strokeWidth="1" />

                {/* Roof */}
                <path d="M3 19 L16 8 L29 19 Z" fill="#3B82F6" />
                <path d="M5 18 L16 9 L27 18 Z" fill="#60A5FA" />

                {/* Door */}
                <rect x="13" y="24" width="6" height="10" rx="1" fill="#1E40AF" />
                <circle cx="17" cy="29" r="0.8" fill="#FDE047" />

                {/* Windows */}
                <rect x="8" y="21" width="4" height="4" rx="0.5" fill="#BFDBFE" stroke="#93C5FD" strokeWidth="0.5" />
                <rect x="20" y="21" width="4" height="4" rx="0.5" fill="#BFDBFE" stroke="#93C5FD" strokeWidth="0.5" />

                {/* Grass */}
                <ellipse cx="16" cy="35" rx="14" ry="3" fill="#22C55E" />

                {/* Dollar badge */}
                <circle cx="26" cy="11" r="5" fill="#FDE047" />
                <circle cx="26" cy="11" r="3.5" fill="#FBBF24" />
                <text x="26" y="14" fontSize="7" fontWeight="bold" fill="#854D0E" textAnchor="middle">$</text>
            </g>

            {/* Text - tighter spacing for mobile */}
            <text x="38" y="26" fontSize="16" fontWeight="700" fill="#16A34A" fontFamily="system-ui, -apple-system, sans-serif">
                Purchase
            </text>
            <text x="111" y="26" fontSize="16" fontWeight="700" fill="#3B82F6" fontFamily="system-ui, -apple-system, sans-serif">
                Rates
            </text>
            <text x="156" y="26" fontSize="16" fontWeight="400" fill="currentColor" fontFamily="system-ui, -apple-system, sans-serif" opacity="0.6">
                .com
            </text>
        </svg>
    );
};
