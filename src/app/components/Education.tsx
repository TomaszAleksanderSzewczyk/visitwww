'use client';
import React from "react";

interface EducationProps {
    degree: string;
    institution: string;
    duration: string;
}

const Education: React.FC = () => {
    const educationData: EducationProps[] = [
        {
            degree: "English language certification",
            institution: "Private lessons",
            duration: "2024 — Present",
        },
        {
            degree: "Master's Degree in Management",
            institution: "Merito University",
            duration: "2023 — 2024",
        },
        {
            degree: "Bachelor of Science in Computer Science",
            institution: "Silesian University of Technology",
            duration: "2019 — 2023",
        },
        {
            degree: "Pupil",
            institution: "IV High School named after K.K. Baczyński",
            duration: "2015 — 2019",
        }
    ];

    return (
        <section
            id="education"
            className="bg-primary text-textLight min-h-screen font-inter px-8 py-12"
        >
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-textWhite text-center text-oldMoneyGreen">
                    Education
                </h2>
                <div className="mt-10 space-y-12">
                    {educationData.map((edu, index) => (
                        <div key={index} className="flex flex-col md:flex-row">
                            <div className="md:w-1/4 text-accent text-sm font-medium">
                                {edu.duration}
                            </div>
                            <div className="md:w-3/4">
                                <h3 className="text-xl font-bold text-textWhite mb-2">
                                    {edu.degree}
                                </h3>
                                <p className="text-textLight">
                                    {edu.institution}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;