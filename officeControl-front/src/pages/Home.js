import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

function Home() {

    const styles = {
        container:{
            width: "100vw",
            height:"100vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        }
    }

    return (
        <Box sx={styles.container}>
            <Box >
                <Button variant="contained" component={RouterLink} to="/app/finance">Finanças</Button>
                <Button>Agenda de Tarefas</Button>
                <Button>Agenda de Contatos</Button>
                <Button>Funcionários</Button>
            </Box>
        </Box>

    )
}

export default Home;