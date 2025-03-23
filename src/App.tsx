import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppThemeProvider, DrawerProvider } from "./shared/contexts";
import { MenuLateral } from "./shared/components/menu-lateral/MenuLateral";


export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <Router>

          <MenuLateral>
            <AppRoutes />
          </MenuLateral>

        </Router>
      </DrawerProvider>
    </AppThemeProvider>
  );
}


