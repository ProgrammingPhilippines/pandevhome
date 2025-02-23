import Link from "next/link";

import { cn } from "@/util/cn";
import { MenuItem } from "../../ui/navigation/MenuItem";
import { SocialLinks } from "@/components/ui/navigation/SocialLinks";
import { ExitButton } from "@/components/ui/buttons/ExitButton";
import { MENU_ITEMS } from "./constants";
import { SOCIAL_LINKS } from "./constants";
interface SideMenuProps {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

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
