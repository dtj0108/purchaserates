"use client";

import { forwardRef, type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";
import { Button as AriaButton, Link as AriaLink } from "react-aria-components";
import { cx } from "@/utils/cx";

type ButtonColor = "primary" | "secondary" | "tertiary" | "link-color" | "link-gray";
type ButtonSize = "sm" | "md" | "lg" | "xl" | "2xl";

interface ButtonProps extends Omit<ComponentPropsWithoutRef<typeof AriaButton>, "className"> {
    color?: ButtonColor;
    size?: ButtonSize;
    iconLeading?: ElementType;
    iconTrailing?: ElementType | ReactNode;
    className?: string;
    href?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ color = "primary", size = "md", iconLeading: IconLeading, iconTrailing, className, children, href, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
        
        const colorStyles = {
            primary: "bg-brand-solid text-white shadow-xs hover:bg-brand-solid_hover focus-visible:outline-brand",
            secondary: "bg-primary border border-secondary text-secondary shadow-xs hover:bg-secondary_hover focus-visible:outline-brand",
            tertiary: "text-secondary hover:bg-primary_hover focus-visible:outline-brand",
            "link-color": "text-brand-secondary hover:text-brand-secondary_hover focus-visible:outline-brand",
            "link-gray": "text-tertiary hover:text-secondary focus-visible:outline-brand",
        };

        const sizeStyles = {
            sm: "px-3 py-2 text-sm",
            md: "px-3.5 py-2.5 text-sm",
            lg: "px-4 py-2.5 text-md",
            xl: "px-[18px] py-3 text-md",
            "2xl": "px-5 py-4 text-lg",
        };

        const iconSizes = {
            sm: "size-4",
            md: "size-5",
            lg: "size-5",
            xl: "size-5",
            "2xl": "size-6",
        };

        const classes = cx(
            baseStyles,
            colorStyles[color],
            sizeStyles[size],
            className
        );

        const content = (
            <>
                {IconLeading && <IconLeading className={iconSizes[size]} />}
                {children}
                {iconTrailing && (
                    typeof iconTrailing === 'object' ? 
                    iconTrailing : 
                    null
                )}
            </>
        );

        if (href) {
            return (
                <AriaLink href={href} className={classes} {...props as any}>
                    {content}
                </AriaLink>
            );
        }

        return (
            <AriaButton ref={ref} className={classes} {...props}>
                {content}
            </AriaButton>
        );
    }
);

Button.displayName = "Button";

