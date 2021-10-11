import { CardStyle, Button } from "./cardStyled";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../actions";
import Link from "next/link";
export default function Card({product}) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addToCart(product));
  };
  const cart = useSelector((state) => state.products);
  return (
    <CardStyle key={product.product_id}>
        <img src={product.image_url ? product.image_url : "https://www.eluniversal.com.mx/sites/default/files/2020/04/28/sabor-cerveza.jpg"}/>
        <h3 
        >
          <Link href={`/product/${product.product_id}`}>
            {product.name}
          </Link>
          </h3>
        <p>${product.total_price}</p>
        
        {cart?.find((item) => item.product_id === product.product_id) ? (
          <Button
            onClick={() => dispatch(removeFromCart(product))}
          >
            Eliminar del carrito
          </Button>
        ) : 
        <Button
        onClick={handleClick}
        >Añadir al carrito
        </Button> }
    </CardStyle>
    );
}
