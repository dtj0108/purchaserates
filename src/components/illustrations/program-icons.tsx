// Illustrated icons for mortgage programs and how it works steps
// Style inspired by modern fintech illustrations with soft colors

// === HOW IT WORKS ICONS ===

export function ScenarioIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* Background circle */}
            <circle cx="40" cy="40" r="38" fill="#DBEAFE" />
            {/* Clipboard */}
            <rect x="22" y="18" width="36" height="48" rx="4" fill="#3B82F6" />
            <rect x="26" y="22" width="28" height="40" rx="2" fill="white" />
            {/* Clipboard clip */}
            <rect x="32" y="14" width="16" height="10" rx="2" fill="#1E40AF" />
            <rect x="36" y="16" width="8" height="6" rx="1" fill="#93C5FD" />
            {/* Form lines */}
            <rect x="30" y="30" width="12" height="3" rx="1" fill="#BFDBFE" />
            <rect x="30" y="38" width="20" height="3" rx="1" fill="#BFDBFE" />
            <rect x="30" y="46" width="16" height="3" rx="1" fill="#BFDBFE" />
            {/* Dollar sign */}
            <circle cx="56" cy="54" r="10" fill="#FDE047" />
            <text x="52" y="59" fontSize="12" fontWeight="bold" fill="#854D0E">$</text>
            {/* Pencil */}
            <rect x="44" y="28" width="4" height="16" rx="1" fill="#F59E0B" transform="rotate(15 46 36)" />
            <path d="M52 24L56 28L54 30L50 26L52 24Z" fill="#FBBF24" />
        </svg>
    );
}

export function OptionsIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* Background circle */}
            <circle cx="40" cy="40" r="38" fill="#DCFCE7" />
            {/* Card 1 - left */}
            <rect x="10" y="24" width="24" height="32" rx="3" fill="white" stroke="#22C55E" strokeWidth="2" />
            <rect x="14" y="30" width="10" height="10" rx="2" fill="#BBF7D0" />
            <rect x="14" y="44" width="16" height="2" rx="1" fill="#86EFAC" />
            <rect x="14" y="50" width="12" height="2" rx="1" fill="#86EFAC" />
            {/* Card 2 - center (highlighted) */}
            <rect x="28" y="18" width="24" height="36" rx="3" fill="#22C55E" />
            <rect x="32" y="24" width="10" height="10" rx="2" fill="#166534" />
            <rect x="32" y="38" width="16" height="2" rx="1" fill="#BBF7D0" />
            <rect x="32" y="44" width="12" height="2" rx="1" fill="#BBF7D0" />
            {/* Star on center card */}
            <path d="M44 28L45 31H48L45.5 33L46.5 36L44 34L41.5 36L42.5 33L40 31H43L44 28Z" fill="#FDE047" />
            {/* Card 3 - right */}
            <rect x="46" y="24" width="24" height="32" rx="3" fill="white" stroke="#22C55E" strokeWidth="2" />
            <rect x="50" y="30" width="10" height="10" rx="2" fill="#BBF7D0" />
            <rect x="50" y="44" width="16" height="2" rx="1" fill="#86EFAC" />
            <rect x="50" y="50" width="12" height="2" rx="1" fill="#86EFAC" />
            {/* Checkmark badge */}
            <circle cx="40" cy="62" r="8" fill="#16A34A" />
            <path d="M36 62L39 65L45 59" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export function PreApprovedIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* Background circle */}
            <circle cx="40" cy="40" r="38" fill="#FEF3C7" />
            {/* Document */}
            <rect x="20" y="16" width="32" height="44" rx="3" fill="white" stroke="#F59E0B" strokeWidth="2" />
            {/* Document lines */}
            <rect x="26" y="24" width="20" height="3" rx="1" fill="#FDE68A" />
            <rect x="26" y="32" width="16" height="3" rx="1" fill="#FDE68A" />
            <rect x="26" y="40" width="18" height="3" rx="1" fill="#FDE68A" />
            {/* Signature line */}
            <path d="M26 52C28 50 30 54 32 52C34 50 36 54 38 52" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
            {/* Big checkmark circle */}
            <circle cx="54" cy="50" r="16" fill="#22C55E" />
            <path d="M46 50L52 56L64 44" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            {/* Upload arrow */}
            <path d="M58 22L58 14M58 14L54 18M58 14L62 18" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export function ConventionalIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* Background circle */}
            <circle cx="40" cy="40" r="38" fill="#E0F2FE" />
            {/* House base */}
            <rect x="22" y="38" width="36" height="26" rx="2" fill="#1E40AF" />
            {/* Roof */}
            <path d="M18 40L40 22L62 40H18Z" fill="#3B82F6" />
            {/* Door */}
            <rect x="35" y="48" width="10" height="16" rx="1" fill="#BFDBFE" />
            {/* Window left */}
            <rect x="26" y="44" width="8" height="8" rx="1" fill="#BFDBFE" />
            {/* Window right */}
            <rect x="46" y="44" width="8" height="8" rx="1" fill="#BFDBFE" />
            {/* Chimney */}
            <rect x="48" y="26" width="6" height="12" fill="#1E3A8A" />
            {/* Grass */}
            <ellipse cx="40" cy="66" rx="24" ry="4" fill="#86EFAC" />
        </svg>
    );
}

