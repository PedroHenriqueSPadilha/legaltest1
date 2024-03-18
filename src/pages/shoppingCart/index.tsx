import { CardTShirt } from "../../components/CardTshirt";
import { ShoppingCartContainer } from "./styles";
import productJson from "../../product.json";
import { Header } from "../../components/Header";

export function CartShopping() {
  return (
    <>
      <Header />
      <ShoppingCartContainer>
      {productJson.products.map((item: any) => {
        return <CardTShirt data={item} />;
      })}
    </ShoppingCartContainer>
    </>
  );
}
