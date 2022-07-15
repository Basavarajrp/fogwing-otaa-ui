import Card from '@mui/material/Card';
import Typography from '@material-ui/core/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import { useContext } from 'react';

// style component
import useStyles from './dashboard-card-styles';

// context
import { DeviceContext } from "../../../Context/DeviceContext/device-context"

const CardHeader = () => {

    const classes = useStyles();
    const { deviceData } = useContext(DeviceContext);

    return (
        <Box>
            <Grid container alignItems="center">
                <Grid item xs zeroMinWidth>
                <Typography noWrap className={classes.headerFont}>
                    { deviceData.gateway_name }
                </Typography>
                </Grid>
                <Grid item>
                    <Chip sx={{fontSize: "12px"}} label={deviceData.is_device_active ? 'active' : 'inactive' } size="small" color={deviceData.is_device_active ? 'success' : 'error'} />
                </Grid>
            </Grid>
            <Divider sx={{ mt: 2, backgroundColor: '#cfd8dc'}}/>
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
                    <Grid item xs={5}>
                    <span className={classes.dataKey}>EUI</span>
                    </Grid>
                    <Grid item>
                    <span className={classes.dataValue}>: {deviceData.dev_eui}</span>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ mt:1 }}>
                <Grid container>
                    <Grid item xs={5}>
                    <span className={classes.dataKey}>Type</span>
                    </Grid>
                    <Grid item>
                    <span className={classes.dataValue}>: {deviceData.gateway_type}</span>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ mt:1 }}>
                <Grid container>
                    <Grid item xs={5}>
                    <span className={classes.dataKey}>App</span>
                    </Grid>
                    <Grid item>
                    <span className={classes.dataValue}>: {deviceData.app_name}</span>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ mt:1 }}>
                <Grid container>
                    <Grid item xs={5}>
                    <span className={classes.dataKey}>Battery</span>
                    </Grid>
                    <Grid item>
                    <span className={classes.dataValue}>: {deviceData.battery_level ? deviceData.battery_level : 'NA' }</span>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ mt:1 }}>
                <Grid container>
                    <Grid item xs={5}>
                    <span className={classes.dataKey}>Payload</span>
                    </Grid>
                    <Grid item>
                    <span className={classes.dataValue}>: {deviceData.payload_size ? deviceData.payload_size + ' KB' : 'NA' }</span>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ mt:1 }}>
                <Grid container>
                    <Grid item xs={5}>
                    <span className={classes.dataKey}>Frequency</span>
                    </Grid>
                    <Grid item>
                    <span className={classes.dataValue}>: {deviceData.interval ? deviceData.interval : 'NA' }</span>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ mt:1 }}>
                <Grid container>
                    <Grid item xs={5}>
                    <span className={classes.dataKey}>Data Points</span>
                    </Grid>
                    <Grid item>
                    <span className={classes.dataValue}>: {deviceData.data_points ? deviceData.data_points : 'NA' }</span>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}


const CardFooter = () => {

    const { deviceData } = useContext(DeviceContext);

    const date = new Date(deviceData.last_seen);

    return (
        <Box>
            <Divider sx={{ mt: 2, mb: 1, backgroundColor: '#cfd8dc'}}/>
            <Grid container justifyContent="flex-end" alignItems="center">
                <p style={{fontSize: 15}}><span style={{fontWeight: 550}}>Last seen: </span> {deviceData.last_seen ? date.toLocaleDateString() : 'NA' }</p>
            </Grid>
        </Box>
    )
}


const DeviceCard = () => {

    const classes = useStyles();

    return (
        <div>
            <p style={{fontWeight: 500, fontSize:17}}>
              Device Health Information
            </p>
            <Card className={classes.root} sx={{borderRadius: 2, mt:1}}>
                <CardHeader />
                <CardContent />
                <CardFooter />
            </Card>
        </div>
    )
}

export default DeviceCard;