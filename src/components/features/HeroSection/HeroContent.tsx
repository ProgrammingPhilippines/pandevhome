import discord2 from "@/assets/discord-icon-white.svg";
import { Button } from "../../ui/buttons/Button";
import { StatItem } from "../../ui/data-display/StatItem";

const COMMUNITY_STATS = [
	{
		number: "1k+",
		label: (
			<>
				<span className="block">Active</span> Members
			</>
		),
	},
	{
		number: "12k+",
		label: (
			<>
				<span className="block">Meetups &</span> Events
			</>
		),
	},
	{
		number: "10k+",
		label: (
			<>
				<span className="block">Raffles & </span> Giveaways
			</>
		),
	},
] as const;

export default function HeroContent({ ...props }) {
	return (
		<main {...props} className="py-11">
			<h1 className="text-h1 leading-tight capitalize text-center font-dela max-w-3xl m-auto">
				a comm<span className="text-accent">unity</span> of <span className="text-primary">filipino</span> software
				developers
			</h1>
			<p className="text-center line-clamp-2 font-semibold mt-5 text-p-sm">
				Pandev is where the fun tech talks take place
			</p>
			<div className="grid place-content-center">
				<Button
					href={process.env.NEXT_PUBLIC_DISCORD_URL}
					target="_blank"
					variant="discord"
					icon={discord2}
					iconAlt="Discord Icon White"
				>
					Join Discord
				</Button>
			</div>
			<div className="border-1 border-accent rounded-3xl grid py-5 px-6 mt-4" data-testid="stats">
				{COMMUNITY_STATS.map((stat, index) => (
					<div key={stat.number}>
						{index > 0 && <hr className="bg-accent w-full my-4 border-white/20" />}
						<StatItem number={stat.number} label={stat.label} />
					</div>
				))}
			</div>
		</main>
	);
}
