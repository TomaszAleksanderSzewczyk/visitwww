'use client';
import React from "react";

const projects = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio showcasing my skills, projects, and experience. You are watching it now buddy :]",
        techStack: ["React", "Tailwind CSS", "Next.js"],
        link: "#about",
    },
    {
        title: "Rick & Morty Character List",
        description: "Interactive web application showcasing characters from the Rick & Morty universe with detailed information and filtering options.",
        techStack: ["React Native", "Expo", "Rick & Morty API", "CSS", "JavaScript"],
        link: "https://www.loom.com/share/a6d1e3c50e4c4bbdb771f7c68cda9d7c?sid=75296d41-0cbc-4a74-be45-9877fc3fcae4",
    },
    {
        title: "Dalam",
        description: "This is my engineering thesis project that facilitates contact, cooperation and outsourcing of the tasks.",
        techStack: ["Next.js", "MongoDB", "MaterialUI", "Vercel", "AWS Storage"],
        link: "https://www.loom.com/share/0c702b7d95c641129afba35b28c660d3?sid=d700c037-8dff-4913-988b-950cf885d103",
    },
    {
        title: "Nasa Media Library",
        description: "Unleash your inner astronaut with NASA's Media Library! Explore stunning images and more from space.",
        techStack: ["JavaScript"],
        link: "https://tomaszaleksanderszewczyk.github.io/nasa-media-library",
    },
    {
        title: "One Hand Bandit",
        description: "This is how I have learnt JavaScript. I wrote One Hand Bandit...",
        techStack: ["HTML", "CSS", "JavaScript"],
        link: "https://tomaszaleksanderszewczyk.github.io/One-Hand-Bandit/",
    }, {
        title: "Rock, Paper, Scissors!",
        description: "Simple Rock, Paper, Scissors! vs Computer 🤖",
        techStack: ["HTML", "CSS", "JavaScript"],
        link: "https://tomaszaleksanderszewczyk.github.io/Rock-paper-scissors/",
    },
    {
        title: "Spedition",
        description: "Program that finds the ways between spedition cities. Cities and distance between individual routes are in .txt file. Pair of cities should be in separated lines. Spedition ways are outputed in .txt files. It was my first academic project realized in C++ technology. It was my first academic project. It is written in Polish language. I have learned lesson from this 😃",
        techStack: ["C++"],
        link: "https://github.com/TomaszAleksanderSzewczyk/Spedition",
    },
    {
        title: "Steganography",
        description: "Encrypting data in BMP file.",
        techStack: ["C"],
        link: "https://github.com/TomaszAleksanderSzewczyk/Steganography-bmp",
    },

];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="bg-primary text-textLight min-h-screen px-8 py-12">
            <h1 className="text-4xl font-bold text-textWhite mb-8 text-oldMoneyGreen flex flex-col items-center hover">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-secondary rounded-lg shadow-lg p-6 flex flex-col justify-between border-2 hover:border-oldMoneyGreen "
                    >
                        <div>
                            <h2 className="text-2xl font-semibold text-textWhite mb-4">
                                {project.title}
                            </h2>
                            <p className="text-textLight mb-4">{project.description}</p>
                            <ul className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, i) => (
                                    <li
                                        key={i}
                                        className="px-3 py-1 bg-accent text-primary rounded-full text-sm font-medium border-oldMoneyGreen border-2"
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-4 border-b-2 rounded-ee-2xl hover:text-oldMoneyYellowHover">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent font-semibold"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;