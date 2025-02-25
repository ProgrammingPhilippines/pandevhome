import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { LinkButton } from "@/components/ui/buttons/LinkButton";

describe("Button", () => {
  it("renders an anchor element", () => {
    render(<LinkButton href="#">Test Button</LinkButton>);
    const button = screen.getByRole("link");
    expect(button).toBeInTheDocument();
  });

  it("renders children content", () => {
    render(<LinkButton href="#">Test Content</LinkButton>);
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("applies discord variant styles", () => {
    render(<LinkButton href="#" variant="discord">Test Button</LinkButton>);
    const button = screen.getByRole("link");
    expect(button).toHaveClass("primary-btn-rounded");
  });

  it("renders icon when provided", () => {
    render(
      <LinkButton 
        href="#" 
        icon="/test-icon.svg" 
        iconAlt="Test Icon"
      >
        Test Button
      </LinkButton>
    );
    const icon = screen.getByAltText("Test Icon");
    expect(icon).toBeInTheDocument();
  });

  it("passes through anchor props", () => {
    render(
      <LinkButton 
        href="https://example.com" 
        target="_blank"
      >
        Test Button
      </LinkButton>
    );
    const button = screen.getByRole("link");
    expect(button).toHaveAttribute("href", "https://example.com");
    expect(button).toHaveAttribute("target", "_blank");
  });
});