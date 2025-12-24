import { type ComponentPropsWithoutRef } from "react";
import { cx } from "@/utils/cx";

type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

interface AvatarProps extends Omit<ComponentPropsWithoutRef<"img">, "src"> {
    src?: string;
    alt: string;
    size?: AvatarSize;
}

export const Avatar = ({ 
    src, 
    alt, 
    size = "md", 
    className,
    ...props 
}: AvatarProps) => {
    const sizeStyles = {
        xs: "size-6",
        sm: "size-8",
        md: "size-10",
        lg: "size-12",
        xl: "size-14",
        "2xl": "size-16",
    };

    if (!src) {
        return (
            <div 
                className={cx(
                    "rounded-full bg-avatar-bg flex items-center justify-center text-secondary font-medium",
                    sizeStyles[size],
                    className
                )}
                {...props as any}
            >
                {alt.charAt(0).toUpperCase()}
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={cx(
                "rounded-full object-cover",
                sizeStyles[size],
                className
            )}
            {...props}
        />
    );
};

