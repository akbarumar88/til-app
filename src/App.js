import "./App.css"
import React, { useState, useEffect } from "react"

import useWindowDimensions from "./helper/useWindowDimensions"
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom"
import Home from './screens/Home'

export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}
