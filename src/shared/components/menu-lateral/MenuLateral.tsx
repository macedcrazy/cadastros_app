import { Avatar, Box, Divider, Drawer, useTheme, List, ListItemButton, ListItemIcon, ListItemText, Icon } from "@mui/material"
import { ReactNode } from "react"

interface IMenuLateralProps {
    children: ReactNode
}
export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
    const theme = useTheme();

    return (
        <>
            <Drawer variant='permanent'>
                <Box width={theme.spacing(28)} height='100%' display='flex' flexDirection='column'>
                    <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center' >
                        <Avatar
                            src="/static/images/avatar/1.jpg"
                            sx={{
                                width: theme.spacing(12),
                                height: theme.spacing(12)
                            }}
                        />
                    </Box>

                    <Divider />

                    <Box flex={1}>
                        <List component="nav">
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>home</Icon> 
                                </ListItemIcon>
                                <ListItemText primary="Página-Inicial" />


                            </ListItemButton>

                        </List>
                    </Box>

                </Box>
            </Drawer>

            <Box height='100vh' marginLeft={theme.spacing(28)}>
                {children}
            </Box>

        </>
    )
}