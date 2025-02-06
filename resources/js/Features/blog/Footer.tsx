import HasibDevLogo from "@/icons/HasibDevLogo";
import { Link } from "@inertiajs/react";
import { GoDot } from "react-icons/go";

const Footer = () => {
    return (
        <footer className="bg-white mt-auto">
            <div className="container py-8">
                <div className="grid grid-cols-2 gap-2">
                    <div className="">
                        <Link href="/">
                            {/* <img
                                src="/images/hasib-dev.svg"
                                alt="Hasib.dev"
                                width={150}
                            /> */}

                            <HasibDevLogo />
                        </Link>
                        <p className="mt-1.5">
                            © Copyright 2024{" "}
                            <a
                                className="text-secondary hover:text-secondary/90"
                                href="https://hasib.dev"
                            >
                                Hasib.dev
                            </a>
                            . All rights reserved.
                        </p>
                    </div>
                    <div className="flex items-end justify-end">
                        <div className="flex items-center gap-1 ">
                            <Link
                                className="text-secondary hover:text-secondary/90"
                                href="/"
                            >
                                Home
                            </Link>
                            <GoDot size={7} />
                            <Link
                                className="text-secondary hover:text-secondary/90"
                                href="/portfolio"
                            >
                                Portfolio
                            </Link>
                            <GoDot size={7} />
                            <Link
                                className="text-secondary hover:text-secondary/90"
                                href="/changelog"
                            >
                                Changelog
                            </Link>
                            <GoDot
                                className="text-secondary hover:text-secondary/90"
                                size={7}
                            />
                            <a
                                target="_blank"
                                className="text-secondary hover:text-secondary/90"
                                href="https://github.com/hasib-devs"
                            >
                                Github
                            </a>
                            <GoDot size={7} />
                            <a
                                className="text-secondary hover:text-secondary/90"
                                href="mailto:info@hasib.dev"
                            >
                                Leave Feedback
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
