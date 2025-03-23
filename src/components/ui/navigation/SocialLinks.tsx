import Image from "next/image";
import Link from "next/link";
import { SocialLink as SocialLinkProps } from "@/components/features/HeroSection/constants";

export function SocialLinks({ links }: { links: SocialLinkProps[] }) {
	const linkComponents = links.map((link) => (
		<Link key={link.id} href={link.href} className="cursor-pointer">
			<Image src={link.icon} alt={link.alt} width={link.width} height={link.height} className="w-5 h-5" />
		</Link>
	));
	return <div className="flex gap-4 mt-3">{linkComponents}</div>;
}
