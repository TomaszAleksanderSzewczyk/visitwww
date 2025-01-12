'use client';
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Education from "@/app/components/Education";
import Projects from "@/app/components/Projects";

const Home: React.FC = () => {
    return (
        <div className="bg-primary text-textLight min-h-screen flex font-inter text-white ">

            <aside className="w-1/4 bg-secondary py-8 px-6 h-screen sticky top-0 ">
                <Header />
            </aside>

            <main className="flex-1 py-8 px-12 ">
                <About />
                <Education/>
                <Experience />
                <Projects/>
                <Footer />

            </main>
        </div>
    );
};

export default Home;