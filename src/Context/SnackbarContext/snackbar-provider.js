import React, { useState } from 'react';
import {SnackbarContext} from "./snackbar-context"

const SnackbarContextProvider = props => {

    const [snackbarData, setSnackbarData] = useState({
        open : false,
        severity: "",
        message: ""
    })

    const closeSnackbar = () => (setSnackbarData({ ...snackbarData, open:false }))

    return (
        <SnackbarContext.Provider
          value={{ snackbarData, setSnackbarData, closeSnackbar }}
        >
            {props.children}
        </SnackbarContext.Provider>
    )

}

export default SnackbarContextProvider;