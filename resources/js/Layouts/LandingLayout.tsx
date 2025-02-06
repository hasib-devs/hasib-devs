import { useGlobalContext } from "@/Hooks/contexts";
import { cn } from "@/Lib/Utils";
import React, { FC } from "react";
import Header from "../Features/Landing/Sections/Header";
import Footer from "../Features/Landing/Sections/Footer";

type Props = {
    children: React.ReactNode;
};

const LandingLayout: FC<Props> = ({ children }) => {
    const { isDarkMode } = useGlobalContext();
    return (
        <>
            <div
                className={cn("flex flex-col min-h-dvh", {
                    dark: isDarkMode,
                })}
            >
                <Header />
                <main className="mt-[71px]">{children}</main>
                <Footer />
            </div>
        </>
    );
};

export default LandingLayout;
