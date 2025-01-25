import { IEducation } from "@/interfaces/AppInterfaces";

interface EducationProps extends IEducation {}

const Education = ({ course, institution, period, image }: EducationProps) => {
	return (
		<div className="flex items-center gap-4 shadow-md shadow-gray-200 p-2">
			{image ? (
				<img src={image} alt={institution} className="w-16 h-16 rounded-full object-cover" />
			) : (
				<div className="w-16 h-16 rounded-full bg-black"></div>
			)}
			<div>
				<h3 className="text-base sm:text-lg font-semibold text-gray-900">{course}</h3>
				<p className="text-sm sm:text-base text-gray-700">{institution}</p>
				<p className="text-xs sm:text-sm text-gray-500">{period}</p>
			</div>
		</div>
	);
};

export { Education };
