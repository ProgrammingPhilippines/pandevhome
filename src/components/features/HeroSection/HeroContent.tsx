import discord2 from "@/assets/discord-icon-white.svg";
import { LinkButton } from "../../ui/buttons/LinkButton";
import { StatItem } from "../../ui/data-display/StatItem";
import { delaGothic } from "@/util/fonts";
import { COMMUNITY_STATS } from "./constants";
import heroImage from "@/assets/highlight.png";
import Image from "next/image";
import purpStar from "@/assets/purp-start.svg";
import yellowStar from "@/assets/yellow-star.svg";
import greenPaperPlane from "@/assets/green-paperplane.svg";
import { cn } from "@/util/cn";
import { useState, useEffect } from "react";
export default function HeroContent({ ...props }) {
	const [planeAnimation, setPlaneAnimation] = useState("lg:after:animate-plane-fly");
	const [animationPhase, setAnimationPhase] = useState(0);

	useEffect(() => {
		if (animationPhase === 1) {
			setPlaneAnimation("lg:after:animate-plane-respawn");

			const timer = setTimeout(() => {
				setPlaneAnimation("lg:after:animate-plane-float");
			}, 1000);

			return () => clearTimeout(timer);
		}
	}, [animationPhase]);

	const communityStatComponents = COMMUNITY_STATS.map((stat, index) => (
		<div
			key={stat.id}
			className={
				index > 0
					? "relative md:after:absolute md:after:left-0 md:after:-top-1 md:after:h-12 md:after:w-0.5 md:after:bg-accent md:after:content-['']"
					: ""
			}
		>
			{index > 0 && <hr className="md:hidden bg-accent w-full my-4 border-white/20" />}
			<StatItem {...stat} />
		</div>
	));
	return (
		<main {...props} className="pt-11 relative">
			<h1
				style={{
					["--bg-image-after" as string]: `url(${purpStar.src})`,
					["--bg-image-before" as string]: `url(${yellowStar.src})`,
				}}
				className={cn(
					"text-h1 leading-tight capitalize text-center max-w-3xl m-auto relative",
					delaGothic.className,
					// After pseudo-element
					"lg:after:absolute lg:after:bg-[image:var(--bg-image-after)] lg:after:bg-no-repeat lg:after:z-10 lg:after:h-16 lg:after:w-16 lg:after:-left-20 lg:after:top-6 lg:after:animate-scale-up-center",
					// Before pseudo-element
					"lg:before:absolute lg:before:bg-[image:var(--bg-image-before)] lg:before:bg-no-repeat lg:before:z-10 lg:before:h-16 lg:before:w-16 lg:before:right-14 lg:before:-bottom-16 lg:after:animate-delayed-scale-up-center",
				)}
			>
				a comm<span className="text-accent">unity</span> of <span className="text-primary">filipino</span> software
				developers
			</h1>
			<p
				onAnimationEnd={() => setAnimationPhase(1)}
				style={{
					["--bg-image-after" as string]: `url(${greenPaperPlane.src})`,
				}}
				className={cn(
					"text-center font-semibold mt-6 text-p-sm relative",
					"lg:after:absolute lg:after:bg-[image:var(--bg-image-after)] lg:after:bg-no-repeat lg:after:z-10 lg:after:h-20 lg:after:w-full lg:after:left-8 xl:after:left-36 2xl:after:left-64 lg:after:-bottom-14",
					planeAnimation,
				)}
			>
				Pandev is where the fun tech talks take place
			</p>
			<div className="flex items-center justify-center mt-6 mb-12">
				<LinkButton
					href={process.env.NEXT_PUBLIC_DISCORD_URL ?? "/"}
					target="_blank"
					variant="discord"
					icon={discord2}
					iconAlt="Discord Icon White"
				>
					Join Discord
				</LinkButton>
			</div>
			<div
				className="md:grid md:grid-cols-3 border-1 border-accent rounded-3xl grid py-5 px-6 mt-4 text-white h-65 md:h-auto md:rounded-full lg:max-w-3xl m-auto"
				data-testid="stats"
			>
				{communityStatComponents}
			</div>
			<Image
				src={heroImage}
				alt="Pandev's Discord Thesis/Capstone Evalution Megathread Image"
				className="hidden md:block w-full md:mt-15 lg:mt-20"
			/>
		</main>
	);
}
