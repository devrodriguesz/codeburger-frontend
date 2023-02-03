import React from "react";

import { useLocation } from "react-router-dom"

import { Container, ContainerItems } from './styles'
import Orders from "./Orders";
import { SideMenuAdmin } from "../../components";
import ListProducts from "./ListProducts";
import paths from "../../constants/paths";


export function Admin(){
    const { pathname } = useLocation()

    return(
        <Container>
            <SideMenuAdmin/>
            <ContainerItems>
                { pathname === paths.Order && <Orders/> } 
                { pathname === paths.Products && <ListProducts /> }                
            </ContainerItems>

        </Container>
    )
}