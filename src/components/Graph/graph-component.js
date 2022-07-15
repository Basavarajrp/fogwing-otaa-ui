import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { useContext } from 'react';

// context
import { DeviceContext } from "../../Context/DeviceContext/device-context"

// apex chart
import ReactApexChart from "react-apexcharts";

// styles
import useStyles from './graph-styles';

const CardHeader = () => {

    const classes = useStyles();

    return (
        <Box>
            <Grid container alignItems="center">
                <Grid item xs zeroMinWidth>
                    <p className={classes.headerFont}>
                       Data Received 
                    </p>
                </Grid>
                <Grid item>
                    <Chip sx={{fontSize: "12px"}} label="7 days" size="small" color='primary'/>
                </Grid>
            </Grid>
        </Box>
    )
}


const CardContent = () => {

    const classes = useStyles();
    const { deviceData } = useContext(DeviceContext);

    let received_day = deviceData.graph_data.map(data => data.data_received_date)

    const SERIES = [
        {
            name: "Data points",
            data: deviceData.graph_data.map(data => data.total_data_received)
        }
    ]

    const OPTIONS = {
        xaxis: {
          categories: deviceData.graph_data.map(data => data.data_received_date),
          labels: {
            style: {
                fontSize: 15,
                fontFamily: 'Roboto'
            }
          }
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: 15,
                    fontFamily: 'Roboto'
                }
            }
        },
        stroke: {
          width: 2,
          colors: ["#0d47a1"]
        },
        chart: {
          toolbar: {
            show: false
          },
          fontFamily: "Roboto",
          background: 'white'
        },
        markers: {
            size: 4,
            shape: "circle",
            strokeColors: '#fff'
        }
    }

    return (
        <Box className={classes.chart}>
           <ReactApexChart
              options={OPTIONS}
              series={SERIES}
              type="line"
           />
        </Box>
    )
}


const DeviceGraph = () => {

    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root} sx={{mt:1, borderRadius: 2}}>
                <CardHeader />
                <CardContent />
            </Card>
        </div>
    )

}

export default DeviceGraph;