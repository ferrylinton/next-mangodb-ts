import { ReactNode, createContext, useContext, useState } from "react";

type AppContextType = {
    theme: string,
    setTheme: (theme: string) => void;
};

type AppProviderType = {
    children: ReactNode;
};


const AppContext = createContext<AppContextType>({
    theme: "default",
    setTheme: () => { }
});


export const useApp = () => {
    return useContext(AppContext);
}

export function AppProvider({ children }: AppProviderType) {

    const [theme, setTheme] = useState<string>("default");

    const value = {
        theme,
        setTheme
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}