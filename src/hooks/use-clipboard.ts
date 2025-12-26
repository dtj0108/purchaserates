"use client";

import { useCallback, useState } from "react";

interface UseClipboardOptions {
    /** Duration in ms before resetting copied state */
    timeout?: number;
}

interface UseClipboardReturn {
    /** Whether the text was recently copied */
    copied: boolean;
    /** Function to copy text to clipboard */
    copy: (text: string) => Promise<void>;
    /** Any error that occurred during copy */
    error: Error | null;
}

/**
 * Hook for copying text to clipboard
 * @param options - Configuration options
 * @returns Object with copied state, copy function, and error
 */
export function useClipboard(options: UseClipboardOptions = {}): UseClipboardReturn {
    const { timeout = 2000 } = options;
    const [copied, setCopied] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const copy = useCallback(
        async (text: string) => {
            try {
                await navigator.clipboard.writeText(text);
                setCopied(true);
                setError(null);

                setTimeout(() => {
                    setCopied(false);
                }, timeout);
            } catch (err) {
                setError(err instanceof Error ? err : new Error("Failed to copy to clipboard"));
                setCopied(false);
            }
        },
        [timeout]
    );

    return { copied, copy, error };
}


