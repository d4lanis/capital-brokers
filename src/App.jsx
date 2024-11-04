import "./App.css";
import { ThemeProvider } from "evergreen-ui";
import theme from "./components/theme";
import { DialogContextProvider } from "./context/Dialog";
import GlobalDialog from "./components/globalDIalog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import NotFound from "./pages/notFound";

// eslint-disable-next-line react/prop-types
function App({ props }) {
  return (

    <ThemeProvider value={theme}>
      <DialogContextProvider>
        <GlobalDialog />
        <Router>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<LandingPage {...props} />} />
          </Routes>
        </Router>
      </DialogContextProvider>
    </ThemeProvider>
  );
}

export default App;
