import Link from "next/link";

import { MenuItem } from "../../ui/navigation/MenuItem";
import { SocialLinks } from "@/components/ui/navigation/SocialLinks";
import { ExitButton } from "@/components/ui/buttons/ExitButton";
import { MENU_ITEMS } from "./constants";
import { SOCIAL_LINKS } from "./constants";
interface SideMenuProps {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SideMenu({ setOpen }: SideMenuProps) {
	const menuItemComponents = MENU_ITEMS.map((item) => <MenuItem key={item.id} {...item} />);
	return (
		<>
			<ul className="**:cursor-pointer [&>li:not(:first-child)]:hover:bg-secondary [&>li:not(:first-child)]:hover:text-background text-2xl/loose font-medium [&>li:not(:first-child)]:px-6"   data-testid="side-menu-list"
			>
				<li className="px-6 pt-10">
					<ExitButton setOpen={setOpen} />
				</li>
				{menuItemComponents}
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
		</>
	);
}
