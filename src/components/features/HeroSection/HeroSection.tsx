import Image from "next/image";

import ellipse from "@/assets/ellipse.svg";

import HeroContent from "./HeroContent";
import { HeroContainer } from "./HeroContainer";

export default function HeroSection() {
	return (
		<HeroContainer>
			<Image src={ellipse} className="hero-glow -left-1/3 top-1/4 md:-top-12 md:-left-4 lg:top-0 lg:left-1/6" alt="Glow effect" priority />
			<Image src={ellipse} className="-right-1/2 top-[40em] hero-glow md:right-8 md:top-[20em] lg:right-1/6" alt="Glow effect" priority />
			<section className="container lg:container-lg">
				<HeroContent role="main" data-testid="hero-content" />
			</section>
		</HeroContainer>
	);
}
