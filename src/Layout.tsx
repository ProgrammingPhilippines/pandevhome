import * as React from "react";

export function Layout({ children }: { readonly children: React.ReactNode }) {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<main>{children}</main>
		</div>
	);
}
