import React, { useState, useEffect } from "react"

import ProductsLogo from '../../assets/products-logo.svg'
import api from '../../services/api'
import CardProduct from "../../components/CardProduct"
import formatCurrency from '../../utils/formatCurrency'

import { Container, ProductsImg, CategoryButton, CategoriesMenu, ProductsContainer } from './styles'

function Products() {
    const [categories, setCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState(0)
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {

        async function loadCategories() {
            const { data } = await api.get('categories')

            const newCategories = [{ id: 0, name: 'Todas' }, ...data]

            setCategories(newCategories)
        }
        
        async function loadProducts() {
            const { data: allProducts } = await api.get('products')

            const newProducts = allProducts.map( product => {
                return {...product, formatedPrice: formatCurrency(product.price)}
            })

            
            setProducts(newProducts)
        }

        loadCategories()
        loadProducts()
    }, [])

    useEffect( ()=> {
        if(activeCategory === 0){
            setFilteredProducts(products)
        } else {
            const newFilteredProducts = products.filter( product => product.category_id === activeCategory )
            setFilteredProducts(newFilteredProducts)        
        }

    },[activeCategory, products])

    return (
        <Container>
            <ProductsImg src={ProductsLogo} alt="logo da home" />
            <CategoriesMenu>
                {categories && categories.map(category => (
                    <CategoryButton
                        type="button"
                        key={category.id}
                        isActiveCategory={activeCategory === category.id}
                        onClick={() => {
                            setActiveCategory(category.id)
                        }}
                    >
                        {category.name}
                    </CategoryButton>
                ))}
            </CategoriesMenu>
            <ProductsContainer>
                {filteredProducts && filteredProducts.map( product=> (
                    <CardProduct key={product.id} product={product} />
                ))}
            </ProductsContainer>
        </Container>
    )
}

export default Products