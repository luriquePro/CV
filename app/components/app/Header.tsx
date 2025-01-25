import { ResumeMeLinks } from "@/data";
import { AlertTriangle } from "lucide-react";
import Image from "next/image";
import { LinkWithIcon } from "../ui/LinkWithIcon";

interface HeaderProps {
	name: string;
	position: string;
}

const HeaderCV = ({ name, position }: HeaderProps) => {
	return (
		<header className="text-center mb-8 bg-white shadow-sm shadow-gray-400">
			<div className="flex justify-center items-center space-x-8 my-6 p-4">
				<div className="w-16 lg:w-24 h-16 lg:h-24 rounded-full">
					<Image src="/profile.jpg" alt="Profile Picture" width={96} height={96} className="w-full h-full object-cover rounded-full" />
				</div>
				<div>
					<h1 className="text-2xl lg:text-3xl sm:text-4xl font-bold text-gray-900 mb-1">{name}</h1>
					<h2 className="text-sm lg:text-lg sm:text-xl text-gray-500">{position}</h2>
				</div>
			</div>
			<div className="flex flex-col md:flex-row print:flex-row flex-wrap justify-start md:justify-center print:justify-center items-start md:items-center print:items-center gap-3 md:gap-6 print:gap-4 mb-4">
				{ResumeMeLinks.map((link, index) => (
					<LinkWithIcon key={index} {...link} />
				))}
			</div>
			<div className="flex justify-center items-center text-yellow-600 bg-yellow-50 p-2 rounded alert-banner no-print">
				<AlertTriangle className="h-5 w-5 mr-2" />
				<span className="text-sm sm:text-base">Portfólio - Em Fase de Construção</span>
			</div>
		</header>
	);
};

export { HeaderCV };
