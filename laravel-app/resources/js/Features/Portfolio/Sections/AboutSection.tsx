import { Link } from "@inertiajs/react";
import { FaArrowCircleRight, FaFileAlt } from "react-icons/fa";

const AboutSection = () => {
    return (
        <section className="p-14">
            <div className="lg:w-10/12">
                <h1 className="text-3xl font-semibold tracking-wide">
                    Hasibur Rahman
                </h1>
                <h3 className="text-lg font-thin mt-2 mb-6">
                    Full-stack web developer
                </h3>
                <p className="text-lg">
                    Starting out at the age of 17 I never stopped learning new
                    programming skills and languages. Early I started creating
                    websites for curiosity and just for fun as well. And then I
                    became a good web designer with <strong>HTML</strong>,{" "}
                    <strong>CSS</strong>, and <strong>jQuery</strong> (jQuery
                    was a hero!). Besides Front-end development, I also explored
                    Backend and other non-web-only technologies. This passion
                    has since lasted and led to my decision to work as a
                    freelance web developer. The success and fun I have in this
                    job are immense and really keep that passion burningly
                    alive.
                </p>
            </div>

            <div className="md:flex mt-10">
                <div className="md:w-7/12 pr-8 mt-5">
                    <p className="mb-4">
                        Starting web development on the frontend using modern
                        frameworks like (<strong>ReactJS</strong> and{" "}
                        <strong>Angular</strong>) I also became more and more of a
                        Backend developer with (Node JS and Laravel) frameworks.
                        I love both worlds nowadays!
                    </p>
                    <p className="mb-4">
                        Not only developing, but I'm also very good at deploying
                        web applications into Linux servers. And I have a very
                        good understanding of <strong>CI/CD</strong> pipeline
                        with Github Actions and Gitlab Runner.
                    </p>

                    <p className="mb-4">
                        Besides Developing and deploying, I explored a little
                        bit of Robotics staff. That's why I bought an Arduino
                        learning kit online. When I feel boring to code then,
                        why not make a Robot!
                    </p>

                    <p>
                        Want to know how I may help your project? Check out my
                        project
                        {/* <Link className="text-primary" to="/portfolio">portfolio</Link> */}
                        and online
                        {/* <Link className="text-primary" to="/resume">resume</Link>. */}
                    </p>

                    <div className="mt-10 flex gap-3 items-center">
                        <Link
                            className="px-5  items-center py-2 rounded inline-flex text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
                            href="/portfolio/contact"
                        >
                            <FaArrowCircleRight className="mr-2" />
                            <span>Contact me</span>
                        </Link>
                        <Link
                            className="px-5 py-2 rounded items-center inline-flex text-white bg-gray-700 hover:bg-gray-800 transition-colors duration-300"
                            href="/portfolio/resume"
                        >
                            <FaFileAlt className="mr-2" />
                            <span>View Resume</span>
                        </Link>
                    </div>
                </div>
                <div className="md:w-5/12 p-2 my-10 md:my-0">
                    <img src="/images/DSC_8784.JPG" alt="Hasibur Rahman" />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
