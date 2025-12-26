import { type ComponentPropsWithoutRef } from "react";
import { cx } from "@/utils/cx";

export const SectionDivider = ({ className, ...props }: ComponentPropsWithoutRef<"hr">) => {
    return (
        <hr 
            className={cx("border-0 border-t border-secondary mx-auto max-w-container", className)} 
            {...props} 
        />
    );
};


