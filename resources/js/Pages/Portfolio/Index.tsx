import { PortfolioProvider } from "@/features/portfolio/contexts/portfolio-context";
import PortfolioLayout from "@/layouts/PortfolioLayout";
import AboutSection from "@/features/portfolio/sections/AboutSection";
import OverviewSection from "@/features/portfolio/sections/OverviewSection";
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
        <PortfolioLayout>{page}</PortfolioLayout>
    </PortfolioProvider>
);

export default Home;
