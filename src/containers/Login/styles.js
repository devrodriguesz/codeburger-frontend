import styled from "styled-components";

import Background from '../../assets/login-image.svg'

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
`;

export const LoginImage = styled.div`
    width: 65%;
    background: url('${Background}');    
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
`;

export const ContainerItens = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 35%;
    background-color: #373737;
    h1 {
        font-weight: 500;
        font-size: 32px;
        line-height: 28px;
        color: #FFFFFF;
        margin-top: 170px;
    }
    
`;
export const Itens = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    form{
        display: flex;
        flex-direction: column;
    }
`;

export const Label = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    color: #FFFFFF;
    margin: 25px 0 5px 0;
`;

export const Input = styled.input`
    width: 391.42px;
    height: 38.32px;
    background: #FFFFFF;
    box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
    border-radius: 5px;
    outline: none;
    padding-left: 10px;
    font-size: 16px;
    border: ${props => (props.error) ? '2px solid #CC1717' : 'none'} ;
`;



export const SignInLink = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    margin-top: 30px;
    a{
        cursor: pointer;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        text-decoration-line: underline;
        color: #FFFFFF;
        margin-left: 2px;
    }    
`;

export const ErrorMessage = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #cc1717;
    margin-top: 2px;
`;