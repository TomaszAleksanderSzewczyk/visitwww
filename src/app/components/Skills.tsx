import React from "react";

interface SkillCategory {
    name: string;
    skills: string[];
}

const skillCategories: SkillCategory[] = [
    {
        name: "Front-End",
        skills: [
            "JavaScript", "TypeScript", "React", "Next.js", "Vue", "Nuxt",
            "Redux / Redux Toolkit", "Tailwind CSS", "Bootstrap",
            "HTML5", "CSS3", "SCSS", "GraphQL", "Vite",
        ],
    },
    {
        name: "Testing",
        skills: [
            "React Testing Library", "Jest", "Playwright", "E2E Testing",
        ],
    },
    {
        name: "Back-End / DevTools",
        skills: [
            "Node.js", "Express.js", "REST API", "Git", "GitHub", "GitLab",
            "SVN", "Webpack", "MongoDB", "Strapi",
        ],
    },
    {
        name: "Other / Soft / Tools",
        skills: [
            "SEO / Accessibility", "Figma", "Coding Best Practices", "SOLID",
            "Agile / Scrum", "VS Code", "WebStorm", "Docker",
            "GitHub Copilot", "Cursor", "Claude", "MCP Servers",
        ],
    },
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="bg-primary text-textLight px-8 py-12">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-oldMoneyGreen mb-10">
                    Key Skills
                </h2>
                <div className="space-y-8">
                    {skillCategories.map((category) => (
                        <div key={category.name}>
                            <h3 className="text-xl font-bold text-white mb-4">
                                {category.name}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="border-2 rounded-2xl border-oldMoneyGreen text-white px-4 py-1.5 text-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
