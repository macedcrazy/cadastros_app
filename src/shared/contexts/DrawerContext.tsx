import { createContext, ReactNode, useCallback, useContext, useState } from "react";  



interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
}

interface AppDrawerProviderProps {
    children: ReactNode;  // Definindo o tipo de children
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
}

export const DrawerProvider: React.FC<AppDrawerProviderProps> = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);  //mwnu inici fechado

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    }, []);


    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
            {children}
        </DrawerContext.Provider>
    );
};
