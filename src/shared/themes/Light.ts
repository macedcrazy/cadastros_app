
import { createTheme } from '@mui/material'; 
import { cyan, yellow } from '@mui/material/colors';

export const LightTheme = createTheme ({
    palette: {
        primary: {
            main: yellow[700],
            dark: yellow[700] ,
            light: yellow[500] ,
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: cyan[500],
            dark: yellow[400] ,
            light: yellow[300] ,
            contrastText: '#FFFFFF',

        }, 
        background: {
            paper: '#FFFFFF' ,
            default: '#f7f6f3',
        }
    }
});

