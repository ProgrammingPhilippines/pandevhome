import * as React from "react";
import Link from "next/link";
import type { LinkProps } from "next/link";
import type { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./button";
import { cn } from "@/util/cn";

type LinkButtonProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
	LinkProps &
	VariantProps<typeof buttonVariants>;

export const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
	({ className, variant, size, href, ...props }, ref) => {
		return <Link href={href} className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
	},
);
LinkButton.displayName = "LinkButton";
