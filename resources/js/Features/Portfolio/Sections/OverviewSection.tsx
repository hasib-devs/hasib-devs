import FlutterIcon from "@/icons/FlutterIcon";
import GulpIcon from "@/icons/GulpIcon";
import ScssIcon from "@/icons/ScssIcon";
import WebpackIcon from "@/icons/WebpackIcon";
import React from "react";
import {
    FaCss3,
    FaGit,
    FaGitAlt,
    FaHtml5,
    FaJs,
    FaLaravel,
    FaNodeJs,
    FaNpm,
    FaPhp,
    FaReact,
    FaVuejs,
} from "react-icons/fa6";

const OverviewSection = () => {
    return (
        <section className="p-14">
            <h3 className="text-3xl">What I do</h3>
            <p className="mt-4">
                I have more than 5 year's experience building website for
                clients all over the world. <br /> Below is a quick overview of
                my main technical skill sets and technologies I use.
            </p>

            <div className="mt-10">
                <div className="grid  xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6">
                    <div className="">
                        <div className="flex items-center gap-2">
                            <FaJs className="text-3xl text-[#f7df1e]" />
                        </div>
                        <h4 className="text-lg my-3 font-semibold">
                            JavaScript
                        </h4>
                        <p>
                            JavaScript is my first choice. I know JavaScript
                            more than any other programming language. And I love
                            JavaScript because JavaScript is everywhere. We can
                            make both frontend and backend in one language. And
                            also native-like mobile apps. Not only that, with
                            the help of Node.js we can even use JS into IoT
                            devices like Raspberry pi or Arduino.{" "}
                        </p>
                    </div>
                    <div className="">
                        <div className="flex items-center gap-2">
                            <FaReact className="text-3xl text-[#62d4fa]" />
                            <FaVuejs className="text-3xl text-[#41b883]" />
                        </div>

                        <h4 className="text-lg my-3 font-semibold">
                            React &amp; Vue
                        </h4>
                        <p>
                            To be honest, I like Vue.js over React because of
                            the way it separates the logic in a component and is
                            also very easy to manage global state. However,
                            React was the first front-end framework I learned.
                            But, I love both of those including jQuery.
                        </p>
                    </div>
                    <div className="">
                        <div className="flex items-center gap-2">
                            <FaNodeJs className="text-3xl text-[#3c873a]" />
                        </div>
                        <h4 className="text-lg my-3 font-semibold">Node JS</h4>
                        <p>
                            Now, this is the point where Javascript achieves
                            superpower. We can build both frontend and backend
                            in a single language. And also can be installed in
                            some of the popular IoT devices like Raspberry Pi or
                            Arduino. Emagine One day we will program Javascript
                            code in robotics.
                        </p>
                    </div>
                    <div className="">
                        <div className="flex items-center">
                            <div className="flex items-center gap-2">
                                <FaNpm className="text-3xl text-[#cb3837]" />
                                <WebpackIcon className="text-3xl" />
                                <GulpIcon className="w-4 text-[#cf4647]" />
                            </div>
                        </div>
                        <h4 className="text-lg my-3 font-semibold">
                            Npm, Webpack &amp; Gulp
                        </h4>
                        <p>
                            The package manager for Node JS is very good. And
                            Webpack and Gulp is the most popular JavaScript
                            bundler now a day. Both have very different and
                            manageable ways to build production-ready and also
                            developer-friendly workflow.
                        </p>
                    </div>
                    <div className="">
                        <div className="flex items-center gap-2">
                            <FaPhp className="text-3xl text-[#8892be]" />
                            <FaLaravel className="text-3xl text-[#ff2d20]" />
                        </div>
                        <h4 className="text-lg my-3 font-semibold">
                            PHP &amp; Laravel
                        </h4>
                        <p>
                            Besides frontend design and development I also
                            explored the backend. But, first I learned the way
                            Node.js server works. The MVC design pattern
                            authentication and authorization system. Connecting
                            and managing Database Etc. Then I switched to PHP
                            Laravel framework and fallen in love with it.{" "}
                        </p>
                    </div>
                    <div className="">
                        <div className="flex items-center gap-2">
                            <FaHtml5 className="text-3xl text-[#e34f26]" />
                            <FaCss3 className="text-3xl text-[#264de4]" />
                            <ScssIcon className="w-10" />
                        </div>
                        <h4 className="text-lg my-3 font-semibold">
                            HTML, CSS &amp; SCSS
                        </h4>
                        <p>
                            HTML and CSS are essential for web design and
                            development. I have very strong understanding of
                            html, css and SCSS preprocessor, flexbox, gridlayout
                            and animation as well. In real product application
                            We mostly use Bootstrap CSS or Tailwind CSS.
                        </p>
                    </div>
                    <div className="">
                        <FlutterIcon className="w-8" />
                        <h4 className="text-lg my-3 font-semibold">
                            Mobile Apps
                        </h4>
                        <p>
                            I'm a front-end developer first, so I also explore
                            some of the famous mobile app frameworks like Ionic,
                            React Native and Flutter. I personally like Flutter.{" "}
                        </p>
                    </div>
                    <div className="">
                        <FaGitAlt className="text-3xl text-[#f34f29]" />
                        <h4 className="text-lg my-3 font-semibold">
                            Git, Github &amp; Gitlab
                        </h4>
                        <p>
                            I always use Git version control to manage and
                            deploy my application. And also I have pretty good
                            experience with Github, Gitlab and Bitbucket.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OverviewSection;
