import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Login from '../containers/Login'
import Register from '../containers/Register'
import Home from '../containers/Home'
import Products from '../containers/Products'
import PrivateRoute from './privateRoute'

function MyRoutes() {

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Register />} />
                <Route path="/" element={
                    <PrivateRoute redirectTo="/login">
                        <Home />   
                    </PrivateRoute>
                } />
                <Route path="/produtos" element={
                    <PrivateRoute redirectTo="/login">
                        <Products />   
                    </PrivateRoute>
                } />

            </Routes>
        </Router>
    )
}

export default MyRoutes
