import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";  // Corrigir aqui
import { Box, ThemeProvider } from "@mui/material";
import { LightTheme, DarkTheme } from "./../themes";

interface IThemeContextData {
    themeName: 'light' | 'dark';
    toggleTheme: () => void;
}

interface AppThemeProviderProps {
    children: ReactNode;  // Definindo o tipo de children
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
    return useContext(ThemeContext);
}

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
    const [themeName, setThemeName] = useState<'light' | 'dark'>('light');  // Corrigir aqui

    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
    }, []);

    const theme = useMemo(() => {
        if (themeName === 'light') return LightTheme;

        return DarkTheme;
    }, [themeName]);

    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
