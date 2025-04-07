'use client';
import {motion} from "framer-motion";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Education from "@/app/components/Education";
import Projects from "@/app/components/Projects";

const Home: React.FC = () => {
    const sectionVariants = {
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0},
    };

    return (
        <div
            className="bg-primary text-textLight min-h-screen font-inter text-white bg-black flex flex-col md:flex-row dots-bg">
            {/* Header for larger screens */}
            <aside className="w-full md:w-1/4 bg-secondary py-8 px-6 h-auto md:h-screen sticky top-0 hidden lg:block">
                <Header/>
            </aside>

            <main className="flex-1 py-8 px-6 md:px-12 space-y-12">

                <div className="block lg:hidden static text-center">
                    <h1 className="text-6xl font-bold text-oldMoneyGreen mb-0">
                        Tomasz Szewczyk
                    </h1>
                </div>


                <motion.section
                    id="about"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.2}}
                    transition={{duration: 0.7, ease: "easeInOut"}}
                >
                    <About/>
                </motion.section>

                <motion.section
                    id="education"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.2}}
                    transition={{duration: 0.7, delay: 0.2, ease: "easeInOut"}}
                >
                    <Education/>
                </motion.section>

                <motion.section
                    id="experience"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.2}}
                    transition={{duration: 0.7, delay: 0.2, ease: "easeInOut"}}
                >
                    <Experience/>
                </motion.section>

                <motion.section
                    id="projects"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.2}}
                    transition={{duration: 0.7, delay: 0.4, ease: "easeInOut"}}
                >
                    <Projects/>
                </motion.section>

                <motion.section
                    id="footer"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.2}}
                    transition={{duration: 0.7, delay: 0.4, ease: "easeInOut"}}
                >
                    <Footer/>
                </motion.section>
            </main>
        </div>
    );
};

export default Home;