// general imports
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { BASE_URL } from '../../environment/environment';
import axios from "axios";

// material ui imports
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@material-ui/core/Button';
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

// context imports
import { DeviceContext } from '../../Context/DeviceContext/device-context';
import { SnackbarContext } from '../../Context/SnackbarContext/snackbar-context';

// components imports
import DeviceCard from '../../components/Cards/activation-cards/activation-card-component';
import Snackbar from '../../components/Snackbar/snackbar-component';

// images imports
import ConnectedDevice from '../../Assets/connected-device.svg';
import UnconnectedDevice from '../../Assets/unconnected-device.svg';

// styles imports
import useStyles from './activation-styles';


const Activation = props => {
    
    const classes = useStyles();

    const { deviceData, setDeviceData, deviceState, setDeviceState } = useContext(DeviceContext);
    const { setSnackbarData } = useContext(SnackbarContext)

    const [registryDevices, setRegistryDevices] = useState([])
    const [activationCode, setActivationCode] = useState("")


    // fetch all the available registry devices for search dropdown.
    useEffect(() => {

        axios
        .get(`${BASE_URL}/fwdeviceActivation/getRegistryDevices/byEdgeEUI/${props.devEUI}`)
        .then(resp => {
            if (resp.status == 200){
                setRegistryDevices(resp.data)
            } 
        })
        .catch(err => {
            setRegistryDevices([])
        })

    }, []);


    // update the device state based on the dropdown selection
    const selectedDevice = value => {
        if (value) {
            setDeviceData(value);
            setDeviceState(false)
        }
    }

    // handling the activation part.
    const handleSubmit = (e) => {

        e.preventDefault();
    
        if (activationCode == ""){
            setSnackbarData({
                message: "Please enter the activation code",
                severity: "warning",
                open: true
            })
        } else if (activationCode == deviceData.fw_activation_code) {

            const data = {
                "task": "activateedge",
                "data": {
                    "dev_eui": `${deviceData.dev_eui}`, 
                    "activation_code": `${deviceData.fw_activation_code}`,
                    "domain": "iothub.enterprise.com"
                }
            }

            axios.post(`${BASE_URL}/fwdeviceActivation/postActivation`, JSON.stringify(data))
            .then((response) => {
                if (response.status == 200) {
                setSnackbarData({
                    message: "Device activation was successfull.",
                    severity: "success",
                    open: true
                })
                setDeviceState(true)

                // remove the activation code from the text field.
                setActivationCode("")

            } else {
                setSnackbarData({
                    message: "Invalid activation code.",
                    severity: "error",
                    open: true
                })
            }
            }, (error) => {
                setSnackbarData({
                    message: "Server is not responding, please try after some time.",
                    severity: "error",
                    open: true
                })
            });
        
        } else {
            setSnackbarData({
                message: "Invalid activation code.",
                severity: "error",
                open: true
            })
        }
    }

    return (
        <Fragment>

            {/* banner image */}
            <div className={classes.image}>
                <img
                    src={ deviceState ? ConnectedDevice : UnconnectedDevice }
                    style={{ width: 300 }}
                    alt="website logo"
                />
            </div>
            
            {/* search box */}
            <div className={classes.searchBox}>
               <Autocomplete
                    InputProps={{ className: classes.textField }}
                    size="small"
                    id="highlights-demo"
                    sx={{ width: 300 }}
                    options={registryDevices}
                    getOptionLabel={(option) => option.gateway_name}
                    renderInput={(params) => (
                        <TextField 
                            className={classes.textField} {...params} 
                            label="Select the device to activate" margin="normal"
                        />
                    )}
                    onChange={(event, value) => selectedDevice(value) }
                    renderOption={(props, option, { inputValue }) => {
                        const matches = match(option.gateway_name, inputValue);
                        const parts = parse(option.gateway_name, matches);

                        return (
                        <li {...props}>
                            <div>
                            {parts.map((part, index) => (
                                <span
                                key={index}
                                style={{
                                    fontWeight: part.highlight ? 700 : 400
                                }}
                                >
                                {part.text}
                                </span>
                            ))}
                            </div>
                        </li>
                        );
                    }}
                />
            </div> 

            {/* device card */}
            <div className={classes.deviceCard}>
                <DeviceCard state={deviceState}/>
            </div>
            
            {/* device activation code form */}
            { (!deviceData.isActive && !deviceState) ? (
                <>
                    <div className={classes.activationCode}>
                        <TextField
                            className={classes.textField}
                            name='activationCode'
                            value={activationCode} 
                            id="outlined-basic" 
                            size="small" 
                            label="Enter Activation Code" 
                            variant="outlined" 
                            onChange={ (e) => {
                                setActivationCode(e.target.value)
                            }}
                            InputProps={ classes.textField }
                        />
                    </div>

                    <div className={classes.button}>
                            <Button 
                            variant="contained" 
                            size="small" 
                            color="primary" 
                            onClick={handleSubmit}
                            >
                                Activate
                            </Button>
                    </div>

                    <div className={classes.footerText}>
                       <p style={{fontWeight: "bold"}}>You agree that once device activated, it cannot be reverted back to inactive state.</p>
                    </div>

                </>
                ) : (
                <div className={classes.footerText}>
                    <p style={{fontWeight: "bold", fontSize:14}}>Device activated successfully.</p>
                </div>
            ) }

            {/* snackbar */}
            <Snackbar />

        </Fragment>
    )
}

export default Activation;