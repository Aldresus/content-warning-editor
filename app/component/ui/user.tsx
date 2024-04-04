const User = ({
	faceColor = "#FBD101",
	name,
	fontsize = 75,
	rotation = 0,
	...props
}: UserProps) => {
	// Calculated centerX and centerY in numeric values
	const centerX = 166.185; // 50% of the SVG width
	const centerY = 159.2292; // 52% of the SVG height

	return (
		<svg
			id="Layer_1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 332.37 306.21"
			{...props}
		>
			<title hidden>A descriptive title for the SVG element</title>
			<rect
				y="132.98"
				width="332.37"
				height="53.57"
				rx="12.35"
				ry="12.35"
				fill="#666b73"
			/>{" "}
			<rect
				x="110.65"
				width="111.47"
				height="68.41"
				rx="11.87"
				ry="11.87"
				fill="#666b73"
			/>
			<circle cx="166.39" cy="160.94" r="145.27" fill="#545862" />
			<circle cx="166.39" cy="160.94" r="133.51" fill="#666b73" />
			<g>
				<circle cx="166.39" cy="160.94" r="118.75" fill={faceColor} />
				<g transform={`rotate(${rotation} ${centerX} ${centerY})`}>
					<text
						x="50%"
						y="53%"
						textAnchor="middle"
						dy=".3em"
						fontSize={fontsize}
						fontWeight={700}
					>
						{name}
					</text>
				</g>
			</g>
		</svg>
	);
};

export default User;
