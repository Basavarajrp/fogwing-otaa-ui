import React, { useState } from 'react';
import { DeviceContext } from "./device-context"

const DeviceContextProvider = props => {

    const [deviceData, setDeviceData] = useState({})
    const [deviceState, setDeviceState] = useState(false);


    return (
        <DeviceContext.Provider
          value={{
            deviceData,
            setDeviceData,
            deviceState,
            setDeviceState
          }}
        >
            {props.children}
        </DeviceContext.Provider>
    )

}

export default DeviceContextProvider;