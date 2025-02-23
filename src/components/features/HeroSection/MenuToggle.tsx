import Image from "next/image";
import menu from "@/assets/hamburger-menu.svg";

interface MenuToggleProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function MenuToggle({ open, setOpen }: MenuToggleProps) {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="menu-btn"
      aria-label="Toggle menu"
      data-testid="menu-toggle"
    >
       <Image src={menu} alt="Hamburger menu icon" id="menu-btn" className="w-8" priority />
    </button>
  );
}