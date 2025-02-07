import {describe, it, expect} from "vitest";
import {screen, render} from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import {Button} from "@/components/ui/button";

describe("components/ui/button", () => {
	it("renders a button", () => {
		render(
			<Button/>
		);

		const button = screen.getByRole("button");
		expect(button).toBeInTheDocument();
	});

	it("renders a text content", () => {
		render(
			<Button>
				test
			</Button>
		);

		const button = screen.getByRole("button");
		expect(button).toHaveTextContent("test");
	});

	it("renders a class name", () => {
		render(
			<Button
				className="test class"
			/>
		);

		const button = screen.getByRole("button");
		expect(button).toHaveClass("class test");
	});

	describe("variants/variant", () => {
		it.each`
			variant      | className
			${"default"} | ${"text-white bg-primary-button hover:outline-dashed hover:outline-accent hover:outline-offset-2"} 
		`("renders a button of $variant variant", ({
			variant,
			className
		}) => {
			render(
				<Button
					variant={variant}
				/>
			);

			const button = screen.getByRole("button");
			expect(button).toHaveClass(className);
		});
	});

	describe("variants/size", () => {
		it.each`
			size         | className
			${"default"} | ${"h-10 px-4 py-2"} 
			${"lg"}      | ${"h-11 rounded-md px-8"} 
			${"sm"}      | ${"h-9 rounded-md px-3"} 
			${"icon"}    | ${"h-10 w-10"} 
		`("renders a button of $size size", ({
		  size,
		  className
	  }) => {
			render(
				<Button
					size={size}
				/>
			);

			const button = screen.getByRole("button");
			expect(button).toHaveClass(className);
		});
	});
});
