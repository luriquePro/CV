import { EducationUniversities } from "@/data";
import { GraduationCap } from "lucide-react";
import { Education } from "./Education";
import { Section } from "./Section";

interface EducationSectionProps {}

const EducationSection = ({}: EducationSectionProps) => {
	return (
		<Section icon={GraduationCap} title="Formação Acadêmica">
			{EducationUniversities.map((edu, index) => (
				<Education key={index} {...edu} />
			))}
		</Section>
	);
};

export { EducationSection };
