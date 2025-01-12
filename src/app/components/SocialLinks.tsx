'use client';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const SocialLinks: React.FC = () => {
    return (
        <div className=" flex justify-center space-x-4 mt-32">
            <a
                href="https://github.com/tomaszaleksanderszewczyk"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-oldMoneyYellowHover text-oldMoneyGreen flex items-center space-x-2 text-textLight hover:text-accent transition-all duration-300"
            >
                <FaGithub size={24} />
            </a>
            <a
                href="https://linkedin.com/in/tommyszewczyk"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-oldMoneyYellowHover text-oldMoneyGreen items-center space-x-2 text-textLight hover:text-accent transition-all duration-300"
            >
                <FaLinkedin size={24} />
            </a>
            <a
                href="https://instagram.com/co_przyniesie_przyszlosc"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-oldMoneyYellowHover text-oldMoneyGreen flex items-center space-x-2 text-textLight hover:text-accent transition-all duration-300"
            >
                <FaInstagram size={24} />
            </a>
        </div>
    );
};

export default SocialLinks;