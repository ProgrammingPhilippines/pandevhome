import * as React from "react";

interface ImageProps {
	src?: string;
	alt?: string;
	className?: string;
	"data-testid"?: string;
}

const NextImageMock = React.forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
	const { src, alt, className } = props;
	return <img ref={ref} src={src} alt={alt} className={className} data-testid="logo" />;
});

NextImageMock.displayName = "NextImageMock";

export default NextImageMock;
