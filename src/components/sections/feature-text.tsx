import { type ElementType, type ReactNode } from "react";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

interface FeatureTextProps {
    icon: ElementType;
    title: string;
    subtitle: string;
    footer?: ReactNode;
}

export const FeatureTextFeaturedIconTopCentered = ({
    icon,
    title,
    subtitle,
    footer,
}: FeatureTextProps) => {
    return (
        <div className="flex max-w-xs flex-col items-center text-center">
            <FeaturedIcon icon={icon} size="lg" color="brand" theme="light" />
            <h3 className="mt-5 text-xl font-semibold text-primary">{title}</h3>
            <p className="mt-2 text-md text-tertiary">{subtitle}</p>
            {footer && <div className="mt-4">{footer}</div>}
        </div>
    );
};

