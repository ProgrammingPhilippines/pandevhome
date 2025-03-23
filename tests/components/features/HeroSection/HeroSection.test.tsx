import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import HeroSection from "@/components/features/HeroSection/HeroSection";

describe("HeroSection", () => {
	beforeEach(() => {
		render(<HeroSection />);
	});


	it("renders the glow effects", () => {
		const glowEffects = screen.getAllByAltText("Glow effect");
		expect(glowEffects).toHaveLength(2);
	});

	it("HeroContent should have the correct container classes", () => {
		const container = screen.getByTestId('hero-content').parentElement;
		expect(container).toHaveClass("container");
	});

	it("should render Hero Container with correct classNames", () => {
		const rootElement = screen.getByTestId("hero-container");
		expect(rootElement).toHaveClass("bg-background text-foreground w-screen min-h-screen relative overflow-x-hidden");
	});
});

