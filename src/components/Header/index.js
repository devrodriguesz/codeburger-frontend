import React from "react"
import { useNavigate, useLocation } from "react-router-dom"

import { useUser } from '../../hooks/UserContext'

import Cart from '../../assets/icon-cart.svg'
import Profile from '../../assets/icon-profile.svg'


import { Container, ContainerLeft, ContainerRight, PageLink, ContainerText, Line, PageLinkExit } from './styles'

export function Header(){
    const { logout, userData } = useUser()
    const navigate = useNavigate()
    const { pathname }  = useLocation()

    const logoutUser = () => {
        logout()
        navigate('/login')
    }
    
    return(
        <Container>
            <ContainerLeft>
                <PageLink 
                onClick={()=> navigate('/')} 
                isActive={pathname === '/'}
                 >
                    Home
                </PageLink>

                <PageLink 
                onClick={()=> navigate('/produtos')} 
                isActive={pathname.includes('produtos')}
                >
                    Ver Produtos
                </PageLink>
            </ContainerLeft>

            <ContainerRight>
                <PageLink
                onClick={()=> navigate('/carrinho')} 
                >
                    <img src={Cart} alt="icone do carrinho"/> 
                </PageLink>
                <Line></Line>
                <PageLink><img src={Profile} alt="icone do profile"/></PageLink>
            
                <ContainerText>
                    <p>Olá, {userData.name}</p>
                    <PageLinkExit
                    onClick={logoutUser}
                    >
                        Sair
                    </PageLinkExit>
                </ContainerText>
            
            </ContainerRight>


                       
        </Container>
    )
}