import { useSelector } from "react-redux";
import {CartStyled, Total} from "../globalStyles";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Cart () {
    const cart = useSelector(state => state.products);

    return (
        <>
        <Navbar />
        <CartStyled>
            <h1>Cart</h1>
            {cart.length == 0 ? <h1>No products in cart</h1> :
                <>
                {cart.map(product => (
                        <div key={product.product_id}>
                            <div>
                            <h1>
                                <Link href={`/product/${product.product_id}`}>
                                    {product.name}
                                </Link>
                            </h1>
                            <h2>${product.total_price}</h2>
                            </div>
                            <img src={product.image_url} alt={product.name}/>
                        </div>))}
                        
                <Total>Total: ${cart.reduce((acc, product) => acc + Number(product.total_price), 0)}</Total>
                </>
            }
        </CartStyled>
        </>
    )
} 