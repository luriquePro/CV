import { MySkillsResume } from "@/data";
import { Code2, CodeSquareIcon } from "lucide-react";
import { Skills } from "../cv/Skills";
import { Section } from "./Section";

interface SkillsSectionsProps {}

const SkillsSections = ({}: SkillsSectionsProps) => {
	return (
		<Section icon={CodeSquareIcon} title="Habilidades">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
				{MySkillsResume.map((skill, index) => (
					<Skills key={index} icon={Code2} title={skill.title} skills={skill.skills} color={skill.color} />
				))}
			</div>
		</Section>
	);
};

export { SkillsSections };
