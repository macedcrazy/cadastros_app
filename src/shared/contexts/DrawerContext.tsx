import { createContext, ReactNode, useCallback, useContext, useState } from "react";  

interface IDrawerOptions {
    icon: string;
    path: string;
    label: string;
}

interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void; // A função que vai alternar o estado do Drawer
    drawerOptions: IDrawerOptions[];
    setDrawerOptions: (newDrawerOptions: IDrawerOptions[]) => void;
}

interface AppDrawerProviderProps {
    children: ReactNode;  // Definindo o tipo de children
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
}

export const DrawerProvider: React.FC<AppDrawerProviderProps> = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false); 
    const [drawerOptions, setIsDrawerOptions] = useState<IDrawerOptions[]>([]); // Menu iniciado vazio

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(prevState => !prevState);  // Alterna o estado
    }, []);  // Apenas uma vez

    const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOptions[]) => {
        setIsDrawerOptions(newDrawerOptions);
    }, []); 

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, drawerOptions, toggleDrawerOpen, setDrawerOptions: handleSetDrawerOptions }}>
            {children}
        </DrawerContext.Provider>
    );
};
