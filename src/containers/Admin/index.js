import React from "react";

import { useLocation } from "react-router-dom"

import { Container, ContainerItems } from './styles'
import paths from "../../constants/paths";
import { SideMenuAdmin } from "../../components";
import Orders from "./Orders";
import ListProducts from "./ListProducts";
import NewProduct from "./NewProduct";
import EditProduct from './EditProduct'


export function Admin(){
    const { pathname } = useLocation()

    return(
        <Container>
            <SideMenuAdmin pathname={pathname}/>
            <ContainerItems>
                { pathname === paths.Order && <Orders/> } 
                { pathname === paths.Products && <ListProducts /> }                
                { pathname === paths.NewProduct && <NewProduct /> }                
                { pathname === paths.EditProduct && <EditProduct /> }                
            </ContainerItems>

        </Container>
    )
}