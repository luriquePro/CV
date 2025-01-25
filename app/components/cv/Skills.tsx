import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { ISkill, Skill } from "../app/Skill";

interface SkillsProps {
	title: string;
	skills: string[];
	color: ISkill["color"];
	icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
}

const Skills = ({ icon, skills, title, color }: SkillsProps) => {
	const Icon = icon;
	return (
		<section className="border border-gray-200 rounded-lg p-4 sm:p-6">
			<h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 flex items-center">
				<Icon className="h-5 w-5 mr-2" />
				{title}
			</h2>
			<div className="grid grid-cols-2 gap-2">
				{skills.map((skill, index) => (
					<Skill key={index} color={color} label={skill} />
				))}
			</div>
		</section>
	);
};

export { Skills };
