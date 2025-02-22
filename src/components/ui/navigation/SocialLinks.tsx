import Image from "next/image";
import Link from "next/link";

interface SocialLinkProps {
	href: string;
	icon: string;
	alt: string;
	width: number;
	height: number;
}

export function SocialLinks({ links }: { links: SocialLinkProps[] }) {
	return (
		<div className="flex gap-4 mt-3">
			{links.map((link) => (
				<Link key={link.alt} href={link.href} className="cursor-pointer">
					<Image src={link.icon} alt={link.alt} width={link.width} height={link.height} className="w-5 h-5" />
				</Link>
			))}
		</div>
	);
}
