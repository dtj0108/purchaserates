import { type ComponentPropsWithoutRef } from "react";

export const PurchaseRatesLogo = (props: ComponentPropsWithoutRef<"svg">) => {
    return (
        <svg viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            {/* House icon */}
            <path
                d="M20 8L8 17V32C8 32.5304 8.21071 33.0391 8.58579 33.4142C8.96086 33.7893 9.46957 34 10 34H16V26C16 25.4696 16.2107 24.9609 16.5858 24.5858C16.9609 24.2107 17.4696 24 18 24H22C22.5304 24 23.0391 24.2107 23.4142 24.5858C23.7893 24.9609 24 25.4696 24 26V34H30C30.5304 34 31.0391 33.7893 31.4142 33.4142C31.7893 33.0391 32 32.5304 32 32V17L20 8Z"
                fill="#22C55E"
            />
            <path
                d="M20 5L4 17L6 19L20 9L34 19L36 17L20 5Z"
                fill="#16A34A"
            />
            {/* Dollar sign */}
            <circle cx="26" cy="16" r="6" fill="#FCD34D" />
            <text x="26" y="20" fontSize="10" fontWeight="bold" fill="#059669" textAnchor="middle">$</text>
            
            {/* Text */}
            <text x="45" y="26" fontSize="16" fontWeight="bold" fill="currentColor" fontFamily="system-ui, -apple-system, sans-serif">
                PurchaseRates.com
            </text>
        </svg>
    );
};


