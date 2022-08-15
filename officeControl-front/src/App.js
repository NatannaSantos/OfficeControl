import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Alert from "./components/Alert";
import { AlertProvider } from "./contexts/AlertContext";
import SignIn from "./pages/SignIn";
import { AuthProvider } from "./contexts/AuthContext";
import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

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
                        </Routes>
                    </BrowserRouter>
                </AuthProvider >
            </AlertProvider>
        </ThemeProvider>

    )
}

export default App;