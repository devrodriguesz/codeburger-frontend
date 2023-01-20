import React from "react";
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import api from "../../services/api";

import { Link } from "react-router-dom";

import Logo from '../../assets/logo.svg'

import { Button } from '../../components'
import {
    Container,
    ContainerItens,
    Itens,
    RegisterImage,
    Label,
    Input,
    SignInLink,
    ErrorMessage,
} from './styles'

const schema = Yup.object().shape({
    name: Yup.string().required("O campo nome é obrigatório"),
    email: Yup.string().email("Digite um e-mail válido").required("O e-mail é um campo obrigatório"),
    password: Yup.string().required("A senha é um campo obrigatório").min(6, "A senha deve ter pelo menos 6 dígitos"),
    confirmPassword: Yup.string().required("A senha é um campo obrigatório").oneOf([Yup.ref('password')], 'As senhas devem ser iguais'),

})

export function Register() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async clientData => {
        try {
            const { status } = await api.post('users', {
                name: clientData.name,
                email: clientData.email,
                password: clientData.password,
            },
                { validateStatus: () => true }
            )

            if (status === 201 || status === 200){
                toast.success('Cadastro criado com sucesso');          
            }
            else if (status === 409){
                toast.error("E-mail já cadastrado! Faça login para continuar")
            }
            else {
                throw new Error()
            }
        }
        catch (err) {
            toast.error("Falha no sistema! Tente novamente")
        }

    }

    return (
        <Container>
            <RegisterImage />
            <ContainerItens>
                <img src={Logo} alt="logo" />
                <h1>Cadastre-se</h1>
                <Itens>

                    <form noValidate onSubmit={handleSubmit(onSubmit)}>
                        <Label>Nome</Label>
                        <Input type="text" {...register("name")} error={errors.name?.message} />
                        <ErrorMessage>{errors.name?.message}</ErrorMessage>

                        <Label>Email</Label>
                        <Input type="email" {...register("email")} error={errors.email?.message} />
                        <ErrorMessage>{errors.email?.message}</ErrorMessage>

                        <Label>Senha</Label>
                        <Input type="password" {...register("password")} error={errors.password?.message} />
                        <ErrorMessage>{errors.password?.message}</ErrorMessage>

                        <Label>Confirmar Senha</Label>
                        <Input type="password" {...register("confirmPassword")} error={errors.confirmPassword?.message} />
                        <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

                        <Button type="submit" style={{ marginTop: 67 }} >Sign Up</Button>
                    </form>

                    <SignInLink>Já possuí uma conta ?<Link to="/login">SignIn</Link> </SignInLink>
                </Itens>

            </ContainerItens>
        </Container>
    )
}