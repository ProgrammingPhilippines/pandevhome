// filepath: /my-nextjs-app/my-nextjs-app/src/components/layout/Layout.tsx
import React, { PropsWithChildren } from "react";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
	return <div className="container lg:container-lg bg-background text-foreground antialiased box-border">{children}</div>;
};
