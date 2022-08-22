import { Box, Button, Typography } from "@mui/material";
import TableExtract from "./TableExtract";
import { Link as RouterLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import api from "../../services/api";

function Finance() {

    const { token } = useAuth();
    const [transactions, setTransactions] = useState([]);
    const [balance,setBalance] = useState();
    let finalBalance = 0;

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        registration: {
            width: "100vw",
            display: "flex",
            justifyContent: "space-around"
        },
        title: { marginBottom: "30px" },
        finances:{
            marginBottom:"10px",
            fontSize:"30px"            
        },
        balance:{
            width:"100vw",
            fontSize :"20px",
            fontWeight:"bold",
            display: "flex",
            justifyContent:"center",
            alignItems:"center",
            padding:"10pxescritorio"
        }
    }

    useEffect(() => {
        async function loadPage() {
            if (!token) return;

            const { data: transactionsData } = await api.getTransactions(token);
            console.log("transactionsData", transactionsData);
            setTransactions(transactionsData);

            transactionsData.map(transactions => {
                if (transactions.type === 'entrada') {
                    finalBalance += transactions.value;
                } else {
                    finalBalance -= transactions.value;
                }
            })

            setBalance(finalBalance.toFixed(2));
        }
        loadPage();
    }, [token]);
    return (
        <Box sx={styles.container}>
            <Typography sx={styles.title} variant="h4" component="h1">
                Extrato Financeiro
            </Typography>
            <Box sx={styles.finances}>
                {transactions.length !== 0 ? <TableExtract transactions={transactions}/> : "Ainda não há cadastros financeiros"}
            </Box>
            <Box sx={styles.balance}>Saldo final: {balance}</Box>
            <Box sx={styles.registration}>
                <Button variant="contained" component={RouterLink} to="/app/entries">Cadastrar Entrada</Button>
                <Button variant="contained" component={RouterLink} to="/app/outputs">Cadastrar Saída</Button>
            </Box>
        </Box >
    );
}

export default Finance;