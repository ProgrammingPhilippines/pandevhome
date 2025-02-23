import discord2 from "@/assets/discord-icon-white.svg";
import { LinkButton } from "../../ui/buttons/LinkButton";
import { StatItem } from "../../ui/data-display/StatItem";
import { nanoid } from "nanoid";
import { delaGothic } from "@/components/ui/fonts";
const COMMUNITY_STATS = [
	{
		id: nanoid(),
		number: "1k+",
		label: "Active | Members",
	},
	{
		id: nanoid(),
		number: "12k+",
		label: "Meetups & | Events",
	},
	{
		id: nanoid(),
		number: "10k+",
		label: "Raffles & | Giveaways",
	},
] as const;

export default function HeroContent({ ...props }) {
	return (
		<main {...props} className="py-11">
			<h1 className={`text-h1 leading-tight capitalize text-center ${delaGothic.className} max-w-3xl m-auto`}>
				a comm<span className="text-accent">unity</span> of <span className="text-primary">filipino</span> software
				developers
			</h1>
			<p className="text-center line-clamp-2 font-semibold mt-5 text-p-sm">
				Pandev is where the fun tech talks take place
			</p>
			<div className="grid place-content-center">
				<LinkButton
					href={process.env.NEXT_PUBLIC_DISCORD_URL}
					target="_blank"
					variant="discord"
					icon={discord2}
					iconAlt="Discord Icon White"
				>
					Join Discord
				</LinkButton>
			</div>
			<div className="border-1 border-accent rounded-3xl grid py-5 px-6 mt-4 text-white" data-testid="stats">
				{COMMUNITY_STATS.map((stat, index) => (
					<div key={stat.id}>
						{index > 0 && <hr className="bg-accent w-full my-4 border-white/20" />}
						<StatItem {...stat} />
					</div>
				))}
			</div>
		</main>
	);
}
