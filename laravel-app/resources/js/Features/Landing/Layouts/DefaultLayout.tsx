import { useGlobalContext } from "@/Hooks/contexts";
import { cn } from "@/Lib/Utils";
import React, { FC } from "react";
import Header from "../Sections/Header";
import Footer from "../Sections/Footer";

type Props = {
    children: React.ReactNode;
};

const DefaultLayout: FC<Props> = ({ children }) => {
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

export default DefaultLayout;
