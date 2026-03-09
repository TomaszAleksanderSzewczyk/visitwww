import React from "react";

const About: React.FC = () => {
    return (
        <section id="about" className="bg-primary py-20">
            <div className="max-w-4xl mx-auto flex flex-col">
                <h1 className="text-4xl font-bold text-textWhite mb-8 text-center text-oldMoneyGreen">
                    About
                </h1>
                <p className="text-textLight text-left leading-relaxed">
                    Hello, my name is Tomasz Szewczyk. I am a frontend developer with extensive{" "}
                    <a
                        className="text-oldMoneyGreen hover:text-oldMoneyYellowHover"
                        href="#experience"
                    >
                        <b>experience</b>
                    </a>{" "}
                    in React, TypeScript, and Node.js, specializing in creating web applications
                    tailored to client needs. I build high-quality React components, write reliable
                    tests with Jest and React Testing Library, and care about seamless development workflows.
                </p>
                <p className="text-textLight text-left leading-relaxed mt-8">
                    I studied Computer Science at the{" "}
                    <a
                        href="https://www.polsl.pl/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-oldMoneyGreen hover:text-oldMoneyYellowHover"
                    >
                        <b>Silesian University of Technology</b>
                    </a>{" "}
                    and later pursued a Master&#39;s in Management at{" "}
                    <a
                        href="https://www.merito.pl/chorzow"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-oldMoneyGreen hover:text-oldMoneyYellowHover"
                    >
                        <b>Merito University</b>
                    </a>
                    , graduating with a grade of 5. This combination allows me to bridge
                    technical expertise with organizational and business skills.
                </p>
                <p className="text-textLight text-left leading-relaxed mt-8">
                    I spent over 3 years at{" "}
                    <a
                        href="https://comarch.pl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-oldMoneyGreen hover:text-oldMoneyYellowHover"
                    >
                        <b>Comarch</b>
                    </a>
                    {" "}developing and maintaining UIs for telecommunications applications,
                    working with clients such as Orange, Vodafone, and T-Mobile.
                </p>
                <p className="text-textLight text-left leading-relaxed mt-8">
                    Currently, I run my own sole proprietorship, providing IT services and custom
                    software solutions for businesses.
                </p>
                <p className="text-textLight text-left leading-relaxed mt-8">
                    In my spare time, I enjoy learning new technologies and languages,
                    and recording my podcast{" "}
                    <a
                        href="https://www.youtube.com/@coprzyniesieprzyszlosc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-oldMoneyGreen hover:text-oldMoneyYellowHover"
                    >
                        <b>&quot;Co przyniesie przyszłość?&quot;</b>
                    </a>
                    , available on{" "}
                    <a
                        href="https://www.youtube.com/@coprzyniesieprzyszlosc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-oldMoneyGreen hover:text-oldMoneyYellowHover"
                    >
                        <b>YouTube</b>
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://creators.spotify.com/pod/show/przyszlosc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-oldMoneyGreen hover:text-oldMoneyYellowHover"
                    >
                        <b>Spotify</b>
                    </a>.
                </p>
            </div>
        </section>
    );
};

export default About;