import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../util/cn";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible-ring-2 focus-visible:ring-offset-2 disabled:pointer-event-none disabled:opacity-50 disabled:cursor-not-allowed",
	{
		variants: {
			variant: {
				default:
					"bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100 hover:bg-neutral-100/90 dark:hover:bg-neutral-900/90",
				// add button variants in here as per Figma design
			},
			// not the actual sizes yet, feel free to modify these
			size: {
				default: "h-10 px-4 py-2",
				lg: "h-11 rounded-md px-8",
				sm: "h-9 rounded-md px-3",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, ...props }, ref) => {
		return <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
	},
);
Button.displayName = "Button";