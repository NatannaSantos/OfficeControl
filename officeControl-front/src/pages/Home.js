import { Box, Button, Typography } from "@mui/material";

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
                <Button >Finanças</Button>
                <Button>Agenda de Tarefas</Button>
                <Button>Agenda de Contatos</Button>
                <Button>Funcionários</Button>
            </Box>
        </Box>

    )
}

export default Home;