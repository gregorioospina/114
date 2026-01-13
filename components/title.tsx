import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

interface ITitle {
	lineSrc: string;
	title: string;
	yOffset?: number;
}

const Title = (props: ITitle) => {
	const [width, setWidth] = useState("250px");
	const [opacity, setOpacity] = useState(0);
	const yOffset = useMemo(() => {
		return `${props.yOffset ?? 0}px`;
	}, [props]);

	const elemId = useMemo(() => props.title + "__title", [props]);

	useEffect(() => {
		setTimeout(() => {
			const elem = document.getElementById(elemId);
			if (elem) {
				setWidth(`${elem.getBoundingClientRect().width}px`);
				setOpacity(1);
			}
		}, 200);
	}, [elemId]);

	return (
		<div className="flex flex-col">
			<p id={elemId} className="text-5xl z-10 whitespace-break-spaces w-fit font-title md:text-7xl">
				{props.title}
			</p>
			<div style={{ marginTop: yOffset, width, opacity }} className="h-10 relative transition-all">
				<Image fill src={props.lineSrc} alt="line" />
			</div>
		</div>
	);
};
export default Title;
