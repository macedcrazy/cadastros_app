import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./shared/contexts";


export const App = () => {
  return (
    <AppThemeProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AppThemeProvider>
  );
}


