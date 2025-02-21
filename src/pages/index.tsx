import logo from "@/assets/logo.png";
import menu from "@/assets/hamburger-menu.svg";
import exit from "@/assets/exit.svg";
import Image from "next/image";
import discord1 from "@/assets/discord-icon-purp.svg";
import discord2 from "@/assets/discord-icon-white.svg";
import github from "@/assets/github-mark.svg";
import browser from "@/assets/browser-icon.svg";
import x from "@/assets/x-icon.svg";
export default function Home() {
	return (
		<div className="min-h-screen">
			<header>
				<Image src={logo} alt="The pandev logo" id="logo" />
				<nav>
					<Image src={menu} alt="Hamburger menu icon" id="menu-btn" />
					<ul className="hidden">
						<li>
							<Image src={exit} alt="Exit menu icon" />
						</li>
						<li>Home</li>
						<li>About Ul</li>
						<li>Team</li>
						<li>Testimonials</li>
					</ul>
					<div className="hidden">
						<p>get in touch</p>
						<a href="devteam@gmail.com" type="email">
							devteam@gmail.com
						</a>
					</div>
					<div className="hidden">
						<p>follow us on social medial</p>
						<div>
							<Image src={discord1} alt="Discord icon" />
							<Image src={github} alt="Github icon" />
							<Image src={browser} alt="Browser icon" />
							<Image src={x} alt="X icon" />
						</div>
					</div>
				</nav>
			</header>
			<main>
				<h1>
					a comm<span>unity</span> of <span>filipino</span> software developers
				</h1>
				<p>Pandev is where the fun tech talks take place</p>
				<a href={process.env.NEXT_PUBLIC_DISCORD_URL}>
					<Image src={discord2} alt="Discord Icon White" />
					Join Discord
				</a>
				<div>
					<div>
						<p>1k+</p>
						<p>Active Members</p>
					</div>
					<div>
						<p>12k+</p>
						<p>Meetups & Events</p>
					</div>
					<div>
						<p>10k+</p>
						<p>Raffles & Giveaways</p>
					</div>
				</div>
			</main>
		</div>
	);
}
