import { createContext, FC, useState } from "react";

type ContextType = {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
};
type ProviderProps = {
    children: React.ReactNode;
    value?: ContextType;
};

export const Context = createContext<ContextType | undefined>(undefined);

export const Provider: FC<ProviderProps> = ({ children, value }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    function toggleDarkMode() {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
    }

    const contextValue: ContextType = {
        isDarkMode,
        toggleDarkMode,
        ...value,
    };

    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
