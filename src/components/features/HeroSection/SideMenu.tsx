import Link from "next/link";
import discord1 from "@/assets/discord-icon-purp.svg";
import github from "@/assets/github-mark.svg";
import browser from "@/assets/browser-icon.svg";
import x from "@/assets/x-icon.svg";
import { cn } from "@/util/cn";
import { MenuItem } from "../../ui/navigation/MenuItem";
import { SocialLinks } from "@/components/ui/navigation/SocialLinks";
import { ExitButton } from "@/components/ui/buttons/ExitButton";
interface SideMenuProps {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

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

export default function SideMenu({ open, setOpen }: SideMenuProps) {
	return (
		<nav
			className={cn("side-nav text-white", open ? "side-nav-open" : "side-nav-closed")}
			data-testid="side-menu"
			role="navigation"
		>
			<ul className="**:cursor-pointer [&>li:not(:first-child)]:hover:bg-secondary [&>li:not(:first-child)]:hover:text-background text-2xl/loose font-medium [&>li:not(:first-child)]:px-6">
				<li className="px-6 py-10">
					<ExitButton setOpen={setOpen} />
				</li>
				{MENU_ITEMS.map((item) => (
					<MenuItem key={item.label} {...item} />
				))}
			</ul>
			<div className="mt-auto px-6 pt-10 pb-16">
				<div className="mb-11">
					<p className="text-secondary uppercase font-extrabold">get in touch</p>
					<Link href="devteam@gmail.com" type="email" className="hover:cursor-pointer">
						devteam@gmail.com
					</Link>
				</div>
				<div>
					<p className="text-secondary uppercase font-extrabold">follow us on social media</p>
					<SocialLinks links={SOCIAL_LINKS} />
				</div>
			</div>
		</nav>
	);
}
