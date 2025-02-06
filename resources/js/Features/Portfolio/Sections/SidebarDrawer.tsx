import { cn } from "@/Lib/Utils";
import { Link } from "@inertiajs/react";
import { FC } from "react";
import {
    FaGithub,
    FaFacebookF,
    FaTwitter,
    FaStackOverflow,
    FaUser,
    FaFileAlt,
    FaLaptopCode,
    FaBlog,
    FaEnvelope,
    FaAdjust,
} from "react-icons/fa";
import { usePortfolio } from "../Hooks/contexts";
import { useGlobalContext } from "@/Hooks/contexts";

type Props = {};

const SidebarDrawer: FC<Props> = ({}) => {
    const { isSidebarOpen, setIsSidebarOpen } = usePortfolio();

    const { isDarkMode, toggleDarkMode } = useGlobalContext();
    return (
        <>
            <header
                id="sidebar_header"
                className={cn(
                    "lg:relative lg:translate-x-0 absolute transform custom-scrollbar",
                    {
                        "-translate-x-full": !isSidebarOpen,
                    }
                )}
            >
                <div className="">
                    <h3 className="text-2xl text-center mt-2 mb-6 font-extrabold tracking-wide">
                        <Link href="/">Hasib.dev</Link>
                    </h3>

                    <div className="rounded-full overflow-hidden w-36 h-36 mx-auto">
                        <img src="/images/DSC_8788.jpg" alt="Hasibur Rahman" />
                    </div>

                    <p className="text-center mt-6">
                        I am a professional full-stack web developer since 2017.
                        I can design and develop any type of website, web-based
                        application using backend <strong>Node JS</strong> and
                        frontend <strong>VueJS</strong> or{" "}
                        <strong>ReactJS</strong>.
                    </p>

                    <div className="flex justify-center items-center my-4">
                        <a
                            href="https://twitter.com/Hasibur40252192"
                            target="_blank"
                            className="social-icon"
                        >
                            <FaTwitter />
                        </a>

                        <a
                            href="https://www.facebook.com/Hasibur.Rahman.web"
                            target="_blank"
                            className="social-icon"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="https://github.com/hasib-devs"
                            target="_blank"
                            className="social-icon"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://stackoverflow.com/users/16370387/hasibur-rahman"
                            target="_blank"
                            className="social-icon"
                        >
                            <FaStackOverflow />
                        </a>
                    </div>
                </div>

                <div className="border-b border-gray-400 w-11/12 my-5"></div>

                <nav className="flex flex-col text-gray-100">
                    <Link
                        href="/portfolio"
                        className="p-1 mb-1 hover:text-primary-dark transition-colors duration-300"
                    >
                        <span className="inline-block w-8 text-center">
                            <FaUser />
                        </span>
                        <span className="text-md font-semibold">About Me</span>
                    </Link>

                    {/* <Link
                    href="/portfolio"
                    className="p-1 mb-1 hover:text-primary-dark transition-colors duration-300"
                >
                    <span className="inline-block w-8 text-center">
                        <FaLaptopCode />
                    </span>
                    <span className="text-md font-semibold">Portfolio</span>
                </Link> */}

                    <Link
                        href="/portfolio/resume"
                        className="p-1 mb-1 hover:text-primary-dark transition-colors duration-300"
                    >
                        <span className="inline-block w-8 text-center">
                            <FaFileAlt />
                        </span>
                        <span className="text-md font-semibold">Resume</span>
                    </Link>

                    <Link
                        href="/portfolio/blog"
                        className="p-1 mb-1 hover:text-primary-dark transition-colors duration-300"
                    >
                        <span className="inline-block w-8 text-center">
                            <FaBlog />
                        </span>
                        <span className="text-md font-semibold">Blog</span>
                    </Link>

                    <Link
                        href="/portfolio/contact"
                        className="p-1 mb-1 hover:text-primary-dark transition-colors duration-300"
                    >
                        <span className="inline-block w-8 text-center">
                            <FaEnvelope />
                        </span>
                        <span className="text-md font-semibold">Contact</span>
                    </Link>
                </nav>

                <div className="border-b border-gray-400 w-11/12 my-5"></div>

                {/* Dark Mode */}
                <div>
                    <div className="flex gap-1 items-center">
                        <FaAdjust />
                        <span className="text-md font-semibold">
                            {isDarkMode ? "Light" : "Dark"} Mode
                        </span>
                    </div>

                    {/* <!-- Toggled switch --> */}
                    <div className="flex justify-center items-center mt-4 cursor-pointer">
                        {/* <!-- Switch Container --> */}
                        <div
                            onClick={toggleDarkMode}
                            className={cn(
                                "w-14 h-7 flex items-center rounded-full mx-3 px-1",
                                {
                                    "bg-primary": isDarkMode,
                                    "bg-navy": !isDarkMode,
                                }
                            )}
                        >
                            {/* <!-- Switch --> */}
                            <div
                                className={cn(
                                    "bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300",
                                    {
                                        "translate-x-7": isDarkMode,
                                    }
                                )}
                            ></div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Overlay */}
            {isSidebarOpen && (
                <div
                    onClick={() => setIsSidebarOpen(false)}
                    className="bg-gray-900 bg-opacity-90 fixed w-screen h-screen lg:hidden"
                ></div>
            )}
        </>
    );
};

export default SidebarDrawer;
