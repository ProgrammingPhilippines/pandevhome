import { cn } from "@/util/cn";
interface ContainerProps {
	children: React.ReactNode;
	className?: string;
}
{/* The reason for these properties is that the container class at the body element is making it hard to position the flare/blurred elements using absolute. With overflow, there is whitespace on both sides, so that's why I added these properties to solve it. */}
export function HeroContainer({ children, className }: ContainerProps) {
	return <div className={cn("relative left-[50%] right-[50%] mx-[-50vw] w-screen", className)}>{children}</div>;
}
