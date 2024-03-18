import { CardTShirt } from "../../components/CardTshirt";
import { HomeContainer } from "./styles";
import productJson from "../../product.json";

export function Home() {
  return (
    <HomeContainer>
      {productJson.products.map((item: any) => {
        return <CardTShirt data={item} />;
      })}
    </HomeContainer>
  );
}
