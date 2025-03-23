import { cn } from "@/util/cn";
interface ContainerProps {
	children: React.ReactNode;
	className?: string;
}
export function HeroContainer({ children, className }: ContainerProps) {
    return <div className={cn("bg-background text-foreground w-screen min-h-screen relative overflow-x-hidden pt-22 lg:pt-28 2xl:pt-40", className)} data-testid="hero-container">{children}</div>;

}
