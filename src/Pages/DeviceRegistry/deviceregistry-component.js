import React, { useState, useContext, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from '../../environment/environment';
import Grid from '@mui/material/Grid';

// styles
import useStyles from './deviceregistry-styles';

// context
import { DeviceContext } from "../../Context/DeviceContext/device-context"

// components
import Navbar from "../../components/Navbar/navbar-component"
import Footer from '../../components/Footer/footer-component';

// pages
import Activation from "../Activation/activation-component";
import Dashboard from "../Dashboard/dashboard-component";

// image
import deviceUnavailableImage from "../../Assets/device-unavailable.svg"
import { Typography } from '@material-ui/core';

const Registry = () => {

    const classes = useStyles()
    const { devEUI } = useParams();
    const [devicUnavailable, setDeviceUnavailable] = useState(false)
    const { setDeviceData, deviceData } = useContext(DeviceContext)

    useEffect(() => {

        axios
        .get(`${BASE_URL}/fwdeviceActivation/getRegistryDevice/byEdgeEUI/${devEUI}`)
        .then(resp => {
            resp.status == 200 ? setDeviceData(resp.data) : setDeviceUnavailable(true)
        })
        .catch(err => {
            setDeviceUnavailable(true)
        })

    }, [])

    return (
        <div>
            {/* navbar */}
            <Navbar title={ deviceData.is_device_active ? `${deviceData.tenant_name}` : "Fogwing Device Activation" } />

            {/* page content */}
            { 
                !devicUnavailable ? (
                <div className={classes.mainContent}>
                    { deviceData.is_device_active ? <Dashboard /> : <Activation devEUI={devEUI} /> }
                </div>
                ) : (    
                    <div>               
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            columns={{ xs: 12 }}
                            spacing={4}
                        >
                         <Grid item>
                            <img
                                src={ deviceUnavailableImage }
                                style={{ width: 120, marginTop:"50%" }}
                                alt="Device Unavailable Logo"
                            />
                          </Grid>
                          <Grid item>
                            <Typography variant="h5">
                                Device Not Found
                            </Typography>
                          </Grid>
                        </Grid>
                    </div>
                )
                    
            }

             {/* footer */}
             <Footer />
        </div>
    )
}

export default Registry;