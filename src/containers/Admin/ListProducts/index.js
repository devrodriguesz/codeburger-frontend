import React, { useEffect, useState } from "react"
import api from '../../../services/api'

import formatCurrency from '../../../utils/formatCurrency'

import { useNavigate } from "react-router-dom";
import paths from "../../../constants/paths";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Cancel';


import { Container, Image, EditIconStyled } from './styles'

function ListProducts() {
    const [products, setProducts] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        async function loadOrders() {
            const { data } = await api.get('products')

            setProducts(data)
        }
        loadOrders()
    }, [])

    function isOffer(offerStatus){
        if(offerStatus){
            return <CheckBoxIcon style={{color: '#228B22'}}/>
        }
        return <CancelIcon style={{color: '#FF0000'}} />
    }

    function editProduct(product){
        navigate(paths.EditProduct, {state: product} )
    }

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Nome</TableCell>
                            <TableCell align="left">Preço</TableCell>
                            <TableCell align="center">Produto em Oferta</TableCell>
                            <TableCell align="center">Imagem do Produto</TableCell>
                            <TableCell align="center">Editar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { products && products.map((product) => (
                            <TableRow
                                key={product.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" component="th" scope="row">
                                    {product.name}
                                </TableCell>
                                <TableCell align="left">{formatCurrency(product.price)}</TableCell>
                                <TableCell align="center">{isOffer(product.offer)}</TableCell>
                                <TableCell align="center">
                                    <Image src={product.url} alt="imagem-produto" />
                                </TableCell>
                                <TableCell align="center">
                                    <EditIconStyled onClick={()=> editProduct(product)} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default ListProducts