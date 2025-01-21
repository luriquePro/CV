interface CourseTitleProps {
	title: string;
	statusColorsMapped: string;
	statusLabelsMapped: string;
}

const CourseTitle = ({ title, statusColorsMapped, statusLabelsMapped }: CourseTitleProps) => {
	return (
		<div className="flex-col items-start justify-center mb-2">
			<h3 className="text-base font-semibold truncate mb-2">{title}</h3>
			<span className={`px-2 py-0.5 rounded-full text-xs ${statusColorsMapped}`}>{statusLabelsMapped}</span>
		</div>
	);
};

export { CourseTitle };
