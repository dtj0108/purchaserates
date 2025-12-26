import { type ComponentPropsWithoutRef, type ElementType } from "react";
import { cx } from "@/utils/cx";

type BadgeColor = "brand" | "gray" | "error" | "warning" | "success";
type BadgeType = "pill" | "modern";
type BadgeSize = "sm" | "md" | "lg";

interface BadgeProps extends ComponentPropsWithoutRef<"span"> {
    color?: BadgeColor;
    type?: BadgeType;
    size?: BadgeSize;
    iconLeading?: ElementType;
}

export const Badge = ({ 
    color = "brand", 
    type = "pill", 
    size = "md", 
    iconLeading: IconLeading,
    className, 
    children,
    ...props 
}: BadgeProps) => {
    const colorStyles = {
        brand: "bg-brand-primary text-brand-secondary border-brand",
        gray: "bg-secondary text-tertiary border-secondary",
        error: "bg-error-primary text-error-primary border-error",
        warning: "bg-warning-primary text-warning-primary border-warning",
        success: "bg-success-primary text-success-primary border-success",
    };

    const sizeStyles = {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-0.5 text-sm",
        lg: "px-3 py-1 text-sm",
    };

    const iconSizes = {
        sm: "size-3",
        md: "size-3.5",
        lg: "size-4",
    };

    return (
        <span
            className={cx(
                "inline-flex items-center gap-1 font-medium rounded-full",
                type === "modern" && "border",
                colorStyles[color],
                sizeStyles[size],
                className
            )}
            {...props}
        >
            {IconLeading && <IconLeading className={iconSizes[size]} />}
            {children}
        </span>
    );
};


