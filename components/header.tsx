import Link from "next/link";

const Header = () => {
	return (
		<div id="navbar" className="px-5 md:px-10 py-5 w-full absolute top-0 left-0 flex gap-x-8 justify-start items-center">
			<Link className="" href="/?li=t">
				<p className="font-body text-ey-gray text-sm md:text-base font-light hover:underline">Inicio</p>
			</Link>
			<Link className="" href="/rsvp?li=t">
				<p className="font-body text-ey-gray text-sm md:text-base font-light hover:underline">RSVP</p>
			</Link>
			<Link className="" href="/registry?li=t">
				<p className="font-body text-ey-gray text-sm md:text-base font-light hover:underline">Lista de antojos</p>
			</Link>
			<Link className="" href="/faq?li=t">
				<p className="font-body text-ey-gray text-sm md:text-base font-light hover:underline">FAQ</p>
			</Link>
		</div>
	);
};
export default Header;
