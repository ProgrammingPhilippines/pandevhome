import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import type { LinkProps } from "next/link";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { cn } from "@/util/cn";

const linkButtonVariants = cva("relative inline-flex items-center justify-center gap-5 transition-all duration-300", {
	variants: {
		variant: {
			discord: cn(
				// Main styles
				"px-6 py-3 md:py-4 text-white primary-btn-rounded font-bold my-8 w-52 primary-btn-text",
				"bg-[linear-gradient(180deg,_rgba(122,82,179,1)_60%,_rgba(82,56,120,1)_100%)]",
				// Hover styles
				"hover:bg-[linear-gradient(180deg,_rgba(90,61,132,1)_60%,_rgba(57,38,84,1)_100%)]",
				"hover:cursor-pointer",
				// Active/Focus styles
				"active:-translate-y-1",
				"outline-2 outline-white/40",
				// Pseudo element styles
				"active:before:content-['']",
				"active:before:absolute",
				"active:before:top-[1em]",
				"active:before:left-[0]",
				"active:before:w-full",
				"active:before:h-full",
				"active:before:border-2",
				"active:before:border-dashed",
				"active:before:border-white/40",
				"active:before:rounded-(--primary-btn-border-radius)",
				"active:before:-z-10",
			),
		},
	},
	defaultVariants: {
		variant: "discord",
	},
});

type LinkButtonBaseComponent = HTMLElementTagNameMap["a"];

type LinkButtonProps = Omit<React.AnchorHTMLAttributes<LinkButtonBaseComponent>, keyof LinkProps> &
	LinkProps &
	VariantProps<typeof linkButtonVariants> & {
		icon?: string;
		iconAlt?: string;
	};

export const LinkButton = React.forwardRef<LinkButtonBaseComponent, LinkButtonProps>(
	({ icon, iconAlt, className, variant, href, children, ...props }, ref) => {
		return (
			<Link href={href} className={cn(linkButtonVariants({ variant, className }))} ref={ref} {...props}>
				{icon && <Image src={icon} alt={iconAlt ?? ""} className="size-8" />}
				{children}
			</Link>
		);
	},
);
LinkButton.displayName = "LinkButton";
