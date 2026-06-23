import Link from "next/link";
import type { AnchorHTMLAttributes, ComponentProps, ReactNode } from "react";

type CtaVariant = "primary" | "secondary" | "whatsapp";

type CtaStyleProps = {
  variant?: CtaVariant;
  size?: "default" | "lg";
  block?: boolean;
  pill?: boolean;
  className?: string;
  children: ReactNode;
};

function ctaClassName({
  variant = "primary",
  size = "default",
  block = false,
  pill = false,
  className = "",
}: Omit<CtaStyleProps, "children">) {
  const variantClass =
    variant === "primary"
      ? "landing-btn-primary"
      : variant === "secondary"
        ? "landing-btn-secondary"
        : "landing-btn-whatsapp";

  return [
    variantClass,
    size === "lg" ? "landing-btn-lg" : "",
    block ? "landing-btn-block" : "",
    pill ? "landing-btn-pill" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export function CtaLink({
  variant = "primary",
  size = "default",
  block = false,
  pill = false,
  className = "",
  children,
  ...props
}: CtaStyleProps & ComponentProps<typeof Link>) {
  return (
    <Link className={ctaClassName({ variant, size, block, pill, className })} {...props}>
      {children}
    </Link>
  );
}

export function CtaAnchor({
  variant = "whatsapp",
  size = "default",
  block = false,
  pill = false,
  className = "",
  children,
  ...props
}: CtaStyleProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={ctaClassName({ variant, size, block, pill, className })} {...props}>
      {children}
    </a>
  );
}
