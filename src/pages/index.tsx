import BenefitsSection from "@/components/features/BenefitsSection/BenefitsSection";
import HeroSection from "@/components/features/HeroSection/HeroSection";
import { Layout } from "@/components/layout.tsx/Layout";
import NavBar from "@/components/ui/navigation/NavBar";

export default function Home() {
	return (
		<>
			<NavBar />
			<HeroSection />
			<Layout>
				{/* Other sections here */}
				<BenefitsSection />
			</Layout>
		</>
	);
}
