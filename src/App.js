import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// styles
import  "./App.css"

// context providers
import DeviceContextProvider from "./Context/DeviceContext/device-provider"
import SnackbarContextProvider from './Context/SnackbarContext/snackbar-provider';

// pages
import Registry from './Pages/DeviceRegistry/deviceregistry-component';
import Home from './Pages/Home/home-component';


const App = () => {
  return (
    <SnackbarContextProvider>
      <DeviceContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/:devEUI" element={<Registry />} />
          </Routes>
        </BrowserRouter>
      </DeviceContextProvider>
    </SnackbarContextProvider>
  )
}

export default App;