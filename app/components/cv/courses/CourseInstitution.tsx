import { Bookmark } from "lucide-react";

interface CourseInstitutionProps {
	institution: string;
	platform?: string;
	isFavorite: boolean;
}

const CourseInstitution = ({ institution, isFavorite, platform }: CourseInstitutionProps) => {
	return (
		<div className="flex items-center gap-2 text-sm text-gray-600 my-2">
			<Bookmark className={`w-4 h-4 ${isFavorite ? "fill-yellow-500 text-yellow-800" : ""}`} />
			<span>{institution}</span>
			{platform && (
				<>
					<span className="text-gray-400">•</span>
					<span>{platform}</span>
				</>
			)}
		</div>
	);
};

export { CourseInstitution };
