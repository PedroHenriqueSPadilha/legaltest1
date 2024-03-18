import { ButtonPrice, CardContainer, ImageContent } from "./styles";
import { products } from "../../product.json";
import tshirt1 from "../../assets/img/jacket01.png";
import tshirt2 from "../../assets/img/jacket02.png";
import tshirt3 from "../../assets/img/jacket03.png";
import tshirt4 from "../../assets/img/jacket04.png";

import {
  getQuantityShoppingCart,
  setCountTShirt,
  setSaveTShirt,
} from "../../services/localStorage";

interface Product {
  // Tipando o objeto para poder acessar mais pra baixo
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CardTShirtProps {
  data: Product;
}

const images: any = {
  // verifica oque vem da outra tela do map e compara qual imagem é e depois puxa do import la em cima
  "/jacket01.png": tshirt1,
  "/jacket02.png": tshirt2,
  "/jacket03.png": tshirt3,
  "/jacket04.png": tshirt4,
};

export function CardTShirt({ data }: CardTShirtProps) {
  const { id, title, price, image } = data; // apenas para separar as propriedades

  const imageSrc = images[image]; // para comparar

  const handleSaveTShirt = (id: number) => {
    // sei la oq faz isso
    const total = getQuantityShoppingCart();
    const productIdAsString = id.toString();
    if (total && Number(total) < products.length) {
      let newTotal = Number(total) + 1;
      setCountTShirt(newTotal.toString());
      window.dispatchEvent(new CustomEvent("atualizacaoCarrinho"));
    }
    if (total == null && Number(total) <= products.length) {
      setCountTShirt("1");
    }

    setSaveTShirt(productIdAsString);
  };

  return (
    <CardContainer>
      <ImageContent>
        <img src={imageSrc} alt={title} />
      </ImageContent>

      <ButtonPrice>
        <button onClick={() => handleSaveTShirt(id)}>
          <p>{title}</p>
          <span>R${price}</span>
        </button>
      </ButtonPrice>
    </CardContainer>
  );
}
