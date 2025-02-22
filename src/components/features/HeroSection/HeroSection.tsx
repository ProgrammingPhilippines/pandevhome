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
	const { open, toggleMenu } = useMenu();
	return (
		<HeroContainer>
			<div className="min-h-screen w-full pt-5 relative overflow-x-hidden">
				<Image
					src={ellipse}
					className="hero-glow -left-1/3 top-1/4"
					alt="Glow effect"
				/>
				<Image
					src={ellipse}
					className="-right-1/2 top-[40em] hero-glow"
					alt="Glow effect"
				/>
				<section className="container">
					<header className="flex justify-between z-50">
						{!open && (
							<Link href="/" aria-label="Go to homepage">
								<Image src={logo} alt="The pandev logo" id="logo" data-testid="logo" className="w-28" />
							</Link>
						)}
						<MenuToggle open={open} setOpen={toggleMenu} />
						<SideMenu open={open} setOpen={toggleMenu} />
					</header>
					{!open && <HeroContent role="main" data-testid="hero-content"  />}
				</section>
			</div>
		</HeroContainer>
	);
}
