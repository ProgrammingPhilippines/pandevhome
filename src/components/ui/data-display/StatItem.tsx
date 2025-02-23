interface StatItemProps {
	number: string;
	label: string;
}

export function StatItem({ number, label }: StatItemProps) {
	const [blockText, remainingText] = label.split("|").map((text) => text.trim());
	return (
		<div className="stat-container" role="stats" aria-label="stats">
			<p className="stat-number">{number}</p>
			<p className="stat-label">
				<span className="block">{blockText}</span>
				{remainingText}
			</p>
		</div>
	);
}
