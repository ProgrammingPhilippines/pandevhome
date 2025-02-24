import { cn } from "@/util/cn";
interface ContainerProps {
	children: React.ReactNode;
	className?: string;
}
export function HeroContainer({ children, className }: ContainerProps) {
	return <div className={cn("bg-background text-foreground w-screen min-h-screen relative overflow-x-hidden", className)} data-testid="hero-container">{children}</div>;

}
