import Image from "next/image";

const Footer = () => {
	return (
		<>
			<div className="md:max-h-70 pb-10 px-2 md:px-0 flex justify-center">
				<Image src="/assets/banner-wider.png" alt="footer 114" className="object-contain" width={1200} height={280} sizes="(max-width: 768px) 100vw, 1200px" />
			</div>
			<div className="text-center pb-10">
				<p>
					Contacto:{" "}
					<a href="mailto:ospina.pedronel@gmail.com" className="hover:underline font-bold">
						ospina.pedronel@gmail.com
					</a>
				</p>
			</div>
		</>
	);
};
export default Footer;
