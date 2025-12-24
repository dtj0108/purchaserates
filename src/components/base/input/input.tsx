import { type ComponentPropsWithoutRef } from "react";
import { Input as AriaInput, Label, TextField, Text, FieldError } from "react-aria-components";
import { cx } from "@/utils/cx";

interface InputProps extends Omit<ComponentPropsWithoutRef<typeof AriaInput>, "size"> {
    label?: string;
    hint?: string;
    hideRequiredIndicator?: boolean;
    size?: "sm" | "md" | "lg";
    isRequired?: boolean;
}

export const Input = ({ 
    label, 
    hint, 
    hideRequiredIndicator, 
    size = "md",
    className,
    isRequired,
    ...props 
}: InputProps) => {
    const sizeStyles = {
        sm: "px-3 py-2 text-sm",
        md: "px-3.5 py-2.5 text-md",
        lg: "px-4 py-3 text-md",
    };

    return (
        <TextField isRequired={isRequired} className="flex flex-col gap-2">
            {label && (
                <Label className="text-sm font-medium text-secondary">
                    {label}
                    {isRequired && !hideRequiredIndicator && (
                        <span className="ml-0.5 text-error-primary">*</span>
                    )}
                </Label>
            )}
            <AriaInput
                className={cx(
                    "w-full rounded-lg border border-secondary bg-primary text-primary shadow-xs placeholder:text-placeholder transition-colors",
                    "focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand focus:ring-opacity-20",
                    "disabled:bg-disabled disabled:text-disabled disabled:cursor-not-allowed",
                    sizeStyles[size],
                    typeof className === "string" ? className : ""
                )}
                {...props}
            />
            {hint && (
                <Text slot="description" className="text-sm text-tertiary">
                    {hint}
                </Text>
            )}
            <FieldError className="text-sm text-error-primary" />
        </TextField>
    );
};

