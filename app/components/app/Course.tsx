import { ICourse } from "@/interfaces/AppInterfaces";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { CourseDuration } from "../cv/courses/CourseDuration";
import { CourseInstitution } from "../cv/courses/CourseInstitution";
import { CourseTitle } from "../cv/courses/CourseTitle";
import { CourseModal } from "./CourseModal";

interface CourseProps extends ICourse {}

const statusColors = {
	completed: "bg-green-100 text-green-800",
	"in-progress": "bg-yellow-100 text-yellow-800",
	"not-started": "bg-gray-100 text-gray-800",
};

const statusLabels = {
	completed: "Finalizado",
	"in-progress": "Em Andamento",
	"not-started": "Não Iniciado",
};

const Course = (courseData: CourseProps) => {
	const [showModal, setShowModal] = useState(false);

	const statusColorsMapped = statusColors[courseData.status];
	const statusLabelsMapped = statusLabels[courseData.status];

	const { institution, platform, isFavorite, title, duration } = courseData;

	return (
		<>
			<div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setShowModal(true)}>
				<div className="p-4">
					{/* Titulo */}
					<CourseTitle title={title} statusColorsMapped={statusColorsMapped} statusLabelsMapped={statusLabelsMapped} />

					{/* Instituicao e plataforma */}
					<CourseInstitution institution={institution} platform={platform} isFavorite={isFavorite} />

					<div className="flex items-center justify-between mt-3">
						<CourseDuration duration={duration} />
						<ChevronRight className="w-4 h-4 text-gray-400" />
					</div>
				</div>
			</div>

			{showModal && (
				<CourseModal {...courseData} statusColors={statusColorsMapped} statusLabels={statusLabelsMapped} onClose={() => setShowModal(false)} />
			)}
		</>
	);
};

export { Course };
