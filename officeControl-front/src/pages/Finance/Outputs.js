import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import useAlert from "../../hooks/useAlert";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";

function Outputs() {

    const [formData, setFormData] = useState({
        description: "",
        value: "",
        type: ""
    });
    const { token } = useAuth();
    const { setMessage } = useAlert();
    const navigate = useNavigate();

    const styles = {
        container: {
            width:"50%",
            display: "flex",
            flexDirection: "column",
            gap:"10px"
        },
        title: { marginBottom: "30px" },
        actionsContainer: {
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
            marginTop: "30px",
            Button: {
                backgroundColor: "#383737"
            },
        },
    }
  

    function handleInputChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setMessage(null);

        if(!token) return;
    
        if (!formData?.description || !formData?.value) {
          setMessage({ type: "error", text: "Todos os campos são obrigatórios!" });
          return;
        }

        const values = formData.value;
         
        
        const value = parseFloat(values.replace(",","."));        

        
        console.log("value",value);
        console.log("token",token);
        
           
        try {
            await api.transaction({...formData,value:value, type:"saida"},token);
            navigate("/app/finance");
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
                <Typography sx={styles.title} variant="h4" component="h1">Saída</Typography>
                <TextField
                    name="description"
                    sx={styles.input}
                    label="Descrição"
                    type="text"
                    variant="outlined"
                    onChange={handleInputChange}
                    value={formData.description}
                />
                <TextField
                    name="value"
                    sx={styles.input}
                    label="Valor"
                    type="text"
                    variant="outlined"
                    onChange={handleInputChange}
                    value={formData.value}
                />

                <Box sx={styles.actionsContainer}>
                    <Link component={RouterLink} to="/app/finance">
                        <Typography>Cancelar</Typography>
                    </Link>
                    <Button variant="contained" type="submit">
                        Cadastrar saída
                    </Button>
                </Box>
            </Box>
        </Form>

    );
}


export default Outputs;