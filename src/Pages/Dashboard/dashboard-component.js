import React, { Fragment, useContext } from 'react';

// components
import DeviceCard from '../../components/Cards/dashboard-cards/dashboard-card-component'
import Footer from '../../components/Footer/footer-component'
import DeviceGraph from '../../components/Graph/graph-component'

// styles
import useStyles from "./dashboard-styles"


const Dashboard = () => {

    const classes = useStyles()

    return (
        <Fragment>

            {/* device card */}
            <div className={classes.card}>
                <DeviceCard />
            </div>

            {/* device graph */}
            <div className={classes.card}>
                <DeviceGraph />
            </div>

            {/* footer */}
            <div className={classes.footerText}>
                <p style={{fontWeight: "bold", fontSize:14}}>Please use fogwing IIoT Mobile App for securely viewing this device payloads.</p>
            </div>
         
        </Fragment>
    )
}

export default Dashboard;