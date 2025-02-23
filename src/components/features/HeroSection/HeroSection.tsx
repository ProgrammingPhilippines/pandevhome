import { useMenu } from "../../hooks/useMenu";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import ellipse from "@/assets/ellipse.svg";
import MenuToggle from "./MenuToggle";
import SideMenu from "./SideMenu";
import HeroContent from "./HeroContent";
import { HeroContainer } from "./HeroContainer";

export default function HeroSection() {
	const { open, openMenu } = useMenu();
	return (
		<HeroContainer>
			<Image src={ellipse} className="hero-glow -left-1/3 top-1/4" alt="Glow effect" priority />
			<Image src={ellipse} className="-right-1/2 top-[40em] hero-glow" alt="Glow effect" priority />
			<section className="container">
				<header className="flex justify-between z-50">
					<Link href="/" aria-label="Go to homepage">
						<Image src={logo} alt="The pandev logo" id="logo" data-testid="logo" className="w-28" />
					</Link>
					<MenuToggle open={open} setOpen={openMenu} />
					
				</header>
				<HeroContent role="main" data-testid="hero-content" />
				<SideMenu open={open} setOpen={openMenu} />
			</section>
		</HeroContainer>
	);
}
