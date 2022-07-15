import React, { useContext } from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

// context
import { SnackbarContext } from "../../Context/SnackbarContext/snackbar-context";


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomizedSnackbar = () => {

    const { snackbarData, closeSnackbar } = useContext(SnackbarContext)

    return (
        <Stack spacing={2} sx={{ width: "100%" }}>
            <Snackbar 
                open={snackbarData.open} 
                autoHideDuration={6000} 
                onClose={closeSnackbar}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
            >
              <Alert onClose={closeSnackbar} severity={snackbarData.severity} sx={{ width: "100%" }}>
                { snackbarData.message }
              </Alert>
            </Snackbar>
        </Stack>
    );
};


export default CustomizedSnackbar;


