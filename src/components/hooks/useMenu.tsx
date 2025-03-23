import { useState } from "react";

export function useMenu() {
	const [open, setOpen] = useState(false);

	const openMenu = () => setOpen(!open);

	return {
		open,
		openMenu,
	};
}
