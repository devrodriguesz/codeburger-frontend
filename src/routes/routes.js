import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Login, Register, Home, Products, Cart, Admin } from '../containers'
import PrivateRoute from './privateRoute'
import paths from '../constants/paths'

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
                <Route path={paths.Order} element={
                    <PrivateRoute isAdmin redirectTo="/">
                        <Admin />   
                    </PrivateRoute>
                } />
                <Route path={paths.Products} element={
                    <PrivateRoute isAdmin redirectTo="/">
                        <Admin />   
                    </PrivateRoute>
                } />
                <Route path={paths.NewProduct} element={
                    <PrivateRoute isAdmin redirectTo="/">
                        <Admin />   
                    </PrivateRoute>
                } />
                <Route path={paths.EditProduct} element={
                    <PrivateRoute isAdmin redirectTo="/">
                        <Admin />   
                    </PrivateRoute>
                } />

            </Routes>
        </Router>
    )
}

export default MyRoutes
