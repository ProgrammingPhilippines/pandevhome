import discord1 from "@/assets/discord-icon-purp.svg";
import github from "@/assets/github-mark.svg";
import browser from "@/assets/browser-icon.svg";
import x from "@/assets/x-icon.svg";

interface MenuItem {
	label: string;
	href: string;
}

interface SocialLink {
	icon: string;
	href: string;
	alt: string;
	width: number;
	height: number;
}

const MENU_ITEMS: MenuItem[] = [
	{ label: "Home", href: "/" },
	{ label: "About us", href: "#about" },
	{ label: "Team", href: "#team" },
	{ label: "Testimonials", href: "#testimonials" },
] as const;

const SOCIAL_LINKS: SocialLink[] = [
	{
		icon: discord1,
		href: "#",
		alt: "Discord icon",
		width: 20,
		height: 20,
	},
	{
		icon: github,
		href: "#",
		alt: "Github icon",
		width: 20,
		height: 20,
	},
	{
		icon: browser,
		href: "#",
		alt: "Browser icon",
		width: 20,
		height: 20,
	},
	{
		icon: x,
		href: "#",
		alt: "X icon",
		width: 20,
		height: 20,
	},
] as const;

export {MENU_ITEMS, SOCIAL_LINKS};