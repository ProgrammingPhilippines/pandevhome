import logo from "./assets/logo.png";

function App() {
	return (
		<div className="bg-background text-foreground">
			<div className="container min-h-screen flex items-center justify-center">
				<img src={logo} alt="logo" />
			</div>
		</div>
	);
}

export default App;
