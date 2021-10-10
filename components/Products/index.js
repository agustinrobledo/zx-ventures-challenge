import { useState } from "react"
import Card from "../Card"
import { FlexCard, FilterButtons, Button } from "./productsStyled"

export default function Products ({products}) {
    const [filterProduct, setFilterProduct] = useState("")
    const [allProducts, setAllProducts] = useState(products)
   
    function handleFilter (e) {
        setFilterProduct(e.target.value)
    }
    let filteredProducts = allProducts.filter(product => {
        return product.categories?.includes(filterProduct.toLowerCase())
    })
    if (filterProduct.length === 0) filteredProducts = allProducts;



    return (
        <>
            <FilterButtons>
                <Button value="" onClick={handleFilter}>Todos</Button>
                <Button value="vinos" onClick={handleFilter}>Vinos</Button>
                <Button value="cervezas" onClick={handleFilter}>Cervezas</Button>
            </FilterButtons>

            <FlexCard>
                {allProducts ? 
                    filteredProducts.map(product => (
                        <Card
                            key={product.product_id}
                            id={product.product_id}
                            image={product.image_url ? product.image_url : "https://via.placeholder.com/150"}
                            name={product.name}
                            price={product.total_price}
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
