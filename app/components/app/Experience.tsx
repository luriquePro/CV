import { IExperience } from "@/interfaces/AppInterfaces";

interface ExperienceProps extends IExperience {}

const Experience = ({ company, description, roles, skills }: ExperienceProps) => {
	return (
		<div className="mb-4 p-4 border-gray-200 border">
			<h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">{company}</h3>
			<ul className="text-sm sm:text-base text-gray-700">
				{roles.map((func, idx) => (
					<li key={idx}>
						<strong>{func.position}: </strong> {func.period}
					</li>
				))}
			</ul>
			<p className="mt-2 text-gray-700">
				<strong>Descrição: </strong>
				<span dangerouslySetInnerHTML={{ __html: description }} />
			</p>
			<p className="mt-2 text-gray-600">
				<strong>Competências:</strong> {skills.join(", ")}
			</p>
		</div>
	);
};

export { Experience };
