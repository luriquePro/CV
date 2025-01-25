import { ILinks } from "@/interfaces/AppInterfaces";

interface LinkWithIconProps extends ILinks {}

const ColorMapToClassHovered = {
	red: {
		icon: "group-hover:text-red-600",
		content: "group-hover:text-black",
	},
	gray: {
		icon: "group-hover:text-gray-800",
		content: "group-hover:text-black",
	},
	blue: {
		icon: "group-hover:text-blue-700",
		content: "group-hover:text-black",
	},
	green: {
		icon: "group-hover:text-green-500",
		content: "group-hover:text-black",
	},
};

const LinkWithIcon = ({ content, directTo, icon, className, color, title }: LinkWithIconProps) => {
	const mappedColors = ColorMapToClassHovered[color];
	const Icon = icon;
	return (
		<a
			href={directTo}
			className={`flex items-center gap-2 text-gray-500 text-sm print:text-xs sm:text-base group p-1  hover:shadow-md hover:shadow-gray-200 ${className}`}
			target="_blank"
		>
			<Icon className={`h-5 w-5 transition-colors duration-300 ${mappedColors.icon}`} />
			<span className={`whitespace-nowrap print:text-xs	${mappedColors.content}`}>{content}</span>
		</a>
	);
};

export { LinkWithIcon };
