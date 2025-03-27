import { useState, useRef, useEffect } from "react";
import { cn } from "@/util/cn";
import HandshakeIcon from "./HandshakeIcon";
import BriefcaseIcon from "./BriefcaseIcon";
import CheckmarkIcon from "./CheckmarkIcon";
import { FeatureCard } from "@/components/ui/cards/FeatureCard";

// Feature data
const FEATURES = [
	{
		icon: HandshakeIcon,
		title: "Connect",
		content: "Network, collaborate with the Pandesal Dev community members on Discord. Whether you are looking for banter, sharing your portfolio, discussing your hobbies or seeking advice, our community is here to support and engage with you.",
		variant: "lightblue",
		orientation: "bottom",
	},
	{
		icon: CheckmarkIcon,
		title: "Mentorship",
		content: "Explore mentorship avenues in our tech community, where industry professionals volunteer their expertise to help individuals with mock interview practice, CV improvement, and providing career advice. Empower yourself with the guidance you need for career growth and skill enhancement.",
		variant: "primary",
		orientation: "top",
	},
	{
		icon: BriefcaseIcon,
		title: "Job Opportunities",
		content: "Browse through our community's comprehensive selection of job listings, including opportunities across various industries and experience levels. Whether you're seeking a new career path or looking for the perfect candidate, take a look at our available job openings here.",
		variant: "pandesal",
		orientation: "bottom",
	},
];


export function BenefitsContent() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isMobile, setIsMobile] = useState(false);
	const carouselRef = useRef<HTMLDivElement>(null);
	const touchStartX = useRef(0);
	const touchEndX = useRef(0);

	// Check if screen is mobile
	useEffect(() => {
		const checkIsMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		// Set on initial load
		checkIsMobile();

		// Add resize listener
		window.addEventListener('resize', checkIsMobile);

		// Clean up
		return () => window.removeEventListener('resize', checkIsMobile);
	}, []);

	// Handle next/prev slide
	const goToSlide = (index: number) => {
		let newIndex = index;

		// Handle bounds
		if (index < 0) {
			newIndex = FEATURES.length - 1;
		} else if (index >= FEATURES.length) {
			newIndex = 0;
		}

		setCurrentSlide(newIndex);
	};

	// Touch handlers for swipe
	const handleTouchStart = (e: React.TouchEvent) => {
		touchStartX.current = e.touches[0].clientX;
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		touchEndX.current = e.touches[0].clientX;
	};

	const handleTouchEnd = () => {
		const diff = touchStartX.current - touchEndX.current;
		const threshold = 50; // minimum distance to be considered a swipe

		if (diff > threshold) {
			// Swipe left, go to next
			if (currentSlide != FEATURES.length - 1) {
				goToSlide(currentSlide + 1);
			}
		} else if (diff < -threshold) {
			// Swipe right, go to prev
			if (currentSlide != 0) {
				goToSlide(currentSlide - 1);
			}
		}
	};

	return (
		<div>
			{isMobile ? (
				// Mobile View (Carousel)
				<div className="py-12">
					<div
						ref={carouselRef}
						className="relative overflow-hidden"
						onTouchStart={handleTouchStart}
						onTouchMove={handleTouchMove}
						onTouchEnd={handleTouchEnd}
					>
						<div
							className="flex transition-transform duration-300 ease-in-out"
							style={{ transform: `translateX(-${currentSlide * 100}%)` }}
						>
							{FEATURES.map((feature, index) => (
								<div key={index} className="w-full flex-shrink-0 px-4">
									<FeatureCard
										key={index}
										id={index}
										icon={feature.icon}
										title={feature.title}
										content={feature.content}
										variant={feature.variant}
										orientation={feature.orientation}
										showBackgroundText
									/>
								</div>
							))}
						</div>

						{/* Pagination Dots */}
						<div className="flex justify-center mt-6 gap-2">
							{FEATURES.map((_, index) => (
								<button
									key={index}
									onClick={() => goToSlide(index)}
									className={cn(
										"h-3 w-3 rounded-full transition-all",
										currentSlide === index
											? "bg-accent w-6"
											: "bg-gray-300"
									)}
								/>
							))}
						</div>
					</div>
				</div>
			) : (
				// Desktop View (Grid)
				<div className="grid grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8 py-12 lg:py-24">
					{FEATURES.map((feature, index) => (
						<FeatureCard
							key={index}
							id={index}
							icon={feature.icon}
							title={feature.title}
							content={feature.content}
							variant={feature.variant}
							orientation={feature.orientation}
							showBackgroundText
						/>
					))}
				</div>
			)}
		</div>
	)
}