type Colors = "blue" | "green" | "purple" | "red";

export interface ISkill {
	label: string;
	color: Colors;
}

interface SkillProps extends ISkill {}

const colorsMapToClass = {
	blue: "bg-blue-500",
	green: "bg-green-500",
	purple: "bg-purple-500",
	red: "bg-red-500",
};

const Skill = ({ color, label }: SkillProps) => {
	return (
		<div className="flex items-center space-x-2">
			<span className={`w-1.5 h-1.5 rounded-full ${colorsMapToClass[color]}`}></span>
			<span className="text-sm sm:text-base">{label}</span>
		</div>
	);
};

export { Skill };
