import { GlobalContext } from "@/contexts/global-context";
import { useContext } from "react";

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (context === undefined) {
        throw new Error(
            "useGlobalContext must be used within a PortfolioProvider"
        );
    }
    return context;
};
