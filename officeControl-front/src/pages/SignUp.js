import { Box, TextField, Typography, Link, Button } from "@mui/material";
import { useState } from "react";
import Form from "../components/Form";
import Logo from "../Assets/logo.png";
import useAlert from "../hooks/useAlert";
import PasswordInput from "../components/PasswordInput";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import api from "../services/api";

function SignUp() {

  const [formData, setFormData] = useState({ companyName: "", email: "", password: "", passwordConfirmation: "" })
  const { setMessage } = useAlert();
  const navigate = useNavigate();

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

    if (
      !formData?.companyName ||
      !formData?.email ||
      !formData?.password ||
      !formData?.passwordConfirmation
    ) {
      setMessage({ type: "error", text: "Todos os campos são obrigatórios!" });
      return;
    }

    const { companyName, email, password, passwordConfirmation } = formData;

    if (password !== passwordConfirmation) {
      setMessage({ type: "error", text: "As senhas devem ser iguais!" });
      return;
    }
    try {
      await api.signUp({ companyName,email, password });
      setMessage({ type: "success", text: "Cadastro efetuado com sucesso!" });
      navigate("/");
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
          Cadastro
        </Typography>
        <TextField
          name="companyName"
          sx={styles.input}
          label="Nome da companhia"
          type="text"
          variant="outlined"
          onChange={handleInputChange}
          value={formData.companyName}
        />
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
        <PasswordInput
          name="passwordConfirmation"
          sx={styles.input}
          label="Confirme sua senha"
          onChange={handleInputChange}
          value={formData.passwordConfirmation}
        />
        <Box sx={styles.actionsContainer}>
          <Link component={RouterLink} to="/">
            <Typography>Já possuo cadastro</Typography>
          </Link>
          <Button variant="contained" type="submit">
            Cadastrar
          </Button>
        </Box>
      </Box>
    </Form>
  );
}

export default SignUp;