export function FHAIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* Background circle */}
            <circle cx="40" cy="40" r="38" fill="#DCFCE7" />
            {/* Building base */}
            <rect x="20" y="30" width="40" height="34" rx="2" fill="#166534" />
            {/* Pillars */}
            <rect x="24" y="36" width="6" height="28" fill="#22C55E" />
            <rect x="34" y="36" width="6" height="28" fill="#22C55E" />
            <rect x="44" y="36" width="6" height="28" fill="#22C55E" />
            <rect x="54" y="36" width="6" height="28" fill="#22C55E" />
            {/* Roof/Pediment */}
            <path d="M16 32L40 18L64 32H16Z" fill="#15803D" />
            {/* Star */}
            <path d="M40 22L41.5 26H46L42.5 28.5L44 33L40 30L36 33L37.5 28.5L34 26H38.5L40 22Z" fill="#FDE047" />
        </svg>
    );
}

export function VAIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* Background circle */}
            <circle cx="40" cy="40" r="38" fill="#DBEAFE" />
            {/* Flag pole */}
            <rect x="24" y="16" width="3" height="50" fill="#6B7280" />
            {/* Flag */}
            <rect x="27" y="18" width="32" height="20" fill="#DC2626" />
            {/* White stripes */}
            <rect x="27" y="22" width="32" height="3" fill="white" />
            <rect x="27" y="28" width="32" height="3" fill="white" />
            <rect x="27" y="34" width="32" height="3" fill="white" />
            {/* Blue corner */}
            <rect x="27" y="18" width="14" height="12" fill="#1E40AF" />
            {/* Stars */}
            <circle cx="31" cy="21" r="1.5" fill="white" />
            <circle cx="37" cy="21" r="1.5" fill="white" />
            <circle cx="34" cy="25" r="1.5" fill="white" />
            <circle cx="31" cy="27" r="1.5" fill="white" />
            <circle cx="37" cy="27" r="1.5" fill="white" />
            {/* Medal */}
            <circle cx="50" cy="54" r="10" fill="#FDE047" />
            <circle cx="50" cy="54" r="7" fill="#FBBF24" />
            <path d="M50 48L51.5 52H56L52.5 54.5L54 59L50 56L46 59L47.5 54.5L44 52H48.5L50 48Z" fill="#FDE047" />
        </svg>
    );
}

export function USDAIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* Background circle */}
            <circle cx="40" cy="40" r="38" fill="#FEF3C7" />
            {/* Sun */}
            <circle cx="58" cy="22" r="8" fill="#FBBF24" />
            {/* Barn */}
            <rect x="18" y="40" width="28" height="24" fill="#DC2626" />
            {/* Barn roof */}
            <path d="M14 42L32 26L50 42H14Z" fill="#B91C1C" />
            {/* Barn door */}
            <rect x="26" y="48" width="12" height="16" rx="6" fill="#7F1D1D" />
            {/* Silo */}
            <rect x="50" y="34" width="12" height="30" fill="#9CA3AF" />
            <ellipse cx="56" cy="34" rx="6" ry="3" fill="#6B7280" />
            {/* Fields */}
            <path d="M10 64C10 64 20 60 40 60C60 60 70 64 70 64V68H10V64Z" fill="#86EFAC" />
            {/* Wheat */}
            <ellipse cx="24" cy="58" rx="2" ry="6" fill="#FDE047" />
            <ellipse cx="30" cy="56" rx="2" ry="7" fill="#FDE047" />
            <ellipse cx="36" cy="58" rx="2" ry="6" fill="#FDE047" />
        </svg>
    );
}

