import { Experiences } from "@/data";
import { Briefcase } from "lucide-react";
import { Experience } from "./Experience";
import { Section } from "./Section";

interface ExperienceSectionProps {}

const ExperienceSection = ({}: ExperienceSectionProps) => {
	return (
		<Section icon={Briefcase} title="Experiências Profissionais">
			{Experiences.map((exp, index) => (
				<Experience key={index} {...exp} />
			))}
		</Section>
	);
};

export { ExperienceSection };
