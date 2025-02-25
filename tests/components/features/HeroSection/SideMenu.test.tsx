import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import SideMenu from "@/components/features/HeroSection/SideMenu";

describe("SideMenu", () => {
  const mockSetOpen = vi.fn();

  beforeEach(() => {
    render(<SideMenu open={true} setOpen={mockSetOpen} />);
  });

  it("renders menu items from constants", () => {
    const menuList = screen.getByTestId("side-menu-list");
    expect(menuList).toBeInTheDocument();
  });

  it("renders exit button", () => {
    const exitButton = screen.getByRole("button");
    expect(exitButton).toBeInTheDocument();
  });

  it("renders contact information", () => {
    const email = screen.getByText("devteam@gmail.com");
    expect(email).toBeInTheDocument();
    expect(email).toHaveAttribute("href", "devteam@gmail.com");
  });

  it("renders social media section", () => {
    const socialHeader = screen.getByText("follow us on social media");
    expect(socialHeader).toBeInTheDocument();
    expect(socialHeader).toHaveClass("text-secondary uppercase font-extrabold");
  });

  it("applies hover styles to menu items", () => {
    const menuItems = screen.getByTestId("side-menu-list");
    expect(menuItems).toHaveClass(
      "[&>li:not(:first-child)]:hover:bg-secondary",
      "[&>li:not(:first-child)]:hover:text-background"
    );
  });
});