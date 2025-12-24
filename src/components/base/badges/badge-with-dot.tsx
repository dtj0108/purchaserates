import { type ComponentPropsWithoutRef } from "react";
import { cx } from "@/utils/cx";

type BadgeColor = "brand" | "gray" | "error" | "warning" | "success";
type BadgeType = "pill" | "modern";
type BadgeSize = "sm" | "md" | "lg";

interface BadgeWithDotProps extends ComponentPropsWithoutRef<"span"> {
    color?: BadgeColor;
    type?: BadgeType;
    size?: BadgeSize;
}

export const BadgeWithDot = ({ 
    color = "brand", 
    type = "pill", 
    size = "md", 
    className, 
    children,
    ...props 
}: BadgeWithDotProps) => {
    const colorStyles = {
        brand: "bg-brand-primary text-brand-secondary border-brand",
        gray: "bg-secondary text-tertiary border-secondary",
        error: "bg-error-primary text-error-primary border-error",
        warning: "bg-warning-primary text-warning-primary border-warning",
        success: "bg-success-primary text-success-primary border-success",
    };

    const dotColors = {
        brand: "bg-brand-600",
        gray: "bg-gray-600",
        error: "bg-error-600",
        warning: "bg-warning-600",
        success: "bg-success-600",
    };

    const sizeStyles = {
        sm: "px-2 py-0.5 text-xs gap-1",
        md: "px-2.5 py-0.5 text-sm gap-1.5",
        lg: "px-3 py-1 text-sm gap-1.5",
    };

    const dotSizes = {
        sm: "size-1.5",
        md: "size-2",
        lg: "size-2",
    };

    return (
        <span
            className={cx(
                "inline-flex items-center font-medium rounded-full",
                type === "modern" && "border",
                colorStyles[color],
                sizeStyles[size],
                className
            )}
            {...props}
        >
            <span className={cx("rounded-full", dotColors[color], dotSizes[size])} />
            {children}
        </span>
    );
};

