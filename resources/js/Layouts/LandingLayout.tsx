import { cn } from "@/lib/utils";
import React, { FC } from "react";
import Footer from "../features/landing/Footer";
import Header from "../features/landing/Header";

type Props = {
    children: React.ReactNode;
};

const LandingLayout: FC<Props> = ({ children }) => {
    return (
        <>
            <div
                className={cn(
                    "flex flex-col min-h-dvh bg-[#f8f8f8] dark:bg-black text-gray-700"
                )}
            >
                <Header />
                <main className="mt-[71px]">{children}</main>
                <Footer />
            </div>
        </>
    );
};

export default LandingLayout;
