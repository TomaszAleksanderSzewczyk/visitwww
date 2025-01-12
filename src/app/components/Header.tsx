'use client';
import React, { useState, useEffect } from "react";
import SocialLinks from "@/app/components/SocialLinks";

const Header: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let currentSection = "";

            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                if (sectionTop <= window.innerHeight / 2) {
                    currentSection = section.getAttribute("id") || "";
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="bg-primary text-textLight py-8 px-6 font-inter ml-20">
            <h1  className="text-4xl md:text-6xl font-bold text-oldMoneyGreen ">
                <a href= "#about">
                Tomasz Szewczyk
                </a>
            </h1>
            <h2 className="text-2xl text-textLight mt-4">Front End Engineer</h2>
            <p className="mt-4 text-textLight">
                I am building accessible, pixel-perfect experiences.
            </p>

            <nav className="mt-8">
                <ul className="flex flex-col space-y-6">
                    {[
                        { id: "about", label: "About" },
                        { id: "education", label: "Education" },
                        { id: "experience", label: "Experience" },
                        { id: "projects", label: "Projects" },
                    ].map((item) => (
                        <li
                            key={item.id}
                            className={`relative group ${
                                activeSection === item.id ? "text-accent" : ""
                            }`}
                        >
                            <a
                                href={`#${item.id}`}
                                className="flex items-center hover:text-accent hover:text-oldMoneyYellowHover "
                            >
                                <span
                                    className={` relative before:content-[''] before:bg-oldMoneyGreen before:block before:w-12 before:h-px before:transition-all before:duration-300 before:ease-in-out before:group-hover:w-20 ${
                                        activeSection === item.id
                                            ? "before:w-20 before:bg-accent bg-oldMoneyGreen"
                                            : "before:w-12"
                                    }`}
                                ></span>
                                <span className="ml-4 uppercase tracking-widest font-semibold">
                                    {item.label}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
                <SocialLinks />
            </nav>
        </header>
    );
};

export default Header;