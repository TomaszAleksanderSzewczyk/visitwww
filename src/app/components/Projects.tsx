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
        title: "Vocadino",
        description: "Interactive language learning platform that makes mastering new languages fun and engaging.",
        techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        link: "https://www.vocadino.com/",
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
        <section id="projects" className="bg-primary text-gray-300 px-8 py-16">
            <h1 className="text-4xl font-bold text-oldMoneyGreen mb-12 text-center tracking-wide">
                Projects
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-secondary rounded-2xl p-6 flex flex-col justify-between
                            border border-oldMoneyGreen cursor-pointer no-underline"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold text-white">
                                    {project.title}
                                </h2>
                                <svg
                                    className="w-5 h-5 text-gray-600 p-0.5 rounded group-hover:text-black group-hover:bg-oldMoneyGreen transition-colors duration-200"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-5">
                                {project.description}
                            </p>
                            <ul className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, i) => (
                                    <li
                                        key={i}
                                        className="px-2.5 py-0.5 bg-gray-800/80 text-gray-300 rounded-md text-xs font-normal
                                            border border-gray-700/50"
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;