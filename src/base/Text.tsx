import * as React from "react";
import { cn } from "@/lib/utils";

type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "p"
  | "blockquote"
  | "list"
  | "code"
  | "lead"
  | "large"
  | "small"
  | "muted";

const variantStyles: Record<TextVariant, string> = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  p: "leading-7 [&:not(:first-child)]:mt-6",
  blockquote: "mt-6 border-l-2 pl-6 italic",
  list: "my-6 ml-6 list-disc [&>li]:mt-2",
  code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
  lead: "text-xl text-muted-foreground",
  large: "text-lg font-semibold",
  small: "text-sm font-medium leading-none",
  muted: "text-sm text-muted-foreground",
};

const defaultElements: Record<TextVariant, keyof React.JSX.IntrinsicElements> =
  {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
    blockquote: "blockquote",
    list: "ul",
    code: "code",
    lead: "p",
    large: "div",
    small: "small",
    muted: "p",
  };

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant: TextVariant;
  as?: keyof React.JSX.IntrinsicElements;
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ variant, as, className, ...props }, ref) => {
    const Component = (as ||
      defaultElements[variant]) as keyof React.JSX.IntrinsicElements;
    const styles = variantStyles[variant];

    return React.createElement(Component, {
      ref: ref as React.Ref<HTMLElement>,
      className: cn(styles, className),
      ...props,
    } as React.HTMLAttributes<HTMLElement & { ref: React.Ref<HTMLElement> }>);
  }
);

Text.displayName = "Text";

export { Text };