export function JumboIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* Background circle */}
            <circle cx="40" cy="40" r="38" fill="#F3E8FF" />
            {/* Mansion base */}
            <rect x="12" y="42" width="56" height="22" rx="2" fill="#7C3AED" />
            {/* Center section */}
            <rect x="28" y="32" width="24" height="32" fill="#8B5CF6" />
            {/* Roof center */}
            <path d="M24 34L40 20L56 34H24Z" fill="#6D28D9" />
            {/* Roof sides */}
            <rect x="12" y="38" width="20" height="6" fill="#6D28D9" />
            <rect x="48" y="38" width="20" height="6" fill="#6D28D9" />
            {/* Windows row 1 */}
            <rect x="16" y="48" width="6" height="8" rx="1" fill="#DDD6FE" />
            <rect x="26" y="48" width="6" height="8" rx="1" fill="#DDD6FE" />
            <rect x="48" y="48" width="6" height="8" rx="1" fill="#DDD6FE" />
            <rect x="58" y="48" width="6" height="8" rx="1" fill="#DDD6FE" />
            {/* Grand door */}
            <rect x="35" y="48" width="10" height="16" rx="5" fill="#DDD6FE" />
            {/* Columns */}
            <rect x="32" y="42" width="3" height="22" fill="#C4B5FD" />
            <rect x="45" y="42" width="3" height="22" fill="#C4B5FD" />
            {/* Dollar sign */}
            <circle cx="60" cy="24" r="10" fill="#FDE047" />
            <text x="56" y="29" fontSize="14" fontWeight="bold" fill="#854D0E">$</text>
        </svg>
    );
}

export function FirstTimeBuyerIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* Background circle */}
            <circle cx="40" cy="40" r="38" fill="#FCE7F3" />
            {/* House */}
            <rect x="28" y="40" width="24" height="18" rx="2" fill="#BE185D" />
            <path d="M24 42L40 28L56 42H24Z" fill="#EC4899" />
            <rect x="36" y="46" width="8" height="12" rx="1" fill="#FBCFE8" />
            {/* Person 1 */}
            <circle cx="22" cy="52" r="6" fill="#FCD34D" />
            <ellipse cx="22" cy="66" rx="6" ry="8" fill="#3B82F6" />
            {/* Person 2 */}
            <circle cx="58" cy="52" r="6" fill="#FCD34D" />
            <ellipse cx="58" cy="66" rx="6" ry="8" fill="#EC4899" />
            {/* Heart */}
            <path d="M40 18C42 14 48 14 48 20C48 26 40 32 40 32C40 32 32 26 32 20C32 14 38 14 40 18Z" fill="#F43F5E" />
            {/* Key */}
            <circle cx="62" cy="34" r="4" fill="#FDE047" stroke="#FBBF24" strokeWidth="2" />
            <rect x="62" y="36" width="2" height="10" fill="#FBBF24" />
            <rect x="62" y="42" width="5" height="2" fill="#FBBF24" />
        </svg>
    );
}

export function RefinanceIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* Background circle */}
            <circle cx="40" cy="40" r="38" fill="#CFFAFE" />
            {/* House */}
            <rect x="26" y="38" width="28" height="20" rx="2" fill="#0891B2" />
            <path d="M22 40L40 24L58 40H22Z" fill="#06B6D4" />
            <rect x="36" y="44" width="8" height="14" rx="1" fill="#A5F3FC" />
            {/* Circular arrows */}
            <path d="M18 30C18 22 26 16 36 16" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />
            <path d="M36 16L32 12M36 16L32 20" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
            <path d="M62 50C62 58 54 64 44 64" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />
            <path d="M44 64L48 68M44 64L48 60" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
            {/* Percentage */}
            <circle cx="60" cy="24" r="10" fill="#FDE047" />
            <text x="54" y="28" fontSize="10" fontWeight="bold" fill="#854D0E">%</text>
        </svg>
    );
}

export function ARMIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* Background circle */}
            <circle cx="40" cy="40" r="38" fill="#FEE2E2" />
            {/* Chart background */}
            <rect x="14" y="20" width="52" height="40" rx="4" fill="white" />
            {/* Grid lines */}
            <line x1="14" y1="30" x2="66" y2="30" stroke="#E5E7EB" strokeWidth="1" />
            <line x1="14" y1="40" x2="66" y2="40" stroke="#E5E7EB" strokeWidth="1" />
            <line x1="14" y1="50" x2="66" y2="50" stroke="#E5E7EB" strokeWidth="1" />
            {/* Chart line - starts flat then goes up */}
            <path d="M18 45L30 45L36 45L42 40L50 32L58 38L62 28" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            {/* Dots on line */}
            <circle cx="30" cy="45" r="3" fill="#EF4444" />
            <circle cx="42" cy="40" r="3" fill="#EF4444" />
            <circle cx="50" cy="32" r="3" fill="#EF4444" />
            <circle cx="62" cy="28" r="3" fill="#EF4444" />
            {/* Arrow pointing up */}
            <path d="M56 18L62 12L68 18" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="62" y1="12" x2="62" y2="24" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" />
            {/* House small */}
            <rect x="18" y="52" width="16" height="10" fill="#3B82F6" />
            <path d="M16 54L26 46L36 54H16Z" fill="#60A5FA" />
        </svg>
    );
}
