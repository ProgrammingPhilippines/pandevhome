import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import HeroSection from "@/components/features/HeroSection/HeroSection";

describe("HeroSection", () => {
	beforeEach(() => {
		render(<HeroSection />);
	});

	it("renders the navigation elements", () => {
		expect(screen.getByRole("banner")).toBeInTheDocument(); // tests for header
		expect(screen.getByRole("navigation")).toBeInTheDocument(); // tests for nav
	});

	it("renders the logo", () => {
		const logo = screen.getByAltText("The pandev logo");
		expect(logo).toBeInTheDocument();
	});

	it("renders the menu toggle button", () => {
		const menuButton = screen.getByRole("button", { name: /toggle menu/i });
		expect(menuButton).toBeInTheDocument();
	});

	it("renders the glow effects", () => {
		const glowEffects = screen.getAllByAltText("Glow effect");
		expect(glowEffects).toHaveLength(2);
	});

	it("has the correct container classes", () => {
		const container = screen.getByRole("banner").parentElement;
		expect(container).toHaveClass("container");
	});

	it("renders with correct layout structure", () => {
		const rootElement = screen.getByRole("banner").parentElement?.parentElement;
		expect(rootElement).toHaveClass("bg-background text-foreground w-screen min-h-screen pt-5 relative overflow-x-hidden z-50");
	});
});

describe("Menu State Management", () => {
  beforeEach(() => {
    render(<HeroSection />);
  });

  it("starts with menu closed", () => {
    const nav = screen.getByTestId("side-menu");
    expect(nav).toHaveClass("side-nav-closed");
    expect(screen.getByAltText("The pandev logo")).toBeInTheDocument();
    const main = screen.getByRole("main");
    expect(main).toHaveAttribute("data-testid", "hero-content");
  });

  it("the should logo and content should still be in dom when menu is opened", () => {
    const toggleButton = screen.getByTestId("menu-toggle");
    // Open menu
    fireEvent.click(toggleButton);
    // Logo and main content should not exist in the DOM
    expect(screen.queryByAltText("The pandev logo")).toBeInTheDocument();
    expect(screen.queryByRole("main")).toBeInTheDocument();
    // Navigation should have open class
    const nav = screen.getByTestId("side-menu");
    expect(nav).toHaveClass("side-nav-open");
  });

  it("shows logo and content when menu is closed again", () => {
    const toggleButton = screen.getByTestId("menu-toggle");
    // Open menu
    fireEvent.click(toggleButton);
    // Close menu using the exit button
    const exitButton = screen.getByTestId("exit-menu");
    fireEvent.click(exitButton);
    // Logo and content should exist in the DOM again
    expect(screen.getByAltText("The pandev logo")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    // Navigation should be closed
    const nav = screen.getByTestId("side-menu");
    expect(nav).toHaveClass("side-nav-closed");
  });
});