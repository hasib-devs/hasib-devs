import { Context } from "@/Contexts/global-context";
import { useContext } from "react";

export const useGlobalContext = () => {
    const context = useContext(Context);
    if (context === undefined) {
        throw new Error(
            "useGlobalContext must be used within a PortfolioProvider"
        );
    }
    return context;
};
