import logo from "./assets/logo.png";
import { buttonVariants } from "./components/ui/button";
import { cn } from "./util/cn";

function App() {
	return (
		<div className="container min-h-screen flex items-center justify-center">
			<div className="flex flex-col space-y-4">
				<img src={logo} alt="logo" />
				<a
					className={cn(buttonVariants({ className: "text-lg rounded-full", size: "lg" }))}
					href="https://discord.gg/pandesal-dev"
					rel="noreferrer"
					target="_blank"
				>
					Join Discord
				</a>
			</div>
		</div>
	);
}

export default App;
