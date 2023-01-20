import React from "react";
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import api from "../../services/api";
import { useUser } from "../../hooks/UserContext";

import { Link, useNavigate } from "react-router-dom";


import Logo from '../../assets/logo.svg'

import { Button } from '../../components'
import {
    Container,
    ContainerItens,
    Itens,
    LoginImage,
    Label,
    Input,
    SignInLink,
    ErrorMessage,
} from './styles'

const schema = Yup.object().shape({
    email: Yup.string().email("Digite um e-mail válido").required("O e-mail é um campo obrigatório"),
    password: Yup.string().required("A senha é um campo obrigatório").min(6, "A senha deve ter pelo menos 6 dígitos")
})

export function Login() {
    const navigate = useNavigate()
    const { putUserData } = useUser()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async clientData => {
        const { data } = await toast.promise(
            api.post('sessions', {
                email: clientData.email,
                password: clientData.password,
            }),
            {
                pending: 'Verificando seus dados',
                success: 'Seja bem-vindo(a)',
                error: 'Verifique seu e-mail e senha'
            }
        )

        putUserData(data)

        setTimeout(() => {
            navigate('/')
        }, 1000)

    }

    return (
        <Container>
            <LoginImage />
            <ContainerItens>
                <img src={Logo} alt="logo" />
                <h1>Login</h1>
                <Itens>

                    <form noValidate onSubmit={handleSubmit(onSubmit)}>
                        <Label>Email</Label>
                        <Input type="email" {...register("email")} error={errors.email?.message} />
                        <ErrorMessage>{errors.email?.message}</ErrorMessage>

                        <Label>Senha</Label>
                        <Input type="password" {...register("password")} error={errors.password?.message} />
                        <ErrorMessage>{errors.password?.message}</ErrorMessage>

                        <Button type="submit" style={{ marginTop: 67 }} >Sign In</Button>
                    </form>

                    <SignInLink>Não possui conta ?<Link to="/cadastro">SignUp</Link> </SignInLink>
                </Itens>

            </ContainerItens>
        </Container>
    )
}
