import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { Button } from "@/components/ui/buttons/Button";

describe("Button", () => {
  it("renders an anchor element", () => {
    render(<Button href="#">Test Button</Button>);
    const button = screen.getByRole("link");
    expect(button).toBeInTheDocument();
  });

  it("renders children content", () => {
    render(<Button href="#">Test Content</Button>);
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("applies discord variant styles", () => {
    render(<Button href="#" variant="discord">Test Button</Button>);
    const button = screen.getByRole("link");
    expect(button).toHaveClass("primary-btn-rounded");
  });

  it("renders icon when provided", () => {
    render(
      <Button 
        href="#" 
        icon="/test-icon.svg" 
        iconAlt="Test Icon"
      >
        Test Button
      </Button>
    );
    const icon = screen.getByAltText("Test Icon");
    expect(icon).toBeInTheDocument();
  });

  it("passes through anchor props", () => {
    render(
      <Button 
        href="https://example.com" 
        target="_blank"
      >
        Test Button
      </Button>
    );
    const button = screen.getByRole("link");
    expect(button).toHaveAttribute("href", "https://example.com");
    expect(button).toHaveAttribute("target", "_blank");
  });
});