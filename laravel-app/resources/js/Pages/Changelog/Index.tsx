import { Button } from "@/Components/Shared/Button";
import { Provider } from "@/Contexts/global-context";
import DefaultLayout from "@/Features/Landing/Layouts/DefaultLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Changelog = () => {
    const data = [
        {
            date: "March 3rd 2022",
            author: "Hasibur Rahman",
            changes: [
                "Project initialized with basic setup.",
                "Configured development environment with React and Node.js.",
                "Set up version control with Git and GitHub.",
            ],
            status: "In Progress",
        },
        {
            date: "April 1st 2022",
            author: "Hasibur Rahman",
            changes: [
                "Implemented responsive design for the homepage.",
                "Added navigation bar with smooth scrolling.",
                "Optimized image assets for faster loading.",
            ],
            status: "In Progress",
        },
        {
            date: "May 10th 2022",
            author: "Hasibur Rahman",
            changes: [
                "User authentication system integrated with Firebase.",
                "Added secure login and registration forms.",
                "Enabled user sessions with persistent login.",
            ],
            status: "In Progress",
        },
        {
            date: "June 20th 2022",
            author: "Hasibur Rahman",
            changes: [
                "Developed blog feature for users to post articles.",
                "Implemented rich text editor for creating blog posts.",
                "Added functionality for liking and commenting on posts.",
            ],
            status: "In Review",
        },
        {
            date: "July 14th 2022",
            author: "Hasibur Rahman",
            changes: [
                "On-load animations added to homepage.",
                "Created loading spinners for async data fetching.",
                "Improved mobile responsiveness across all pages.",
            ],
            status: "New",
        },
        {
            date: "August 5th 2022",
            author: "Hasibur Rahman",
            changes: [
                "Added email notifications for new comments and likes.",
                "Enhanced security by implementing rate limiting.",
                "Refined error handling and form validation.",
            ],
            status: "Completed",
        },
        {
            date: "September 10th 2022",
            author: "Hasibur Rahman",
            changes: [
                "Launched the MVP version for early testing.",
                "Collected user feedback on the initial release.",
                "Prepared roadmap for future features and improvements.",
            ],
            status: "Launched",
        },
    ];

    return (
        <>
            <Head>
                <title>Changelog - ProfileMe.dev</title>
                <meta
                    name="description"
                    content="All of the changes made to ProfileMe.dev since launch."
                />
            </Head>

            <div className="container pt-5">
                <h1 className="text-5xl font-bold mb-1.5">Changelog</h1>
                <p className="mb-4">
                    All of the changes made to ProfileMe.dev since launch.
                </p>

                <div className="bg-white mb-5 gap-3 rounded-lg items-center p-2.5 flex justify-between">
                    <p className="max-w-[80%]">
                        If you are a developer and would like to contribute to
                        ProfileMe.dev, please visit the GitHub repo and make a
                        pull request.
                    </p>
                    <Link href="/">
                        <Button variant="secondary">
                            <FaGithub /> Visit Github
                        </Button>
                    </Link>
                </div>

                <div className="pt-5">
                    {data.map((article) => {
                        return (
                            <article className="flex gap-x-6 flex-col md:flex-row gap-y-3 border-b pb-8 md:pb-0">
                                <div className="w-full md:w-1/4 flex flex-col border-r-0 md:border-r py-0 md:py-6">
                                    <h3 className="text-xl font-bold mb-1">
                                        {article.date}{" "}
                                    </h3>
                                    <p className="text-sm mb-0 font-[500]">
                                        Posted by{" "}
                                        <span className="text-secondary underline">
                                            {article.author}
                                        </span>
                                    </p>
                                </div>
                                <div className="w-full md:w-3/4 flex flex-col py-0 md:py-6">
                                    <div>
                                        <Button size="sm">
                                            {article.status}
                                        </Button>
                                    </div>
                                    {article.changes.map((change, index) => {
                                        return (
                                            <p
                                                className="text-sm mb-0 mt-1.5"
                                                key={index}
                                            >
                                                {change}
                                            </p>
                                        );
                                    })}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

Changelog.layout = (page: React.ReactNode) => (
    <Provider>
        <DefaultLayout>{page}</DefaultLayout>
    </Provider>
);

export default Changelog;
