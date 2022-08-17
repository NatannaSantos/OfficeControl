import { Box, Button, Typography } from "@mui/material";
import TableExtract from "./TableExtract";
import { Link as RouterLink } from "react-router-dom";

function Finance() {

    const styles = {
        container:{
            display:"flex",
            flexDirection:"column",
            alignItems:"center"
        },
        registration: {
            width:"100vw",
            display: "flex",
            justifyContent: "space-around"
        },
        title: { marginBottom: "30px" }
    }
    return (
        <Box sx={styles.container}>
            <Typography sx={styles.title} variant="h4" component="h1">
                Extrato Financeiro
            </Typography>
            <Box sx={styles.registration}>
                <Button variant="contained" component={RouterLink} to="/app/entries">Cadastrar Entrada</Button>
                <Button variant="contained" component={RouterLink} to="/app/outputs">Cadastrar Saída</Button>
            </Box>
        </Box >
    );
}

export default Finance;