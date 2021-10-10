import { DetailStyled } from "./detailStyled";
export default function Detail({product}) {
    return (
        <DetailStyled>
            <h1>{product.sku}</h1>
            <h1>Title</h1>
        </DetailStyled>
    );
}