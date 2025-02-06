import useLocalstorage from "@/hooks/useLocalstorage";
import { createContext, FC, useState } from "react";

type ContextType = {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
};
type ProviderProps = {
    children: React.ReactNode;
    value?: ContextType;
};

export const GlobalContext = createContext<ContextType | undefined>(undefined);

export const GlobalCtxProvider: FC<ProviderProps> = ({ children, value }) => {
    const [isDarkMode, setIsDarkMode] = useLocalstorage("is-dark", false);

    function toggleDarkMode() {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
    }

    const contextValue: ContextType = {
        isDarkMode,
        toggleDarkMode,
        ...value,
    };

    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    );
};
