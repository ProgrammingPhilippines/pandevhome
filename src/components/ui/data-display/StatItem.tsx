interface StatItemProps {
	number: string;
	label: React.ReactNode;
}

export function StatItem({ number, label }: StatItemProps) {
	return (
		<div className="stat-container" role="stats" aria-label="stats">
			<p className="stat-number">{number}</p>
			<p className="stat-label">{label}</p>
		</div>
	);
}
