import { ICourse, IEducation, IExperience, ILinks, IMySkills } from "@/interfaces/AppInterfaces";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const ResumeMeLinks: ILinks[] = [
	{ title: "Email", content: "luiz.prog.henri@gmail.com", icon: Mail, directTo: "mailto:luiz.prog.henri@gmail.com", color: "red" },
	{ title: "GitHub", content: "luriquePro", icon: Github, directTo: "https://github.com/luriquePro", color: "gray" },
	{ title: "LinkedIn", content: "LinkedIn", icon: Linkedin, directTo: "https://www.linkedin.com/in/luiz-henrique-039aba231/", color: "blue" },
	{
		title: "Telefone",
		content: "(81) 9 9546-9010",
		icon: Phone,
		directTo:
			"https://api.whatsapp.com/send/?phone=5581995469010&text=Ol%C3%A1%20Luiz%2C%20me%20chamo%20%3CFulano%2F%3E%20e%20vim%20aqui%20atr%C3%A1ves%20do%20seu%20Portifolio%20solicitar%20um%20servi%C3%A7o.%20Podemos%20conversar%3F&type=phone_number&app_absent=0",
		color: "green",
	},
];

export const MySkillsResume: IMySkills[] = [
	{
		title: "Backend",
		color: "green",
		skills: ["Node.js", "Express", "MongoDB", "Jest"],
	},
	{
		title: "Frontend",
		color: "blue",
		skills: ["React", "Next.js", "Tailwind", "Typescript"],
	},
	{
		title: "Banco de Dados",
		color: "purple",
		skills: ["MySQL", "PostgreSQL", "Redis", "MongoDB", "Elasticsearch", "Firebase"],
	},
	{
		title: "Outras habilidades",
		color: "red",
		skills: ["Git", "Docker"],
	},
];

export const Experiences: IExperience[] = [
	{
		company: "Stringhini",
		roles: [{ position: "Estagiário de Homologação", period: "Dez 2022 - Out 2023" }],
		description:
			"Contribuí para o gerenciamento de informações ao realizar o cadastro de produtos no banco de dados, identificar e classificar itens no sistema, além de assegurar a qualidade e precisão das informações por meio de análises detalhadas da IA. Meu trabalho garantiu a confiabilidade dos dados, possibilitando decisões estratégicas mais assertivas para os clientes.",
		skills: ["Dados", "Microsoft Office", "Excel", "Correções de Dados", "Banco de Dados", "Homologação", "Organização", "Trabalho em Equipe"],
	},
	{
		company: "Arena Fantasy",
		roles: [
			{ position: "Estágio Backend Node.js", period: "Out 2023 - Jun 2024" },
			{ position: "Desenvolvedor Jr Backend Node.js", period: "Jun 2024 - Atualmente" },
		],
		description:
			"Desempenhei um papel central no desenvolvimento e implementação do back-end de todos os projetos do Arena, abrangendo módulos como Afiliados, PWA, Backoffice, Microserviços de Email e SMS, Logs, APIs de Pagamento e Processamento de Dados em Larga Escala. Também desenvolvi integrações externas com serviços como LSSport, Paybrokers, PaguePay e Comtele, além de implementar soluções avançadas de Observabilidade e Gestão de Logs com ElasticSearch. <br /><br />Minha atuação incluiu atividades relacionadas à Arquitetura de Software, aplicação de padrões de projeto, modelagem de sistemas e integração de tecnologias como Express, Node.js, MongoDB, Redis, ElasticSearch, TypeScript, Firebase, RabbitMQ (RMQP), Docker e Kubernetes. Trabalhei em ambientes ágeis utilizando metodologias como Scrum, contribuindo para a entrega de soluções corporativas altamente escaláveis, eficientes e alinhadas às necessidades do negócio.",
		skills: [
			"Arquitetura de Software",
			"Node.js",
			"Express",
			"MongoDB",
			"Redis",
			"TypeScript",
			"ElasticSearch",
			"Firebase",
			"RabbitMQ",
			"Docker",
			"Kubernetes",
			"Scrum",
		],
	},
];

export const EducationUniversities: IEducation[] = [
	{ institution: "Estácio", course: "Análise e Desenvolvimento de Sistemas", period: "Fev 2022 - Jun 2024", image: "/education/estacio.jpg" },
	{ institution: "UFRPE", course: "Licenciatura em Computação", period: "Out 2023 - Mar 2027", image: "/education/ufrpe.jpg" },
];

export const MyCourses: ICourse[] = [
	{
		title: "Arquitetura Limpa e DDD com Node.js",
		description: "Curso avançado sobre implementação de Clean Architecture e Domain-Driven Design em aplicações Node.js",
		status: "completed",
		platform: "Udemy",
		institution: "Cod3r Cursos",
		certificateUrl: "https://udemy.com/certificate/123",
		completionDate: "2023-12-15",
		technologies: ["Node.js", "TypeScript", "DDD", "Clean Architecture", "Jest"],
		duration: "40 horas",
		isFavorite: true,
	},
	{
		title: "Microsserviços com Node.js e Kubernetes",
		description: "Desenvolvimento e deploy de microsserviços escaláveis usando Node.js e Kubernetes",
		status: "in-progress",
		platform: "Coursera",
		institution: "University of California",
		expectedCompletionDate: "2024-04-30",
		technologies: ["Node.js", "Kubernetes", "Docker", "AWS", "Microservices"],
		duration: "60 horas",
		progress: 65,
		isFavorite: true,
	},
	{
		title: "Microsserviços com Node.js e Kubernetes",
		description: "Desenvolvimento e deploy de microsserviços escaláveis usando Node.js e Kubernetes",
		status: "in-progress",
		platform: "Coursera",
		institution: "University of California",
		expectedCompletionDate: "2024-04-30",
		technologies: ["Node.js", "Kubernetes", "Docker", "AWS", "Microservices"],
		duration: "60 horas",
		isFavorite: true,
	},
	{
		title: "Advanced GraphQL with Node.js",
		description: "Curso especializado em GraphQL com foco em performance e boas práticas",
		status: "not-started",
		platform: "Pluralsight",
		institution: "Pluralsight Academy",
		expectedCompletionDate: "2024-06-15",
		technologies: ["GraphQL", "Node.js", "Apollo Server", "TypeScript"],
		duration: "30 horas",
		isFavorite: false,
	},
];
