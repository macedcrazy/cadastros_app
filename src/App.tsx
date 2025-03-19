import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./shared/contexts";
import { MenuLateral } from "./shared/components/menu-lateral/MenuLateral";


export const App = () => {
  return (
    <AppThemeProvider>
      <Router>

        <MenuLateral>
          <AppRoutes />
        </MenuLateral>

      </Router>
    </AppThemeProvider>
  );
}


