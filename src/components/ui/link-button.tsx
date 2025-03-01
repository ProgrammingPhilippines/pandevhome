import * as React from "react";
import Link from "next/link";
import type { LinkProps } from "next/link";
import type { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./button";
import { cn } from "@/util/cn";

type LinkButtonBaseComponent = HTMLElementTagNameMap["a"];

type LinkButtonProps = Omit<React.AnchorHTMLAttributes<LinkButtonBaseComponent>, keyof LinkProps> &
	LinkProps &
	VariantProps<typeof buttonVariants>;

export const LinkButton = React.forwardRef<LinkButtonBaseComponent, LinkButtonProps>(
	({ className, variant, size, href, ...props }, ref) => {
		return <Link href={href} className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
	},
);
LinkButton.displayName = "LinkButton";
