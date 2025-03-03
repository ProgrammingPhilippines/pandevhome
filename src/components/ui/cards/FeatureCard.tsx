import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "./Card";
import { cn } from "@/util/cn";
import { delaGothic } from "../fonts";

const variants = {
	primary: {
		card: "text-primary hover:text-background group-hover:text-primary hover:bg-primary hover:shadow-md hover:shadow-primary hover:border-background",
		index: "group-hover:text-primary",
	},
	lightblue: {
		card: "text-lightblue hover:text-background group-hover:text-lightblue hover:bg-lightblue hover:shadow-md hover:shadow-lightblue hover:border-background",
		index: "group-hover:text-lightblue",
	},
	pandesal: {
		card: "text-pandesal hover:text-background group-hover:text-pandesal hover:bg-pandesal hover:shadow-md hover:shadow-pandesal hover:border-background",
		index: "group-hover:text-pandesal",
	},
};

type VariantType = keyof typeof variants;

interface FeatureCardProps {
	id?: number;
	icon: React.ElementType;
	title: string;
	content: string;
	variant?: VariantType;
	orientation?: "top" | "bottom";
	className?: string;
	children?: React.ReactNode;
	showBackgroundText?: boolean;
}

interface IndexProps {
	text?: string;
	position?: "top" | "bottom";
	variant?: VariantType;
}

// Internal BackgroundText component
const Index: React.FC<IndexProps> = ({
	text = "text",
	position = "bottom",
	variant = "primary"
}) => {
	const positionClasses = {
		top: "-right-10 -top-40",
		bottom: "-right-10 -bottom-60",
	};

	return (
		<div className="relative opacity-5">
			{/* Outline */}
			<div
				className={cn("absolute text-[18rem] font-extrabold", positionClasses[position])}
				style={{ WebkitTextStroke: "2rem" }}
			>
				{text}
			</div>
			{/* Body */}
			<div
				className={cn(
					"absolute text-[18rem] font-extrabold text-background",
					variants[variant].index,
					positionClasses[position]
				)}
			>
				{text}
			</div>
		</div>
	);
};

const FeatureCard = ({
	id,
	icon: Icon,
	title,
	content,
	variant = "primary",
	orientation = "bottom",
	className,
	children,
	showBackgroundText = false
}: FeatureCardProps) => {
	return (
		<Card
			className={cn(
				"relative overflow-hidden duration-300 group",
				"h-full justify-between max-h-[80vh]",
				variants[variant].card,
				className
			)}
		>
			{orientation === "top" &&
				<div className="h-[25vh]">
					{showBackgroundText && (
						<Index
							text={id?.toString().padStart(2, '0') || ""}
							position={orientation}
							variant={variant}
						/>
					)}
				</div>
			}
			<CardHeader>
				{Icon && <Icon height="48" width="48" fill="currentColor" />}
				<CardTitle
					className={cn("text-lg", delaGothic.className)}
				>
					{title}
				</CardTitle>
				<CardDescription
					className="text-md leading-[1.5] tracking-wider w-[85%]"
				>
					{content}
				</CardDescription>
			</CardHeader>
			{orientation === "bottom" &&
				<div className="min-h-[120px]">
					{showBackgroundText && (
						<Index
							text={id?.toString().padStart(2, '0') || ""}
							position={orientation}
							variant={variant}
						/>
					)}
				</div>
			}
			{children}
		</Card>
	);
};

export { FeatureCard };