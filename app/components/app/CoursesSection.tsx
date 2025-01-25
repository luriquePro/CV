import { MyCourses } from "@/data";
import { BookOpenCheck, Filter, X } from "lucide-react";
import { useState } from "react";
import { Course } from "./Course";

interface CoursesSectionProps {}

const CoursesSection = ({}: CoursesSectionProps) => {
	// Pegar com unicidade as tecnologias de todos os cursos
	const courseTechnologiesFilterOptions = Array.from(new Set(MyCourses.flatMap(course => course.technologies))).sort();

	// Filtros para os cursos
	const [courseFilters, setCourseFilters] = useState({ status: "all", technologies: new Set<string>(), favorite: "all" });

	// Aplica os filtros aos cursos
	const filteredCourses = MyCourses.filter(course => {
		const { status, technologies, favorite } = courseFilters;

		const matchesStatus = status === "all" || course.status === status;
		const matchesTechnologies = technologies.size === 0 || course.technologies.some(tech => technologies.has(tech));
		const matchesFavorite = favorite === "all" || course.isFavorite === (favorite === "favorite");

		return matchesStatus && matchesTechnologies && matchesFavorite;
	});

	const [showCourseFilters, setShowCourseFilters] = useState(false);

	const toggleTechnology = (tech: string) => {
		setCourseFilters(prev => {
			const newTechnologies = new Set(prev.technologies);
			if (newTechnologies.has(tech)) {
				newTechnologies.delete(tech);
			} else {
				newTechnologies.add(tech);
			}

			return { ...prev, technologies: newTechnologies };
		});
	};

	const hasActiveFilters = courseFilters.status !== "all" || courseFilters.technologies.size > 0 || courseFilters.favorite !== "all";
	const clearFilters = () => setCourseFilters({ status: "all", technologies: new Set(), favorite: "all" });

	return (
		<section className="mb-6 border border-gray-200 rounded-lg p-4 sm:p-6 bg-white">
			<div className="relative">
				<div className="flex justify-between items-center">
					<h2 className="text-lg sm:text-xl font-bold text-gray-900 px-4 py-2 flex items-start">
						<BookOpenCheck className="h-5 w-5 mr-2" />
						Cursos
					</h2>
					{hasActiveFilters && (
						<p className="text-sm text-gray-600 mt-1">
							Mostrando {filteredCourses.length} de {MyCourses.length} cursos
						</p>
					)}
					<button
						onClick={() => setShowCourseFilters(!showCourseFilters)}
						className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
					>
						<Filter className="w-4 h-4" />
						<span>Filtros</span>
					</button>
				</div>
				{hasActiveFilters && (
					<button onClick={clearFilters} className="text-sm text-blue-600 hover:text-blue-800 transition-colors absolute right-4">
						Limpar filtros
					</button>
				)}
			</div>
			{showCourseFilters && (
				<div className="bg-white rounded-lg p-4 mb-6 mt-4 mx-4 shadow-gray-400 shadow-md">
					{/* Filtros de Select */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
						<div>
							<label htmlFor="status" className="block text-sm font-medium text-gray-800 mb-1">
								Status
							</label>
							<select
								id="status"
								value={courseFilters.status}
								onChange={e => setCourseFilters(prev => ({ ...prev, status: e.target.value }))}
								className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-6"
							>
								<option value="all">Todos</option>
								<option value="not-started">Não Iniciados</option>
								<option value="in-progress">Em Andamento</option>
								<option value="completed">Finalizados</option>
							</select>
						</div>
						<div>
							<label htmlFor="favorite" className="block text-sm font-medium text-gray-800 mb-1">
								Favoritos
							</label>
							<select
								id="favorite"
								value={courseFilters.favorite}
								onChange={e => setCourseFilters(prev => ({ ...prev, favorite: e.target.value }))}
								className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-6"
							>
								<option value="all">Todos</option>
								<option value="favorite">Favoritos</option>
								<option value="not-favorite">Não Favoritos</option>
							</select>
						</div>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-2">Tecnologias</label>
						<div className="flex flex-wrap gap-2">
							{courseTechnologiesFilterOptions.map(tech => (
								<button
									key={tech}
									onClick={() => toggleTechnology(tech)}
									className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 transition-colors ${
										courseFilters.technologies.has(tech)
											? "bg-blue-100 text-blue-800 hover:bg-blue-200"
											: "bg-gray-100 text-gray-800 hover:bg-gray-200"
									}`}
								>
									{tech}
									<X className={`w-3 h-3 ${courseFilters.technologies.has(tech) ? "text-blue-800" : "text-transparent"}`} />
								</button>
							))}
						</div>
					</div>
				</div>
			)}

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
				{filteredCourses.map((course, index) => (
					<Course key={index} {...course} />
				))}
			</div>
		</section>
	);
};

export { CoursesSection };
