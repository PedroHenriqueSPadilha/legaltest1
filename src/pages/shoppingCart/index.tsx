import { ShoppingCartContainer } from "./styles";
import productJson from "../../product.json";

export function CartTShirt() {
  return (
    <ShoppingCartContainer>
      {productJson.products.map((item: any) => {
        return <CartTShirt data={item} />;
      })}
    </ShoppingCartContainer>
  );
}
