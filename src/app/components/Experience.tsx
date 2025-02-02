interface ExperienceProps {
    title: string;
    company: string;
    duration: string;
    description: string;
    technologies: string[];
}

const Experience: React.FC = () => {
    const experiences: ExperienceProps[] = [
        {
            title: "Frontend Developer",
            company: "Comarch S.A",
            duration: "Jul 2022 — Present",
            description:
                "Led development of several new features in a React/TypeScript frontend for a telecommunications application. Collaborated with developers, and wrote tests to ensure quality.",
            technologies: ["React", "TypeScript", "Node.js", "GraphQL", "Redux", "Git","SVN", "Jest", "React Testing Library", "Vite", "Playwright" ,"Storybook", "CSS", "SCSS", "Scrum", "Agile"],
        },
        {
            title: "Intern",
            company: "Euvic S.A",
            duration: "April 2022 — July 2022",
            description:
                "Collaborated directly with clients to analyze requirements and adapt functionalities, enhancing problem-solving and communication skills. Gained hands-on experience with React, JavaScript, and project management tools.",
            technologies: ["React", "TypeScript", "GraphQL", "Jira"],
        },
    ];

    return (
        <section
            id="experience"
            className="bg-primary text-textLight min-h-screen font-inter px-8 py-12"
        >
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-textWhite text-center text-oldMoneyGreen">
                    Experience
                </h2>
                <div className="mt-10 space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="flex flex-col md:flex-row">
                            <div className="md:w-1/4 text-accent text-sm font-medium">
                                {exp.duration}
                            </div>
                            <div className="md:w-3/4">
                                <h3 className="text-xl font-bold text-textWhite mb-2">
                                    {exp.title} ·{" "}
                                    <span className="text-accent">{exp.company}</span>
                                </h3>
                                <p className="text-textLight mb-4">
                                    {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="border-2 rounded-2xl border-oldMoneyGreen text-textWhite px-3 py-1  text-sm shadow-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;