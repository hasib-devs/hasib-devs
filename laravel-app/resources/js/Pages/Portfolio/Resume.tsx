import { PortfolioProvider } from "@/Features/Portfolio/Contexts/portfolio-context";
import DefaultLayout from "@/Features/Portfolio/Layouts/DefaultLayout";
import { Head } from "@inertiajs/react";
import { ReactNode } from "react";
import {
    FaEnvelopeSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaMapMarkedAlt,
    FaPhoneSquare,
    FaTwitterSquare,
} from "react-icons/fa";
import { FaFilePdf, FaGlobe } from "react-icons/fa6";

const Resume = () => {
    return (
        <>
            <Head>
                <title>Resume</title>
            </Head>
            <div>
                <div className="text-center p-10 bg-gray-10 dark:bg-black">
                    <h2 className="text-2xl mb-6">Online Resume</h2>
                    <div className="flex items-center justify-center gap-1">
                        <a
                            href="/files/Hasibur-Rahman.pdf"
                            target="_blank"
                            className="px-5 py-2 rounded my-1 inline-flex items-center text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
                        >
                            <FaFilePdf className="mr-2" />
                            View Online
                        </a>
                        <a
                            href="/portfolio/resume/download"
                            className="px-5 py-2 rounded my-1 inline-flex items-center text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
                        >
                            <FaFilePdf className="mr-2" />
                            Download PDF
                        </a>
                    </div>
                </div>

                {/* <!-- Resume --> */}

                <div className="p-10">
                    <div className="text-sm" id="resume-container">
                        {/* <!-- Print container --> */}
                        <div>
                            {/* <!-- Header --> */}
                            <div className="sm:flex justify-between">
                                <div>
                                    <h2 className="text-3xl font-bold tracking-widest text-primary">
                                        Hasibur Rahman
                                    </h2>
                                    <p className="font-thin text-lg mt-1">
                                        Full-stack web developer
                                    </p>
                                </div>
                                <div>
                                    <ul className="sm:border-l sm:pl-6 sm:mt-0 mt-6 text-gray-600">
                                        <li className="mb-1 flex items-center">
                                            <FaPhoneSquare className="mr-2" />
                                            <a
                                                className="underline"
                                                href="tel:+8801 580 919 000"
                                            >
                                                +8801 580 919 000
                                            </a>
                                        </li>
                                        <li className="mb-1 flex items-center">
                                            <FaEnvelopeSquare className="mr-2" />
                                            <a
                                                className="underline"
                                                href="mailto:hasib.webdev@gmail.com"
                                            >
                                                hasib.webdev@gmail.com
                                            </a>
                                        </li>
                                        <li className="mb-1 flex items-center">
                                            <FaGlobe className="mr-2" />
                                            <a
                                                className="underline"
                                                href="https://hasibapp.com"
                                                target="_blank"
                                            >
                                                hasib.dev
                                            </a>
                                        </li>
                                        <li className="flex">
                                            <FaMapMarkedAlt className="mr-2" />
                                            <p>
                                                <span>315/8 Ulon, Rampura</span>{" "}
                                                <br />
                                                <span className="">
                                                    Dhaka, Bangladesh
                                                </span>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* <!-- Divider --> */}
                            <div className="border-b border-gray-300 my-6"></div>

                            {/* <!-- Bio --> */}
                            <div className="md:flex md:items-center">
                                <div className="md:w-1/5">
                                    <img
                                        className="rounded-full w-36 mx-auto"
                                        src="/images/me-croped.jpg"
                                        alt=""
                                    />
                                </div>
                                <p className="md:w-4/5 pl-4 mt-4 md:mt-0">
                                    I am a professional full-stack web developer
                                    since 2017. I can design and develop any
                                    type of website, web-based application using
                                    front-end Angular JS with Node JS or Laravel
                                    Backend.
                                    <br />
                                    Starting out at the age of 17 I never
                                    stopped learning new programming skills and
                                    languages. Early I started creating websites
                                    for curiosity and just for fun as well. And
                                    then I became a good web designer with HTML,
                                    CSS, and jQuery (jQuery was a hero!).
                                    Besides Front-end development, I also
                                    explored Backend and other non-web-only
                                    technologies. This passion has since lasted
                                    and led to my decision to work as a
                                    freelance web developer. The success and fun
                                    I have in this job are immense and really
                                    keep that passion burningly alive.
                                </p>
                            </div>

                            {/* <!-- Divider --> */}
                            <div className="border-b border-gray-300 my-6"></div>

                            {/* <!-- main content --> */}
                            <div className="lg:flex mt-10">
                                {/* <!-- Left --> */}
                                <div className="lg:w-9/12">
                                    <h3 className="text-xl border-l-4 pl-6 border-primary text-primary">
                                        Work Experiences
                                    </h3>

                                    {/* <!-- Jara IT --> */}
                                    <h4 className="text-lg font-bold mt-5">
                                        Full-stack web developer
                                    </h4>
                                    <h6 className="font-thin mb-2">
                                        At -
                                        <a
                                            href="https://999itsolution.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Jara IT
                                        </a>
                                    </h6>
                                    <p>
                                        I have been working with Jara It for
                                        more than six months. This is my
                                        first-time working experience remotely.
                                        They are very helpful and cool guys.
                                        Primarily they use Laravel for their
                                        backend and Angular JS and React JS for the
                                        front-end development.
                                    </p>
                                    <p>
                                        Some of the project I'have done with
                                        this team.
                                    </p>
                                    <ul className="list-disc pl-8 mt-4">
                                        <li>
                                            <a
                                                href="https://admin-restaurant-spa.hasib.dev"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Restaurant Adnim
                                            </a>
                                            - (Dashboard)
                                        </li>
                                        <li>
                                            <a
                                                href="https://restaurant-spa.hasib.dev"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Restaurant
                                            </a>
                                            - (Website)
                                        </li>
                                        <li>
                                            <a
                                                href="https://galaxy-app.hasib.dev"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Galaxy Ecommece
                                            </a>
                                            - (Hybrid mobile App)
                                        </li>
                                    </ul>

                                    {/* <!-- 999 It solutions --> */}
                                    <h4 className="text-lg font-bold mt-5">
                                        Front-end web developer
                                    </h4>
                                    <h6 className="font-thin mb-2">
                                        At -
                                        <a
                                            href="https://999itsolution.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            999 It Solutions
                                        </a>
                                    </h6>
                                    <p>
                                        I have been working with 999 It
                                        Solutions for more than two year. And I
                                        learned lots of things from them. Some
                                        of them are, how to work professionally,
                                        team management, and better coding
                                        structure. Primarily they uses Laravel
                                        for their backend and Angular JS for the
                                        front-end development.
                                    </p>
                                    <p>
                                        Some of the project I'have done with
                                        this team.
                                    </p>
                                    <ul className="list-disc pl-8 mt-4">
                                        <li>
                                            <a
                                                href="https://sozashop.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Sozashop
                                            </a>
                                            - (Inventory)
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.outchimp.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                OutChimp
                                            </a>
                                            - (Marketplace)
                                        </li>
                                        <li>
                                            <a
                                                href="https://wrapstock.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Wrapstock
                                            </a>
                                            - (Car wrapping company)
                                        </li>
                                    </ul>

                                    {/* <!-- Coder Eyes --> */}
                                    <h4 className="text-lg font-bold mt-5">
                                        Front-end Developer
                                    </h4>
                                    <h6 className="font-thin mb-2">
                                        At - Coder Eyes
                                    </h6>
                                    <p></p>
                                    <p>
                                        This is a very small team where I worked
                                        as a front-end developer. That was my
                                        first real-life working experience. They
                                        make templates for WordPress and some
                                        other CMS management systems.
                                    </p>
                                    <p>
                                        Some of the project I'have done with
                                        this team.
                                    </p>
                                    <ul className="list-disc pl-8 mt-4">
                                        <li>Hexa Blog - (Blog template)</li>
                                        <li>Contra - (Business template)</li>
                                        <li>Agentur - (Personal website)</li>
                                    </ul>

                                    {/* <!-- Projects --> */}
                                    <h3 className="text-xl border-l-4 pl-6 border-primary text-primary mt-10">
                                        Projects
                                    </h3>

                                    <h4 className="text-lg font-bold mt-5 mb-2">
                                        Sozashop - (Inventory)
                                    </h4>
                                    <p>
                                        This is an Inventory management
                                        application. Our team uses Laravel API
                                        for backend and Nuxt JS to manage
                                        front-end. This is the most complecated
                                        project I'have ever done. I enjoyed and
                                        learnd lots of thinks from this project.
                                    </p>

                                    <h4 className="text-lg font-bold mt-5 mb-2">
                                        OutChimp - (Marketplace)
                                    </h4>
                                    <p>
                                        This is similar to an online marketplace
                                        where a buyer can post their job offer
                                        and user can apply for the job. Our team
                                        uses Laravel API for backend and Nuxt JS
                                        to manage front-end. Here I learned how
                                        a marketplace actually works and manage
                                        multiple authenticated user.
                                    </p>

                                    <h4 className="text-lg font-bold mt-5 mb-2">
                                        Wrapmotif - (Car wrapping company)
                                    </h4>
                                    <p>
                                        This project was made for a company who
                                        wants to grow their company and satisfy
                                        their clients. This project made with
                                        Laravel jetstream for backend admin
                                        panel Nuxt JS to manage front-end.
                                    </p>
                                </div>

                                {/* <!-- Right --> */}
                                <div className="lg:w-3/12 lg:pl-8 lg:ml-8 lg:border-l mt-8 lg:mt-0">
                                    <h3 className="text-xl border-l-4 pl-4 border-primary text-primary">
                                        Skills
                                    </h3>

                                    <h4 className="text-lg font-bold mt-5 mb-2">
                                        Technical
                                    </h4>
                                    <ul>
                                        <li>JavaScript</li>
                                        <li>React/Angular</li>
                                        <li>Node.js</li>
                                        <li>PHP/Laravel</li>
                                        <li>MySQL/PostgreSQL</li>
                                        <li>Object-oriented design</li>
                                        <li>Git, Github and Gitlab</li>
                                        <li>Dart/Flutter</li>
                                    </ul>

                                    <h4 className="text-lg font-bold mt-5 mb-2">
                                        Professional
                                    </h4>
                                    <ul>
                                        <li>Effective communication</li>
                                        <li>Team player</li>
                                        <li>Strong problem solver</li>
                                        <li>Good time management</li>
                                    </ul>

                                    {/* <!-- Education --> */}
                                    <h3 className="text-xl border-l-4 pl-4 border-primary text-primary mt-8">
                                        Education
                                    </h3>
                                    <div className="mt-3">
                                        <p>HSC in Computer Operation</p>
                                        <p className="text-gray-600">
                                            Abujar Giffahri University College.
                                        </p>
                                        <p className="text-gray-500 text-xs">
                                            2017 - 2018
                                        </p>
                                    </div>
                                    <div className="mt-3">
                                        <p>SSC in Electrical</p>
                                        <p className="text-gray-600">
                                            Sherpur Technical school & College.
                                        </p>
                                        <p className="text-gray-500 text-xs">
                                            2015 - 2016
                                        </p>
                                    </div>

                                    {/* <!-- Languages --> */}
                                    <h3 className="text-xl border-l-4 pl-4 border-primary text-primary mt-8">
                                        Languages
                                    </h3>
                                    <ul className="mt-3">
                                        <li className="mt-1">
                                            Bangla{" "}
                                            <span className="text-gray-500">
                                                (Native)
                                            </span>
                                        </li>
                                        <li className="mt-1">
                                            English{" "}
                                            <span className="text-gray-500">
                                                (Fluent)
                                            </span>
                                        </li>
                                        <li className="mt-1">
                                            Hindi{" "}
                                            <span className="text-gray-500">
                                                (Fluent)
                                            </span>
                                        </li>
                                    </ul>

                                    {/* <!-- Interests --> */}
                                    <h3 className="text-xl border-l-4 pl-4 border-primary text-primary mt-8">
                                        Interests
                                    </h3>
                                    <ul className="mt-3">
                                        <li className="mt-2">Travelling</li>
                                        <li className="mt-2">Swimming</li>
                                        <li className="mt-2">Football</li>
                                    </ul>
                                </div>
                            </div>

                            {/* <!-- Divider --> */}
                            <div className="border-b border-gray-300 my-6"></div>

                            {/* <!-- Footer --> */}
                            <div className="">
                                <ul className="flex justify-center items-center">
                                    <li className="flex items-center text-gray-700">
                                        {/* <font-awesome-icon
                  class="mr-2 text-lg"
                  :icon="['fab', 'facebook-square']"
                ></font-awesome-icon> */}
                                        <FaFacebookSquare className="mr-2 text-lg" />
                                        <a
                                            href="https://www.facebook.com/Hasibur.Rahman.web"
                                            target="_blank"
                                            className="text-xs"
                                        >
                                            facebook.com/Hasibur.Rahman.web
                                        </a>
                                    </li>
                                    <li className="flex items-center text-gray-700 mx-3">
                                        {/* <font-awesome-icon
                  class="mr-2 text-lg"
                  :icon="['fab', 'github-square']"
                ></font-awesome-icon> */}
                                        <FaGithubSquare className="mr-2 text-lg" />
                                        <a
                                            href="https://github.com/hasibDev"
                                            target="_blank"
                                            className="text-xs"
                                        >
                                            github.com/hasibDev
                                        </a>
                                    </li>
                                    <li className="flex items-center text-gray-700 mx-3">
                                        {/* <font-awesome-icon
                  class="mr-2 text-lg"
                  :icon="['fab', 'twitter-square']"
                ></font-awesome-icon> */}
                                        <FaTwitterSquare className="mr-2 text-lg" />
                                        <a
                                            href="https://twitter.com/Hasibur40252192"
                                            target="_blank"
                                            className="text-xs"
                                        >
                                            twitter.com/Hasibur40252192
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Resume.layout = (page: ReactNode) => (
    <PortfolioProvider>
        <DefaultLayout>{page}</DefaultLayout>
    </PortfolioProvider>
);

export default Resume;
