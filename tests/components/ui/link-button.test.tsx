import React from "react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import { LinkButton } from "@/components/ui/link-button";

describe("LinkButton", () => {
	it("renders a link button with default props", () => {
		render(<LinkButton href="/">Click me</LinkButton>);

		const link = screen.getByRole("link", { name: /click me/i });
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute("href", "/");
	});

	it("applies a custom className", () => {
		render(
			<LinkButton href="/" className="custom-class">
				Custom Class
			</LinkButton>,
		);

		const link = screen.getByRole("link", { name: /custom class/i });
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute("href", "/");
		expect(link).toHaveClass("custom-class");
	});
});
