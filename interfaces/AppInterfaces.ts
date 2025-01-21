import { ISkill } from "@/components/app/Skill";
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface IExperience {
	company: string;
	roles: IExperienceRoles[];
	description: string;
	skills: string[];
}

export interface IExperienceRoles {
	position: string;
	period: string;
}

export interface IMySkills {
	title: string;
	skills: string[];
	color: ISkill["color"];
}

export interface IEducation {
	institution: string;
	course: string;
	period: string;
	image?: string;
}

export interface ILinks {
	directTo: string;
	className?: string;
	icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
	content: string;
	title: string;
	color: "red" | "gray" | "blue" | "green";
}

export interface ICourse {
	title: string;
	description: string;
	status: CourseStatus;
	platform?: string;
	institution: string;
	certificateUrl?: string;
	completionDate?: string;
	expectedCompletionDate?: string;
	technologies: string[];
	duration: string;
	progress?: number;
	isFavorite: boolean;
}

export type CourseStatus = "in-progress" | "completed" | "not-started";
