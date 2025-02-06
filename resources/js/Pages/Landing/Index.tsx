import { Button } from "@/components/shared/Button";
import { Provider } from "@/contexts/global-context";
import LandingLayout from "@/layouts/LandingLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";
import { CiHeart } from "react-icons/ci";

type Props = {};

const Landing = (props: Props) => {
    return (
        <>
            <Head>
                <title>Welcome</title>
            </Head>
            <div className="container">
                {/* Hero section */}
                <div className="py-20 flex text-center gap-4 flex-col justify-center items-center">
                    <h2 className="text-6xl font-bold">
                        Turning <span className="text-secondary">Ideas</span>{" "}
                        into <br /> Interactive Realities
                    </h2>
                    <p className="text-lg">
                        <span className="text-[1.2rem]">
                            From Vision to Code
                        </span>{" "}
                        <br /> Crafting Powerful Solutions for Web, Mobile, and
                        Desktop
                        <br />
                        Solutions That Connect, Experiences That Last.
                    </p>

                    <div className="flex gap-3">
                        <a
                            href="https://github.com/hasib-devs?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                size="lg"
                                variant="gray"
                                className="uppercase"
                            >
                                Visit Github Repos
                            </Button>
                        </a>
                        <Link href="/portfolio">
                            <Button
                                size="lg"
                                // variant="secondary"
                                className="uppercase"
                            >
                                View Portfolio
                            </Button>
                        </Link>
                    </div>
                    <Button size="sm" variant="secondary" className="uppercase">
                        <CiHeart /> Sponsor Project
                    </Button>
                </div>

                {/* Banner Section */}
                {/* <div className="py-16"></div> */}
            </div>
        </>
    );
};

Landing.layout = (page: React.ReactNode) => (
    <Provider>
        <LandingLayout>{page}</LandingLayout>
    </Provider>
);

export default Landing;
