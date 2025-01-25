import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface SectionProps {
	icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
	title: string;
	children: React.ReactNode;
}

const Section = ({ icon, title, children }: SectionProps) => {
	const Icon = icon;
	return (
		<section className="mb-6 border border-gray-200 rounded-lg p-4 sm:p-6 bg-white">
			<h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 flex items-center">
				<Icon className="h-5 w-5 mr-2" />
				{title}
			</h2>
			<div>{children}</div>
		</section>
	);
};

export { Section };
