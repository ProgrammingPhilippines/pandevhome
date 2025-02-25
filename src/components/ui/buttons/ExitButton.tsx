import exit from "@/assets/exit.svg";

import Image from "next/image";
export function ExitButton({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
	return (
		<button
			onClick={() => setOpen(prev => !prev)}
			className="exit-btn"
			aria-label="Exit menu"
			data-testid="exit-menu"
		>
			<Image src={exit} alt="Exit menu icon" className="w-5 h-6 cursor-pointer" />
		</button>
	);
}
