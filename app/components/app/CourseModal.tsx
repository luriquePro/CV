import { ICourse } from "@/interfaces/AppInterfaces";
import { Award, Calendar, X } from "lucide-react";
import { CourseDuration } from "../cv/courses/CourseDuration";
import { CourseInstitution } from "../cv/courses/CourseInstitution";
import { CourseTitle } from "../cv/courses/CourseTitle";

import moment from "moment";
import "moment/locale/pt-br";

moment.locale("pt-br");

interface CourseModalProps extends ICourse {
	statusColors: string;
	statusLabels: string;
	onClose: () => void;
}

const MapProgressByStatus = {
	"not-started": 0,
	"in-progress": 1,
	completed: 100,
};

const CourseModal = ({
	title,
	status,
	institution,
	platform,
	isFavorite,
	description,
	completionDate,
	expectedCompletionDate,
	duration,
	progress,
	technologies,
	certificateUrl,
	statusColors,
	statusLabels,
	onClose,
}: CourseModalProps) => {
	const isCompletedCourse = status === "completed";

	progress = progress || MapProgressByStatus[status];

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
			<div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] p-6 overflow-y-auto">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-2xl font-bold">{title}</h2>
					<button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
						<X className="w-6 h-6" />
					</button>
				</div>

				{/* Titulo */}
				<CourseTitle title={title} statusColorsMapped={statusColors} statusLabelsMapped={statusLabels} />

				{/* Instituicao e plataforma */}
				<CourseInstitution institution={institution} platform={platform} isFavorite={isFavorite} />

				{/* Descricao */}
				<p className="text-gray-600 mt-6">{description}</p>

				<div className="space-y-3 mt-6">
					{/* Data de Conclusão ou Expectativa de Conclusão */}
					{isCompletedCourse ? (
						<div className="flex items-center gap-2 text-sm text-gray-600">
							<Calendar className="w-4 h-4" />
							<span>
								Concluído em <strong>{moment(completionDate!, "YYYY-MM").format("MMM yyyy")}</strong>
							</span>
						</div>
					) : (
						<div className="flex items-center gap-2 text-sm text-gray-600">
							<Calendar className="w-4 h-4" />
							<span>
								Previsão: <strong>{moment(expectedCompletionDate!, "YYYY-MM").format("MMM yyyy")}</strong>
							</span>
						</div>
					)}

					{/* Duração */}
					<CourseDuration duration={duration} />

					{/* Progresso */}
					{!isCompletedCourse && (
						<div className="mt-4">
							<div className="flex justify-between text-sm text-gray-600 mb-1">
								<span>Progresso</span>
								<span>{progress}%</span>
							</div>
							<div className="w-full bg-gray-200 rounded-full h-2">
								<div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${progress}%` }} />
							</div>
						</div>
					)}

					{/* Tecnologias */}
					<div className="mt-4">
						<h4 className="text-sm font-medium text-gray-700 mb-2">Tecnologias:</h4>
						<div className="flex flex-wrap gap-2">
							{technologies.map(tech => (
								<span key={tech} className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
									{tech}
								</span>
							))}
						</div>
					</div>

					{/* Certificado */}
					{certificateUrl && isCompletedCourse && (
						<div className="flex items-center justify-center">
							<a
								href={certificateUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mt-4"
							>
								<Award className="w-4 h-4" />
								<span>Ver Certificado</span>
							</a>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export { CourseModal };
