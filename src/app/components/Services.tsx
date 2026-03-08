import React from "react";

interface ServiceProps {
    title: string;
    description: string;
    price: string;
    features: string[];
    highlighted?: boolean;
}

const services: ServiceProps[] = [
    {
        title: "Full Website",
        description:
            "Complete, custom-built website tailored to your business needs. Responsive design, SEO optimization, and modern UI/UX included.",
        price: "$3,000",
        features: [
            "Custom Design",
            "Responsive Layout",
            "SEO Optimization",
            "Up to 10 Pages",
            "Contact Form",
            "Hosting Setup",
            "Performance Optimization",
            "3 Months Support",
        ],
        highlighted: true,
    },
    {
        title: "Business Card Website",
        description:
            "Professional one-page website — your digital business card. Perfect for freelancers, specialists, and small businesses.",
        price: "$800",
        features: [
            "One-Page Design",
            "Responsive Layout",
            "Contact Section",
            "Social Media Links",
            "Domain Setup",
            "Fast Delivery",
        ],
    },
    {
        title: "Web Application",
        description:
            "Simple web application with custom functionality. From dashboards to internal tools — built with modern technologies.",
        price: "from $2,500",
        features: [
            "React / Next.js",
            "TypeScript",
            "REST / GraphQL API",
            "Database Integration",
            "User Authentication",
            "Deployment & CI/CD",
        ],
    },
];

const Services: React.FC = () => {
    return (
        <section
            id="services"
            className="bg-primary text-textLight min-h-screen px-8 py-12"
        >
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-textWhite text-center text-oldMoneyGreen mb-4">
                    Services
                </h2>
                <p className="text-center text-textLight text-lg mb-12">
                    I provide full-stack IT services — from simple business card
                    websites to custom web applications. Let&apos;s build something
                    great together.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`bg-secondary rounded-lg shadow-lg p-6 flex flex-col justify-between border-2 transition-all duration-300 ${
                                service.highlighted
                                    ? "border-oldMoneyGreen scale-[1.02]"
                                    : "border-transparent hover:border-oldMoneyGreen"
                            }`}
                        >
                            <div>
                                {service.highlighted && (
                                    <span className="text-xs uppercase tracking-widest text-oldMoneyGreen font-semibold mb-2 block">
                                        Most Popular
                                    </span>
                                )}
                                <h3 className="text-2xl font-semibold text-textWhite mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-textLight mb-4 text-sm">
                                    {service.description}
                                </p>
                                <p className="text-3xl font-bold text-oldMoneyGreen mb-6">
                                    {service.price}
                                </p>
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center text-textLight text-sm"
                                        >
                                            <span className="text-oldMoneyGreen mr-2">
                                                &#10003;
                                            </span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <a
                                href="#footer"
                                className={`block text-center py-2 rounded-lg font-semibold transition-colors duration-300 ${
                                    service.highlighted
                                        ? "bg-oldMoneyGreen text-black hover:bg-oldMoneyYellowHover"
                                        : "border-2 border-oldMoneyGreen text-oldMoneyGreen hover:bg-oldMoneyGreen hover:text-black"
                                }`}
                            >
                                Get in Touch
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
