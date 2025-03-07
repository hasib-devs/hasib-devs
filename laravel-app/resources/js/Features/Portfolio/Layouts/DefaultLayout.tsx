import { cn } from "@/Lib/Utils";
import React, { FC, useState } from "react";
import SidebarDrawer from "../Sections/SidebarDrawer";
import { usePortfolio } from "../Hooks/contexts";
import Footer from "../Sections/Footer";
import { useGlobalContext } from "@/Hooks/contexts";

type Props = {
    children: React.ReactNode;
};

const DefaultLayout: FC<Props> = ({ children }) => {
    const { isSidebarOpen, setIsSidebarOpen } = usePortfolio();
    const { isDarkMode } = useGlobalContext();
    return (
        <>
            <div
                className={cn("flex h-screen overflow-hidden", {
                    dark: isDarkMode,
                })}
            >
                {/* Sidebar */}
                <SidebarDrawer />

                <main className="main-content overflow-y-auto custom-scrollbar">
                    <div className="lg:hidden py-3 px-6 bg-primary dark:bg-navy flex items-center text-white">
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="p-2 ml-2 bg-gray-100 bg-opacity-10 rounded-full"
                        >
                            {/* <menu-icon></menu-icon> */}
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

export default DefaultLayout;
