"use client";

import { AboutSection } from "@/components/app/AboutSection";
import { CoursesSection } from "@/components/app/CoursesSection";
import { EducationSection } from "@/components/app/EducationSection";
import { ExperienceSection } from "@/components/app/ExperienceSection";
import { HeaderCV } from "@/components/app/Header";
import { SkillsSections } from "@/components/app/SkillsSections";
import { Download } from "lucide-react";
import { useRef } from "react";

export default function Home() {
	const resumeRef = useRef<HTMLDivElement>(null);

	return (
		<div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
			<main ref={resumeRef} className="max-w-[790px] mx-auto bg-white rounded-lg overflow-hidden shadow-xl shadow-gray-400">
				{/* Container */}
				<div className="px-6 sm:p-8">
					{/* Header Section */}
					<HeaderCV name="Luiz Henrique" position="Desenvolvedor Full Stack" />

					{/* About Section */}
					<AboutSection />

					{/* Skills Section */}
					<SkillsSections />

					{/* Experiences Section */}
					<ExperienceSection />

					{/* Education Section */}
					<EducationSection />

					{/* Courses Section */}
					<CoursesSection />

					{/* Projects Section */}

					{/* Footer */}
					<footer className="text-center text-gray-600 text-xs sm:text-sm">
						© {new Date().getFullYear()} Luiz Henrique - Desenvolvedor Full Stack
					</footer>

					{/* Download Button */}
					<div className="w-full flex justify-center mt-4 download-button no-print">
						<button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
							<Download className="h-5 w-5 mr-2" />
							Baixar CV
						</button>
					</div>
				</div>
			</main>
		</div>
	);
}
