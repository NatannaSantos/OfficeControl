import { Box, TextField, Typography, Link, Button } from "@mui/material";
import { useState } from "react";
import Form from "../components/Form";
import Logo from "../Assets/logo.png";
import useAlert from "../hooks/useAlert";
import PasswordInput from "../components/PasswordInput";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import api from "../services/api";
import useAuth from "../hooks/useAuth";

function SignIn() {

    const { signIn } = useAuth();
    const { setMessage } = useAlert();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });

    const styles = {
      container: {
        marginTop: "180px",
        width: "460px",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        marginBottom: "20px",
        img: {
          width: "150px",
          height: "190px",
          marginBottom: "16px"
        }
      },
      title: { marginBottom: "30px" },
      dividerContainer: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        marginTop: "16px",
        marginBottom: "26px",
      },
      input: {
        marginBottom: "16px",
        width: "100%"
  
      },
      actionsContainer: {
        display: "flex",
        justifyContent: "space-evenly",
        width: "100%",
        Button: {
          backgroundColor: "#383737"
        },
      },
    };
  
    function handleInputChange(e) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  
    async function handleSubmit(e) {
      e.preventDefault();
      setMessage(null);
  
      if (!formData?.email || !formData?.password) {
        setMessage({ type: "error", text: "Todos os campos são obrigatórios!" });
        return;
      }
  
      const { email, password } = formData;
  
      try {
        const {
          data: { token },
        } = await api.signIn({ email, password });
        console.log(token);
        signIn(token);
        navigate("/app/home");
      } catch (error) {
        if (error.response) {
          setMessage({
            type: "error",
            text: error.response.data,
          });
          return;
        }
  
        setMessage({
          type: "error",
          text: "Erro, tente novamente em alguns segundos!",
        });
      }
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Box sx={styles.container}>
                <img src={Logo} />
                <Typography sx={styles.title} variant="h4" component="h1">
                    Login
                </Typography>
                <TextField
                    name="email"
                    sx={styles.input}
                    label="Email"
                    type="email"
                    variant="outlined"
                    onChange={handleInputChange}
                    value={formData.email}
                />

                <PasswordInput
                    name="password"
                    sx={styles.input}
                    label="Senha"
                    onChange={handleInputChange}
                    value={formData.password}
                />
                <Box sx={styles.actionsContainer}>
                    <Link component={RouterLink} to="/sign-up">
                        <Typography>Não possuo cadastro</Typography>
                    </Link>
                    <Button variant="contained" type="submit">
                        Entrar
                    </Button>
                </Box>
            </Box>
        </Form>
    );
}

export default SignIn;