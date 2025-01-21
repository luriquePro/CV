import { BookOpen } from "lucide-react";
import { Section } from "./Section";

interface AboutSectionProps {}

const AboutSection = ({}: AboutSectionProps) => {
	return (
		<Section icon={BookOpen} title="Sobre">
			<p className="text-sm sm:text-base text-gray-700 leading-relaxed">
				Desenvolvedor Full Stack com formação em Análise e Desenvolvimento de Sistemas pela Estácio e atualmente cursando Licenciatura em Computação
				na UFRPE. Especializado em desenvolvimento backend com Node.js e TypeScript, com sólida experiência em arquiteturas distribuídas e
				microsserviços. Proficiente em metodologias ágeis (Scrum, Kanban) e ferramentas de gestão como JIRA, com histórico comprovado de entrega de
				soluções escaláveis e de alta performance.
			</p>
		</Section>
	);
};

export { AboutSection };
