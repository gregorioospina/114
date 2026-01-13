interface ScrollingTextBarProps {
	texts: string[];
}

export const ScrollingTextBar = ({ texts }: ScrollingTextBarProps) => {
	return (
		<div className="w-full h-[40px] overflow-hidden relative bg-foreground text-background flex items-center">
			<div className="animate-scroll whitespace-nowrap flex w-[125%]">
				{texts.map((text, index) => (
					<span key={`${text}-${index}`} className="inline-block px-2 font-bold uppercase">
						{text}
					</span>
				))}
				{texts.map((text, index) => (
					<span key={`${text}-${index}-duplicate`} className="inline-block px-2 font-bold uppercase">
						{text}
					</span>
				))}
			</div>
		</div>
	);
};
