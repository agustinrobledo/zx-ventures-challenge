import Navbar from "../../components/Navbar"
import Detail from "../../components/Detail"
export default function productDetails({product}) {
    return (
        <>
        <Navbar/>
        <Detail 
        product={product}
        />
        </>
    )
}

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:3002/products')
    const data = await res.json()
    const paths = data.map(product => ({
        params: {details: product.product_id.toString()}
    }))
    return {
        paths,
        fallback: false
    }   
}

export const getStaticProps = async (context) => {
    const details = context.params.details
    const res = await fetch(`http://localhost:3002/products`)
    const data = await res.json()
    const productStringify = JSON.stringify(data)
    let product = JSON.parse(productStringify)
    product = product.filter(product => product.product_id == details)   
    return {
        props: {
            product: product[0]
        }
    }
}