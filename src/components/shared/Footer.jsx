import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-200 py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <h3 className="text-lg font-bold">Task Manager</h3>
                    <p className="text-sm">© {new Date().getFullYear()} All Rights Reserved</p>
                </div>

                <div className="flex gap-4 text-xl">
                    <a
                        href="https://www.linkedin.com/in/kawser-ferdous-safi/"
                        target="_blank"
                        className="hover:text-blue-400 transition"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        href="https://github.com/dev-kawser"
                        target="_blank"
                        className="hover:text-blue-400 transition"
                        aria-label="Github"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.facebook.com/kawserferdoussafi.03"
                        target="_blank"
                        className="hover:text-blue-400 transition"
                        aria-label="Facebook"
                    >
                        <FaFacebookF />
                    </a>
                </div>

                <div className="text-sm text-center md:text-right mt-4 md:mt-0">
                    <p>
                        Built with <span className="text-red-500">♥</span> using React
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
