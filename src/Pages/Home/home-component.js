import React, { useState, useContext } from "react"
import { BASE_URL } from '../../environment/environment';
import { useNavigate } from "react-router-dom";
import axios from "axios";

// material ui imports
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button';

// components imports
import Snackbar from '../../components/Snackbar/snackbar-component';
import Footer from "../../components/Footer/footer-component";
import Navbar from "../../components/Navbar/navbar-component";

// context imports
import { SnackbarContext } from '../../Context/SnackbarContext/snackbar-context';

// images imports
import HomeImage from '../../Assets/home.svg';

// styles
import useStyles from "./home-styles";


const Home = () => {

    const classes = useStyles();
    const [edgeEUI, setEdgeEUI] = useState("")
    const { setSnackbarData } = useContext(SnackbarContext)
    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();

        if (edgeEUI == ""){

            setSnackbarData({
                message: "Please enter device EUI.",
                severity: "warning",
                open: true
            })

        } else {

            axios
            .get(`${BASE_URL}/fwdeviceActivation/getRegistryDevice/byEdgeEUI/${edgeEUI}`)
            .then(data => {
                if (data.status == 200){
                    navigate(`/${edgeEUI}`)
                } else {
                    setSnackbarData({
                        message: "Invalid device EUI.",
                        severity: "error",
                        open: true
                    })
                }
            })
            .catch(err => {
                setSnackbarData({
                    message: "Invalid device EUI.",
                    severity: "error",
                    open: true
                })
            })
            
        }
    }

    return (
        <>
            {/* navbar */}
            <Navbar title="Fogwing Device Activation" />

            {/* main content */}
            <div className={classes.mainContent}>

                {/* banner image */}
                <div className={classes.image}>
                    <img
                        src={ HomeImage }
                        style={{ width: 300 }}
                        alt="website logo"
                    />
                </div>
                
                <div className={classes.text}>
                    <p style={{fontWeight: "bold", fontSize:14}}>Enter device EUI to select and activate.</p>
                </div>
                <div className={classes.edgeEUIField}>
                    <TextField
                        style ={{width: 300}}
                        className={classes.textField}
                        name='edgeEUI'
                        value={edgeEUI} 
                        id="outlined-basic" 
                        size="small" 
                        label="Enter Device EUI" 
                        variant="outlined" 
                        onChange={ (e) => {
                            setEdgeEUI(e.target.value)
                        }}
                        InputProps={ classes.textField }
                    />
                </div>

                <div className={classes.button}>
                    <Button 
                        variant="contained"
                        color="primary" 
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </div>
            </div>

            {/* snackbar */}
            <Snackbar key={Date.now()} />
   
            {/* footer */}
            <Footer />
        </>
    )

}

export default Home;