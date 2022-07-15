import Card from '@mui/material/Card';
import Typography from '@material-ui/core/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import { useContext } from 'react';

// context
import { DeviceContext } from "../../../Context/DeviceContext/device-context"

// styles
import useStyles from './activation-card-styles';


const CardHeader = () => {

    const classes = useStyles();
    const { deviceData, deviceState } = useContext(DeviceContext);

    return (
        <Box>
            <Grid container alignItems="center">
                <Grid item xs zeroMinWidth>
                    <Typography noWrap className={classes.headerFont}>
                     {deviceData.gateway_name}
                    </Typography>
                </Grid>
                <Grid item>
                    <Chip sx={{fontSize: "12px"}} label={deviceData.is_device_active || deviceState ? 'active' : 'Inactive' } size="small" color={deviceData.is_device_active || deviceState ? 'success' : 'error'} />
                </Grid>
            </Grid>
            <Divider sx={{ mt: 1}}/>
        </Box>
    )
}

const CardContent = () => {

    const classes = useStyles();
    const { deviceData } = useContext(DeviceContext);

    return (
        <Box>
            <Box sx={{ mt:1 }}>
                <Grid container>
                    <Grid item xs={3}>
                    <span className={classes.dataKey}>EUI</span>
                    </Grid>
                    <Grid item>
                    <span className={classes.dataValue}>: {deviceData.dev_eui}</span>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ mt:1 }}>
                <Grid container>
                    <Grid item xs={3}>
                    <span className={classes.dataKey}>Type</span>
                    </Grid>
                    <Grid item>
                    <span className={classes.dataValue}>: {deviceData.gateway_type}</span>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ mt:1 }}>
                <Grid container>
                    <Grid item xs={3}>
                    <span className={classes.dataKey}>App</span>
                    </Grid>
                    <Grid item>
                    <span className={classes.dataValue}>: {deviceData.app_name}</span>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}


const DeviceCard = () => {

    const classes = useStyles();
    const { deviceData } = useContext(DeviceContext);

    return (
        <div>
            <p style={{fontSize:17, fontWeight:500}}>{ deviceData.is_device_active ? "Device Health Information" : "Device Information" }</p>
            
            <Box sx={{ mt:1 }}>
                <Card className={classes.root} sx={{borderRadius: 2}}>
                    <CardHeader />
                    <CardContent />
                </Card>
            </Box>
        </div>
    )
}

export default DeviceCard;