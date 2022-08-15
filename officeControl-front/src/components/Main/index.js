import { Box, Button} from "@mui/material";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { ReactComponent as SignOutIcon } from "../../Assets/signout.svg";
import logo from "../../Assets/logo.png";

function Main({ redirectPath = "/sign-in" }){
    const navigate = useNavigate();
    const { token, signOut } = useAuth();
    if (!token) {
        return <Navigate to={redirectPath} replace />;
    }

    function handleSignOut() {
        navigate("/");
        signOut();
      }

    const styles = {
        container:{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100vw",
            padding:"20px",
            zIndex:"1",
            position:"fix",
            top:"0",

            img:{
                width:"80px",
                height:"100px"
            }
        }
    }
    
    return(
        <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={styles.container}
        >
          <img src={logo} />
          <SignOutIcon style={{ cursor: "pointer" }} onClick={handleSignOut} />
        </Box>
        <Outlet />
      </Box>

    );
}

export default Main;