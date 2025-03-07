import { PortfolioProvider } from "@/Features/Portfolio/Contexts/portfolio-context";
import DefaultLayout from "@/Features/Portfolio/Layouts/DefaultLayout";
import AboutSection from "@/Features/Portfolio/Sections/AboutSection";
import OverviewSection from "@/Features/Portfolio/Sections/OverviewSection";
import { Head } from "@inertiajs/react";
import { ReactNode } from "react";

const Home = () => {
    return (
        <>
            <Head>
                <title>About Me</title>
            </Head>

            <AboutSection />

            <div className="border-b border-gray-400 mx-auto w-[95%]"></div>

            <OverviewSection />
        </>
    );
};

Home.layout = (page: ReactNode) => (
    <PortfolioProvider>
        <DefaultLayout>{page}</DefaultLayout>
    </PortfolioProvider>
);

export default Home;
