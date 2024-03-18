import { CardTShirt } from "../../components/CardTshirt";
import { useProduct } from "../../components/contexts/Product";

import { Product } from "../../model/Product/product";
import productJson from "../../product.json";
import { HomeContainer } from "./styles";

export function Home() {
  const { productsData } = useProduct();
  return (
    <HomeContainer>
      {productsData.map((item: Product) => {
        return <CardTShirt data={item} key={item.id} />;
      })}

      {productsData.length === 0 && <p>Nenhum Produto foi encontrado.</p>}
    </HomeContainer>
  );
}
