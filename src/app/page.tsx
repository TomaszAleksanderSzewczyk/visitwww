'use client';
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Education from "@/app/components/Education";
import Projects from "@/app/components/Projects";

const Home: React.FC = () => {
    return (
        <div className="bg-primary text-textLight min-h-screen font-inter text-white bg-backgroundGray flex flex-col md:flex-row">
            <aside className="w-full md:w-1/4 bg-secondary py-8 px-6 h-auto md:h-screen sticky top-0 hidden lg:block">
                <Header />
            </aside>

            <main className="flex-1 py-8 px-6 md:px-12 space-y-12">
                <div className="block  lg:hidden static text-center">
                    <h1 className="text-6xl font-bold text-oldMoneyGreen mb-0">Tomasz Szewczyk</h1>
                </div>

                <section id="about">
                    <About />
                </section>
                <section id="education">
                    <Education />
                </section>
                <section id="experience">
                    <Experience />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="footer">
                    <Footer />
                </section>
            </main>
        </div>
    );
};

export default Home;