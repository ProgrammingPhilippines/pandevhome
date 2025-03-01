import logo from "@/assets/logo.png";
import { cn } from "@/util/cn";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<h1>
				<div className="container min-h-screen flex items-center justify-center">
					<div className="flex flex-col space-y-4">
						<img src={logo.src} alt="logo" />
						<a
							className={cn(buttonVariants({ className: "text-lg rounded-full bg-primary-btn", size: "lg" }))}
							href={process.env.NEXT_PUBLIC_DISCORD_URL}
							rel="noreferrer"
							target="_blank"
						>
							Join Discord
						</a>
					</div>
				</div>
			</h1>
		</div>
	);
}
