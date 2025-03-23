import React from "react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import discord2 from "@/assets/discord-icon-white.svg";
import { LinkButton } from "@/components/ui/buttons/LinkButton";

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

	it("applies an icon as a prop", () => {
		render(
			<LinkButton href="/" icon={discord2} iconAlt="discord icon">
				Click me
			</LinkButton>,
		);

		const link = screen.getByRole("link", { name: /click me/i });
		expect(link).toHaveAttribute("href", "/");
		expect(link).toBeInTheDocument();
	});
});
