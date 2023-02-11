import React, { useEffect, useState } from 'react'
import ReactSelect from 'react-select'


import api from '../../../services/api'
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useForm, Controller } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'

import { Container, Label, Input, ButtonStyles, LabelUpload, ContainerInput } from './styles'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { ErrorMessage } from '../../../components';

function EditProduct() {
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()
    const { state } = useLocation()


    const schema = Yup.object().shape({
        name: Yup.string().required('Digite o nome do produto'),
        price: Yup.string().required('Digite o preço do produto'),
        category: Yup.object().required('Escolha uma categoria'),
        offer: Yup.bool()

    })

    const { register, handleSubmit, control, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
    
    const onSubmit = async data => {
        const productDataFormData = new FormData()

        productDataFormData.append('name', data.name)
        productDataFormData.append('price', data.price)
        productDataFormData.append('category_id', data.category.id)
        productDataFormData.append('file', data.file[0])
        productDataFormData.append('offer', data.offer)

        await toast.promise( api.put(`products/${state.id}`, productDataFormData), {
            pending: 'Editando novo produto',
            success: 'Produto editado com sucesso',
            error: 'Falha ao editar o produto'
        })

        setTimeout(() => {
            navigate('/listar-produtos')
        }, 2000);        
    }

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            setCategories(data)
        }
        loadCategories()

    }, [])



    return (

        <Container>
            <form noValidate onSubmit={handleSubmit(onSubmit)} >
                <div>
                    <Label>Nome</Label>
                    <Input type="text" {...register('name')} defaultValue={state.name} />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </div>

                <div>
                    <Label>Preço</Label>
                    <Input type="number" {...register('price')} defaultValue={state.price} />
                    <ErrorMessage>{errors.price?.message}</ErrorMessage>
                </div>

                <div>
                    <LabelUpload>
                        {fileName || (
                            <>
                                <CloudUploadIcon />
                                Carregue a imagem do produto
                            </>
                        )}
                        <input
                            type="file"
                            accept='image/png, image/jpg'
                            {...register('file')}
                            onChange={value => {
                                setFileName(value.target.files[0]?.name)
                            }}
                        />
                    </LabelUpload>
                    <ErrorMessage>{errors.file?.message}</ErrorMessage>
                </div>


                <div>
                    <Controller
                        name='category'
                        control={control}
                        defaultValue={state.category}
                        render={({ field }) => {
                            return (
                                <ReactSelect
                                    { ...field}
                                    options={categories}
                                    getOptionLabel={cat => cat.name}
                                    getOptionValue={cat => cat.id}
                                    placeholder="Categorias"
                                    defaultValue={state.category}
                                />
                            )
                        }}
                    ></Controller>
                    <ErrorMessage>{errors.category?.message}</ErrorMessage>
                </div>

                <ContainerInput>
                    <input 
                    type="checkbox" 
                    {...register('offer')} 
                    defaultChecked={state.offer} 
                    />
                    <Label>Produto em oferta?</Label>
                </ContainerInput>



                <ButtonStyles>Editar produto</ButtonStyles>
            </form>
        </Container>
    )
}

export default EditProduct