import MenuAlt1 from "@/icons/MenuAlt1";
import { cn } from "@/lib/utils";
import React, { FC } from "react";
import { usePortfolio } from "../features/portfolio/hooks/contexts";
import Footer from "../features/portfolio/sections/Footer";
import SidebarDrawer from "../features/portfolio/sections/SidebarDrawer";

type Props = {
    children: React.ReactNode;
};

const PortfolioLayout: FC<Props> = ({ children }) => {
    const { isSidebarOpen, setIsSidebarOpen } = usePortfolio();
    return (
        <>
            <div className={cn("flex h-screen overflow-hidden")}>
                {/* Sidebar */}
                <SidebarDrawer />

                <main className="main-content overflow-y-auto custom-scrollbar">
                    <div className="lg:hidden py-3 px-6 bg-primary dark:bg-navy flex items-center text-white">
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="p-2 ml-2 bg-gray-100 bg-opacity-10 rounded-full"
                        >
                            <MenuAlt1 />
                        </button>
                        <h1 className="text-center text-2xl flex-grow ">
                            Hasibur Rahman
                        </h1>
                    </div>

                    {children}

                    <Footer />
                </main>
            </div>
        </>
    );
};

export default PortfolioLayout;
