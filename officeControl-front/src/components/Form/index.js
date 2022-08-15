import {Box} from "@mui/system";
import React from "react";

const styles={
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "55px",
  };

function Form({children, onSubmit}){
    return(
        <Box sx={styles} component="form" onSubmit={onSubmit}>
            {children}
        </Box>
    );
}

export default Form;