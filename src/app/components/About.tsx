import React from "react";

const About: React.FC = () => {
    return (
        <section id="about" className="bg-primary py-20">
            <div className="max-w-4xl mx-auto flex flex-col">
                <h1 className="text-4xl font-bold text-textWhite mb-8 text-center text-oldMoneyGreen">
                    About
                </h1>
                <p className="text-lg text-textLight text-justify leading-relaxed">
                    Hello,<br/> My name is Tomasz Szewczyk. I am a frontend developer with extensive
                    <b>
                        <a
                            className="text-oldMoneyGreen hover:text-oldMoneyYellowHover"
                            href="#experience"
                        >
                            {" "}Experience{" "}
                        </a>
                    </b>
                    in React, TypeScript, and Node.js, specializing in creating applications tailored to client needs.
                    I have worked on feature development, building high-quality React components, and collaborating
                    with teams to deliver robust and scalable solutions. My experience also includes writing reliable tests using Jest and React Testing Library, and contributing to
                    comprehensive project documentation. Additionally, I am proficient in frontend tools like CSS/SCSS
                    and Storybook, which help ensure a seamless development workflow. I hold a Bachelor’s degree in
                    Computer Science and a Master’s in Management, allowing me to combine technical expertise with
                    organizational skills.
                </p>
                <p className="text-lg text-textLight text-justify leading-relaxed mt-6">
                    I studied Computer Science at the{" "}
                    <a
                        href="https://www.polsl.pl/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-oldMoneyGreen hover:text-oldMoneyYellowHover"
                    >
                        <b>Silesian University of Technology</b>
                    </a>{" "}
                    in the Faculty of Automatics, Electronics, and Informatics. My favorite course was TAB (Creating Database Applications). I defended my engineering thesis with a grade of 4.5. The title of my thesis was
                    &quot;Web Application to Facilitate Contact, Cooperation, and Task Outsourcing.&quot; I later
                    pursued a master’s degree in Management at{" "}
                    <a
                        href="https://www.merito.pl/chorzow"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-oldMoneyGreen hover:text-oldMoneyYellowHover"
                    >
                        <b>Merito University</b>
                    </a>
                    , graduating with a grade of 5.
                </p>
                <p className="text-lg text-textLight text-justify leading-relaxed mt-6">
                    I gained first experience as a Frontend Developer Intern during my time at{" "}
                    <a
                        href="https://www.euvic.com/pl/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-oldMoneyGreen hover:text-oldMoneyYellowHover"
                    >
                        <b>Euvic</b>
                    </a>
                    , where I worked on developing web applications using React and JavaScript. During this time, I
                    became proficient in project management tools and worked within Agile teams, which helped me
                    develop valuable collaboration and organizational skills.
                </p>
                <p className="text-lg text-textLight text-justify leading-relaxed mt-6">
                    Currently, I am working as a Frontend Developer at{" "}
                    <a
                        href="https://comarch.pl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-oldMoneyGreen hover:text-oldMoneyYellowHover"
                    >
                        <b>Comarch</b>
                    </a>
                    , where I am responsible for developing and maintaining user interfaces for telecommunications
                    applications. My role includes creating new features, fixing bugs, and ensuring that the solutions
                    meet client requirements. I have worked with major clients such as Orange, Vodafone, and T-Mobile,
                    further enhancing my technical and communication skills.
                </p>
                <p className="text-lg text-textLight text-justify leading-relaxed mt-6">
                    In my spare time, I love learning new things, especially programming and languages. I also enjoy
                    educating about cryptocurrencies and recording my podcast,{" "}
                    <a
                        href="https://www.youtube.com/@coprzyniesieprzyszlosc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-oldMoneyGreen hover:text-oldMoneyYellowHover"
                    >
                        <b>&quot;Co przyniesie przyszłość? (What the future will bring)&quot;</b>
                    </a>
                    , which is available on{" "}
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