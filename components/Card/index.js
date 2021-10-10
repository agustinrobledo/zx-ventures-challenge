import { CardStyle, Button } from "./cardStyled";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../actions";
import Link from "next/link";
export default function Card(props) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addToCart(props));
  };
  const cart = useSelector((state) => state.products);
  return (
    <CardStyle key={props.id}>
        <img src={props.image ? props.image : "https://www.eluniversal.com.mx/sites/default/files/2020/04/28/sabor-cerveza.jpg"}/>
        <h3 
        >
          <Link href={`/product/${props.id}`}>
            {props.name}
          </Link>
          </h3>
        <p>${props.price}</p>
        
        {cart?.find((item) => item.id === props.id) ? (
          <Button
            onClick={() => dispatch(removeFromCart(props))}
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
