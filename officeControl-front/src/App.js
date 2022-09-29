import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Alert from "./components/Alert";
import { AlertProvider } from "./contexts/AlertContext";
import SignIn from "./pages/SignIn";
import { AuthProvider } from "./contexts/AuthContext";
import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Home from "./pages/Home";
import Main from "./components/Main";
import Finance from "./pages/Finance/Finance";
import Entries from "./pages/Finance/Entries";
import Outputs from "./pages/Finance/Outputs";

function App() {

    const theme = createTheme({
        palette: {
            secondary: { main: "#424445" },
            background: { default: "#FAFAFA", paper: "#FAFAFA" },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AlertProvider>
                <AuthProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<SignIn />} />
                            <Route path="/sign-up" element={<SignUp />} />
                            <Route path="app" element={<Main />}>
                                <Route path="/app/home" element={<Home />} />
                                <Route path="/app/finance" element={<Finance />} />
                                <Route path="/app/entries" element={<Entries />} />
                                <Route path="/app/outputs" element={<Outputs />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                    <Alert />
                </AuthProvider >
            </AlertProvider>
        </ThemeProvider>

    )
}

export default App;