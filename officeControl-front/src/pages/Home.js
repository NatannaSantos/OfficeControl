import { Box, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AssignmentIcon from '@mui/icons-material/Assignment';
import ContactsIcon from '@mui/icons-material/Contacts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import useAuth from "../hooks/useAuth";

function Home() {

    const styles = {
        container: {
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
        },
        button: {
            width: "250px",
            margin: "10px",
            display: "flex",
            flexDirection: "column",
            
        }
    }



    return (
        <Box sx={styles.container}>

            <Button style={styles.button} variant="contained" component={RouterLink} to="/app/finance">
                <MonetizationOnIcon />
                Finanças
            </Button>
            <Button style={styles.button} variant="contained">
                <AssignmentIcon />
                Agenda de Tarefas
            </Button>
            <Button style={styles.button} variant="contained">
                <ContactsIcon />
                Agenda de Contatos
            </Button>
            <Button style={styles.button} variant="contained">
                <AccountCircleIcon />
                Funcionários
            </Button>
        </Box>

    )
}

export default Home;