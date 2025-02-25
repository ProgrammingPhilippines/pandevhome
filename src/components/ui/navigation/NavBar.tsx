import Link from "next/link";
import Image from "next/image";
import MenuToggle from "@/components/features/HeroSection/MenuToggle";
import SideMenu from "@/components/features/HeroSection/SideMenu";
import logo from "@/assets/logo.png";
import { useMenu } from "@/components/hooks/useMenu";
import { cn } from "@/util/cn";
import { MENU_ITEMS } from "@/components/features/HeroSection/constants";

export default function NavBar() {
	const { open, openMenu } = useMenu();
	const navLinkComponents = MENU_ITEMS.map((item) => (
		<Link
			key={item.id}
			href={item.href}
			className={cn(
				"text-white text-2xl",
				item.label === "Home" &&
					"font-bold bg-gradient-to-b from-[#EED49F] via-[#EED49F] to-[#F5A97F] bg-clip-text text-transparent",
			)}
		>
			{item.label}
		</Link>
	));
	return (
		<header className="fixed top-0 left-0 right-0 z-50 px-8 lg:container-lg bg-background w-full h-22 lg:h-28 2xl:h-40 flex justify-between items-center">
			<Link href="/" aria-label="Go to homepage" className="lg:absolute 2xl:left-[calc(9.8rem_+_6rem)]">
				<Image src={logo} alt="The pandev logo" id="logo" data-testid="logo" className="w-28 lg:w-40 2xl:w-52" />
			</Link>
			{/* Desktop Navigation */}
			<nav className="hidden md:flex items-center gap-7 lg:flex-1 lg:justify-center" role="navigation" data-testid="desktop-nav"
			>{navLinkComponents}</nav>
			{/* Mobile Navigation Toggle & Menu */}
			<div className="md:hidden">
				<MenuToggle open={open} setOpen={openMenu} />
				<nav
					className={cn(
						"side-nav text-white fixed inset-0 z-50",
						"md:hidden", // Ensure it's only visible on mobile
						open ? "side-nav-open" : "side-nav-closed",
					)}
					data-testid="mobile-nav"
					role="navigation"
				>
					<SideMenu open={open} setOpen={openMenu} />
				</nav>
			</div>
		</header>
	);
}
