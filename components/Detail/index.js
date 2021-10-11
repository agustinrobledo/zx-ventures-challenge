import { DetailStyled, Recommendations, Button } from "./detailStyled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { recommendations, addToCart,removeFromCart } from "../../actions";
import Link from "next/link";
export default function Detail({product}) {
    const [cart, setCart] = useState([]);
    const dispatch = useDispatch();
    const cartRedux = useSelector(state => state.products);
     useEffect(() => {
         dispatch(recommendations(product.product_id))
         setCart(cartRedux)
    },  [cartRedux]);
    
    const handleClick = () => {
        dispatch(addToCart(product));
    };
    const handleRemove = () => {
        dispatch(removeFromCart(product));
    };
    
    
    const recommendationsList = useSelector(state => state.recommendations);
    return (
        <>
        <DetailStyled>
            <img src={product.image_url}/>
                <div>
                    <h1>{product.name}</h1>
                    <h2>${product.total_price}</h2>
                    {product.sku && <p>{product.sku}</p>}
                    {cart.find(item => item.product_id === product.product_id) ? (
                        <Button onClick={handleRemove}>Eliminar del carrito</Button>
                    ) : (
                        <Button onClick={handleClick}>Añadir al carrito</Button>
                    )}
                </div>
        </DetailStyled>
        <Recommendations>
            <h1>Recomendaciones</h1>
            <div>
                {recommendationsList.map(item => (
                    <div key={item.product_id}>
                        <img src={item.image_url}/>
                        <h1>
                            <Link href={`/product/${item.product_id}`}>
                            {item.name}
                            </Link>
                        </h1>
                        <h2>${item.total_price}</h2>
                        {cart.find(product => product.product_id === item.product_id) ? (
                            <Button onClick={() => dispatch(removeFromCart(item))}>Eliminar del carrito</Button>
                        ) : (
                            <Button onClick={() => dispatch(addToCart(item))}>Añadir al carrito</Button>
                        )}
                    </div>
                ))}
            </div>
        </Recommendations>
        </>
    );
}