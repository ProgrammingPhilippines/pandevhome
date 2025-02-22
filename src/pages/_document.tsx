import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body className="container bg-background text-foreground antialiased box-border">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
