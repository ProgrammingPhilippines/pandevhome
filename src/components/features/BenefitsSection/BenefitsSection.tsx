import yellowStar from "@/assets/yellow-star.svg";
import { delaGothic } from "@/components/ui/fonts";
import { cn } from "@/util/cn";
import { BenefitsContent } from "./BenefitsContent";

export default function BenefitsSection() {
	return (
		<section>
			<header className="py-24">
				<h2
					style={{
						["--bg-image-before" as string]: `url(${yellowStar.src})`,
					}}
					className={cn(
						"text-h2 leading-tight text-center max-w-3xl mx-auto relative",
						delaGothic.className,
						"lg:before:absolute lg:before:bg-[image:var(--bg-image-before)] lg:before:z-10 lg:before:h-16 lg:before:-left-16 lg:before:w-16",
					)}
				>
					Be part of pandesal.dev
				</h2>
			</header>
			<BenefitsContent />
		</section>
	);
}