import { CardTShirt } from "../../components/CardTshirt";
import productJson from "../../product.json";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      {productJson.products.map((item: any) => {
        return <CardTShirt data={item} />;
      })}
    </HomeContainer>
  );
}
