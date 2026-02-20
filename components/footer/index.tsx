import Image from "next/image";
import { SiLinkedin, SiTiktok } from "react-icons/si";

const Footer = () => {
	const socialLinks = [
		// { href: "https://www.instagram.com/pnospina/", icon: <SiInstagram className="w-6 h-6" />, label: "Instagram" },
		// { href: "https://www.facebook.com/pedronel.ospina.37?locale=es_LA", icon: <SiFacebook className="w-6 h-6" />, label: "Facebook" },
		{ href: "https://www.tiktok.com/@pedronelospina", icon: <SiTiktok className="w-6 h-6" />, label: "TikTok" },
		{ href: "https://www.linkedin.com/in/pedro-nel-ospina-51786229/", icon: <SiLinkedin className="w-6 h-6" />, label: "LinkedIn" },
	];

	return (
		<>
			<div className="md:max-h-70 pb-10 px-2 md:px-0 flex justify-center">
				<Image src="/assets/banner-wider.png" alt="footer 114" className="object-contain" width={1200} height={280} sizes="(max-width: 768px) 100vw, 1200px" />
			</div>
			<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 pb-10 px-4">
				<p className="text-center">
					Contacto:{" "}
					<a href="mailto:info@pedronelospina.com" className="hover:underline font-bold">
						info@pedronelospina.com
					</a>
				</p>
				<div className="flex gap-3">
					{socialLinks.map((social) => (
						<a
							key={social.label}
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-white text-background p-2 rounded-full hover:scale-110 transition-transform shadow-md hover:shadow-lg"
							aria-label={social.label}>
							{social.icon}
						</a>
					))}
				</div>
			</div>
		</>
	);
};
export default Footer;
