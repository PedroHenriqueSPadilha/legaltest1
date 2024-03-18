import { CardTShirt } from "../../components/CardTshirt";
import { CartContainer } from "./styles";
import productJson from "../../product.json";

export function CartShopping() {
  return (
    <CartContainer>
      {productJson.products.map((item: any) => {
        return <CardTShirt data={item} />;
      })}
    </CartContainer>
  );
}
