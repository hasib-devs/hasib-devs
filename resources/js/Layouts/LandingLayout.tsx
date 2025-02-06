import { useGlobalContext } from "@/hooks/contexts";
import { cn } from "@/lib/utils";
import React, { FC } from "react";
import Header from "../features/landing/sections/Header";
import Footer from "../features/landing/sections/Footer";

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
