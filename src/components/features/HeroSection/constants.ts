import discord1 from "@/assets/discord-icon-purp.svg";
import github from "@/assets/github-mark.svg";
import browser from "@/assets/browser-icon.svg";
import x from "@/assets/x-icon.svg";
import { nanoid } from "nanoid";

interface MenuItem {
	id: string;
	label: string;
	href: string;
}

interface SocialLink {
	id?: string; 
	icon: string;
	href: string;
	alt: string;
	width: number;
	height: number;
  }

const MENU_ITEMS: MenuItem[] = [
	{ id: nanoid(), label: "Home", href: "/" },
	{ id: nanoid(), label: "About us", href: "#about" },
	{ id: nanoid(), label: "Team", href: "#team" },
	{ id: nanoid(), label: "Testimonials", href: "#testimonials" },
] as const;

const SOCIAL_LINKS: SocialLink[] = [
	{
	  id: nanoid(),
	  icon: discord1,
	  href: "#",
	  alt: "Discord icon",
	  width: 20,
	  height: 20,
	},
	{
	  id: nanoid(),
	  icon: github,
	  href: "#",
	  alt: "Github icon",
	  width: 20,
	  height: 20,
	},
	{
	  id: nanoid(),
	  icon: browser,
	  href: "#",
	  alt: "Browser icon",
	  width: 20,
	  height: 20,
	},
	{
	  id: nanoid(),
	  icon: x,
	  href: "#",
	  alt: "X icon",
	  width: 20,
	  height: 20,
	},
  ] as const;

const COMMUNITY_STATS = [
	{
		id: nanoid(),
		number: "1k+",
		label: "Active | Members",
	},
	{
		id: nanoid(),
		number: "12k+",
		label: "Meetups & | Events",
	},
	{
		id: nanoid(),
		number: "10k+",
		label: "Raffles & | Giveaways",
	},
] as const;
export {MENU_ITEMS, SOCIAL_LINKS, COMMUNITY_STATS};