import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import NavBar from "@/components/ui/navigation/NavBar";

// Mock the useMenu hook
vi.mock("@/components/hooks/useMenu", () => ({
	useMenu: () => ({
		open: false,
		openMenu: vi.fn(),
	}),
}));

describe("NavBar", () => {
	beforeEach(() => render(<NavBar />));
	it("renders logo with correct attributes", () => {
		const logo = screen.getByAltText("The pandev logo");
	
		expect(logo).toBeInTheDocument();
		expect(logo).toHaveAttribute("alt", "The pandev logo");
		expect(logo).toHaveClass("w-28", "lg:w-40", "2xl:w-52");
	  });

	it("renders navigation links on desktop", () => {
    const navs = screen.getAllByRole("navigation");

    // Assuming you want to test the desktop nav
    const desktopNav = navs.find(nav => nav.getAttribute('data-testid') === 'desktop-nav');
    
    expect(desktopNav).toHaveClass("hidden md:flex");
	});

	it("applies special styling to Home link in desktop navigation", () => {
		// Add a data-testid to specifically target desktop nav
		const desktopNav = screen.getByTestId("desktop-nav");
		const homeLink = within(desktopNav).getByText("Home");

		expect(homeLink).toHaveClass(
			"font-bold",
			"bg-gradient-to-b",
			"from-[#EED49F]",
			"via-[#EED49F]",
			"to-[#F5A97F]",
			"bg-clip-text",
			"text-transparent",
		);
	});

	it("renders mobile menu toggle only on mobile viewports", () => {
		const mobileNav = screen.getByTestId("mobile-nav");

		expect(mobileNav).toHaveClass("md:hidden");
	});
});
