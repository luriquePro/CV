import { MyCourses } from "@/data";
import { ICourse } from "@/interfaces/AppInterfaces";
import { Bookmark, BookOpenCheck } from "lucide-react";
import { useState } from "react";
import { Course } from "./Course";
import { Section } from "./Section";

interface CoursesSectionProps {}

const CoursesSection = ({}: CoursesSectionProps) => {
	const [showMyCoursesFavoritesOnly, setShowMyCoursesFavoritesOnly] = useState(false);
	const [MyCousesFiltered, setMyCousesFiltered] = useState<ICourse[]>(MyCourses);

	const handleMyCourses = () => {
		const isFavorite = !showMyCoursesFavoritesOnly;

		setShowMyCoursesFavoritesOnly(isFavorite);
		setMyCousesFiltered(isFavorite ? MyCourses.filter(course => course.isFavorite) : MyCourses);
	};

	return (
		<Section icon={BookOpenCheck} title="Cursos">
			<div className="flex items-end justify-end mb-6">
				<button
					onClick={handleMyCourses}
					className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-800
			`}
				>
					<Bookmark className={`w-5 h-5 ${showMyCoursesFavoritesOnly ? "fill-yellow-500 text-yellow-800" : ""}`} />
					Favoritos
				</button>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
				{MyCousesFiltered.map((course, index) => (
					<Course key={index} {...course} />
				))}
			</div>
		</Section>
	);
};

export { CoursesSection };
