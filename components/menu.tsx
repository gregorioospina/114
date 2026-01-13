import Image from "next/image";
import Link from "next/link";

interface IMenu {
	open: boolean;
	close: () => void;
}

const Menu = ({ open, close }: IMenu) => {
	const handleClose = () => {
		close();
	};

	return (
		<div
			className={[
				open ? "top-0" : "top-[100%]",
				"fixed z-40 flex left-0 justify-center items-center overflow-hidden transition-all right-0 bottom-0 backdrop-blur-lg bg-background-menu",
			].join(" ")}>
			<button className="fixed top-10 right-10" onClick={handleClose}>
				<Image src={"./assets/images/close-icon.svg"} alt="menu icon" height={20} width={20} />
			</button>
			<div className="w-1/2 max-w-40 flex flex-col items-center">
				<p className="text-2xl md:text-3xl font-semibold">Menú</p>
				<ul className="flex items-center flex-col gap-y-2 mt-5 text-lg">
					<li>
						<Link className="whitespace-nowrap" href={"/"}>
							Inicio
						</Link>
					</li>
					<li>
						<Link className="whitespace-nowrap" href={"/detalles"}>
							Antojos
						</Link>
					</li>
					<li>
						<Link className="whitespace-nowrap" href={"/rsvp"}>
							RSVP
						</Link>
					</li>
					<li>
						<Link className="whitespace-nowrap" href={"/colombia"}>
							Viaja por Colombia
						</Link>
					</li>
					<li>
						<Link className="whitespace-nowrap" href={"/bogota"}>
							Estadía en Bogota
						</Link>
					</li>
					<li>
						<Link className="whitespace-nowrap" href={"/experiencias"}>
							Lista de Experiencias
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Menu;
