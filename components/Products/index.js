import { useEffect, useState } from "react"
import Card from "../Card"
import { categories } from "../../actions"
import { FlexCard, FilterButtons, Button } from "./productsStyled"
import { useDispatch, useSelector } from "react-redux"
export default function Products ({products}) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(categories())
    }, [])
    const [filterProduct, setFilterProduct] = useState("")
    const [allProducts, setAllProducts] = useState(products)
    function handleFilter (e) {
        setFilterProduct(e.target.value)
    }
    let filteredProducts = allProducts.filter(product => {
        return product.categories?.includes(filterProduct.toLowerCase())
    })
    if (filterProduct.length === 0) filteredProducts = allProducts;
    const categoriesList = useSelector(state => state.categories)


    return (
        <>
            <FilterButtons>
                <Button onClick={handleFilter} value="">todos</Button>
                {categoriesList.map(category => 
                <Button key={category} onClick={handleFilter} value={category}>{category}</Button>)}
            </FilterButtons>

            <FlexCard>
                {allProducts ? 
                    filteredProducts.map(product => (
                        <Card
                            product={product}
                        />
                    )
                )
                :
                <h1>No hay productos</h1>
                }
            
            </FlexCard>
        </>
    )
}
