import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import HeroContent from "@/components/features/HeroSection/HeroContent";

describe("HeroContent", () => {
	beforeEach(() => {
		render(<HeroContent />);
	});

	it("renders the parent or main element", () => {
		expect(screen.getByRole("main")).toBeInTheDocument();
	});

	it("render the heading 1 element", () => {
		const heading = screen.getByRole("heading", { level: 1 });
		expect(heading).toBeInTheDocument();
		expect(heading).toHaveTextContent(/filipino software developers/i);
	});

	it("renders the subheading text", () => {
		expect(screen.getByText(/pandev is where the fun tech talks take place/i)).toBeInTheDocument();
	});

    it("renders stats section", () => {
        // Test for stats container
        const statsSection = screen.getByTestId("stats");
    
        // Test individual stats
        const stats = within(statsSection).getAllByRole("stats");
        expect(stats).toHaveLength(3);
    
        // Test first stat
        const firstStat = stats[0];
        expect(within(firstStat).getByText("1k+")).toBeInTheDocument();
        
        // Test for "Active" and "Members" separately
        const statLabel = within(firstStat).getByText(/members/i).parentElement;
        expect(statLabel).toHaveTextContent(/active/i);
        expect(statLabel).toHaveTextContent(/members/i);
      });
});
