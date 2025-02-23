import React from "react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import { Button } from "@/components/ui/button";

describe("Button", () => {
	it("renders a button with a default props", () => {
		render(<Button>Click Me</Button>);

		const button = screen.getByRole("button", { name: /click me/i });
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass("text-white bg-primary-button");
	});

	it("renders as child when asChild prop is true", () => {
		render(
			<Button asChild>
				<a href="/">Link Button</a>
			</Button>,
		);

		const link = screen.getByRole("link", { name: /link button/i });
		expect(link).toBeInTheDocument();
		expect(link).toHaveClass("inline-flex items-center justify-center");
	});
});
