import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Login, Register, Home, Products, Cart, Admin } from '../containers'
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
                <Route path="/carrinho" element={
                    <PrivateRoute redirectTo="/login">
                        <Cart />   
                    </PrivateRoute>
                } />
                <Route path="/pedidos" element={
                    <PrivateRoute isAdmin redirectTo="/">
                        <Admin />   
                    </PrivateRoute>
                } />

            </Routes>
        </Router>
    )
}

export default MyRoutes
