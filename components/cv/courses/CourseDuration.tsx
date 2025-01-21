import { Clock } from "lucide-react";

interface CourseDurationProps {
	duration: string;
}

const CourseDuration = ({ duration }: CourseDurationProps) => {
	return (
		<div className="flex items-center gap-2 text-sm text-gray-600">
			<Clock className="w-4 h-4" />
			<span>{duration}</span>
		</div>
	);
};

export { CourseDuration };
