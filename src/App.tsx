import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes";
import { ThemeProvider } from "@emotion/react";
import { LightTheme } from "./shared/themes";




export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}


