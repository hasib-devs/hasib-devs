import { useGlobalContext } from "@/hooks/contexts";
import { cn } from "@/lib/utils";
import React, { FC } from "react";
import Header from "../features/landing/Header";
import Footer from "../features/landing/Footer";

type Props = {
    children: React.ReactNode;
};

const BlogLayout: FC<Props> = ({ children }) => {
    const { isDarkMode } = useGlobalContext();
    return (
        <>
            <div className={cn("flex flex-col min-h-dvh")}>
                <Header />
                <main className="mt-[71px]">{children}</main>
                <Footer />
            </div>
        </>
    );
};

export default BlogLayout;
