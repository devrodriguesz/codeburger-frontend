import React from "react"
import { Navigate } from "react-router-dom"
import { Header } from "../components/Header"

import PropTypes from 'prop-types'

function PrivateRoute({ children, isAdmin, redirectTo }) {
    const user = localStorage.getItem('codeburger:userData')


    if (!user) {
        return <Navigate to={redirectTo}/>
    }

    if (isAdmin && !JSON.parse(user).admin){
        return <Navigate to={redirectTo}/>
    }

    return (
        <>
            {!isAdmin && <Header/>}
            {children} 
        </>
    )

}

export default PrivateRoute

PrivateRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}

PrivateRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    isAdmin: PropTypes.bool
}

