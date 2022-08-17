import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Form from "../../components/Form";

function Outputs() {

    const [formData, setFormData] = useState({
        description: "",
        value: "",
    });

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
    return (
        <Form>
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