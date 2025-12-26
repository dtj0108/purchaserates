"use client";

import { useEffect, useState } from "react";

const breakpoints = {
    xxs: 320,
    xs: 600,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
} as const;

type Breakpoint = keyof typeof breakpoints;

/**
 * Hook to check if the current viewport matches a breakpoint
 * @param breakpoint - The breakpoint to check against
 * @returns boolean indicating if viewport is at or above the breakpoint
 */
export function useBreakpoint(breakpoint: Breakpoint): boolean {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const query = window.matchMedia(`(min-width: ${breakpoints[breakpoint]}px)`);
        
        const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
            setMatches(e.matches);
        };

        // Set initial value
        handleChange(query);

        // Listen for changes
        query.addEventListener("change", handleChange);

        return () => {
            query.removeEventListener("change", handleChange);
        };
    }, [breakpoint]);

    return matches;
}

/**
 * Hook to get the current breakpoint
 * @returns The current breakpoint name
 */
export function useCurrentBreakpoint(): Breakpoint {
    const [current, setCurrent] = useState<Breakpoint>("xxs");

    useEffect(() => {
        const checkBreakpoint = () => {
            const width = window.innerWidth;
            const entries = Object.entries(breakpoints).reverse() as [Breakpoint, number][];
            
            for (const [name, minWidth] of entries) {
                if (width >= minWidth) {
                    setCurrent(name);
                    return;
                }
            }
            setCurrent("xxs");
        };

        checkBreakpoint();
        window.addEventListener("resize", checkBreakpoint);

        return () => {
            window.removeEventListener("resize", checkBreakpoint);
        };
    }, []);

    return current;
}


