import { createContext, FC, useState } from "react";

type PortfolioContextType = {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (value: boolean) => void;
};
type PortfolioProviderProps = {
    children: React.ReactNode;
    value?: PortfolioContextType;
};

export const PortfolioContext = createContext<PortfolioContextType | undefined>(
    undefined
);

export const PortfolioProvider: FC<PortfolioProviderProps> = ({
    children,
    value,
}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const contextValue: PortfolioContextType = {
        isSidebarOpen,
        setIsSidebarOpen,
        ...value,
    };

    return (
        <PortfolioContext.Provider value={contextValue}>
            {children}
        </PortfolioContext.Provider>
    );
};
