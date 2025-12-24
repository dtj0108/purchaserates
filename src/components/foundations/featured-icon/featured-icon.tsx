import { type ElementType } from "react";
import { cx } from "@/utils/cx";

type FeaturedIconSize = "sm" | "md" | "lg" | "xl";
type FeaturedIconTheme = "light" | "dark";
type FeaturedIconColor = "brand" | "error" | "warning" | "success" | "gray";

interface FeaturedIconProps {
    icon: ElementType;
    size?: FeaturedIconSize;
    theme?: FeaturedIconTheme;
    color?: FeaturedIconColor;
    className?: string;
}

export const FeaturedIcon = ({ 
    icon: Icon, 
    size = "md", 
    theme = "light",
    color = "brand",
    className 
}: FeaturedIconProps) => {
    const sizeStyles = {
        sm: "size-10",
        md: "size-12",
        lg: "size-14",
        xl: "size-16",
    };

    const iconSizes = {
        sm: "size-5",
        md: "size-6",
        lg: "size-7",
        xl: "size-8",
    };

    const colorStyles = {
        brand: theme === "light" 
            ? "bg-brand-primary text-featured-icon-light-fg-brand border-utility-brand-200" 
            : "bg-brand-solid text-white",
        error: theme === "light"
            ? "bg-error-primary text-featured-icon-light-fg-error border-utility-error-200"
            : "bg-error-solid text-white",
        warning: theme === "light"
            ? "bg-warning-primary text-featured-icon-light-fg-warning border-utility-warning-200"
            : "bg-warning-solid text-white",
        success: theme === "light"
            ? "bg-success-primary text-featured-icon-light-fg-success border-utility-success-200"
            : "bg-success-solid text-white",
        gray: theme === "light"
            ? "bg-secondary text-featured-icon-light-fg-gray border-utility-gray-200"
            : "bg-secondary-solid text-white",
    };

    return (
        <div
            className={cx(
                "flex items-center justify-center rounded-full border-8",
                sizeStyles[size],
                colorStyles[color],
                className
            )}
        >
            <Icon className={iconSizes[size]} />
        </div>
    );
};

