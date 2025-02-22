import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/util/cn";
import Image from "next/image";
import { useRef } from "react"; 
const buttonVariants = cva(
	// Base styles that apply to all variants
	"relative inline-flex items-center justify-center gap-5 transition-all duration-300",
	{
		variants: {
			variant: {
				discord: cn(
					// Main styles
					"px-6 py-4 text-white primary-btn-rounded font-bold my-8 w-52 primary-btn-text",
					"bg-[linear-gradient(180deg,_rgba(122,82,179,1)_60%,_rgba(82,56,120,1)_100%)]",
					// Hover styles
					"hover:bg-[linear-gradient(180deg,_rgba(90,61,132,1)_60%,_rgba(57,38,84,1)_100%)]",
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
				// Add more variants as needed
			},
		},
		defaultVariants: {
			variant: "discord",
		},
	},
);

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof buttonVariants> {
	icon?: string;
	iconAlt?: string;
}

export const Button = ({ className, variant, icon, iconAlt, children, ...props }: ButtonProps) => {
	const ref = useRef<HTMLAnchorElement>(null); // Create a ref

	return (
		<a
			className={cn(buttonVariants({ variant, className }))}
			ref={ref} // Assign the ref to the element
			{...props}
		>
			{icon && <Image src={icon} alt={iconAlt ?? ""} className="w-9 h-9" />}
			{children}
		</a>
	);
};

Button.displayName = "Button";
