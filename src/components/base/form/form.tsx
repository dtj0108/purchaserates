import { type ComponentPropsWithoutRef } from "react";
import { Form as AriaForm } from "react-aria-components";

export const Form = (props: ComponentPropsWithoutRef<typeof AriaForm>) => {
    return <AriaForm {...props} />;
};


