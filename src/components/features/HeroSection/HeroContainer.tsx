import { cn } from "@/util/cn";
interface ContainerProps {
	children: React.ReactNode;
	className?: string;
}
export function HeroContainer({ children, className }: ContainerProps) {
	return <div className={cn("bg-background text-foreground w-screen min-h-screen pt-5 relative overflow-x-hidden z-50", className)}>{children}</div>;
}
