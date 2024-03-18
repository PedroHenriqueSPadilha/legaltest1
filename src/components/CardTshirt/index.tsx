import tshirt1 from "../../assets/img/jacket01.png";
import tshirt2 from "../../assets/img/jacket02.png";
import tshirt3 from "../../assets/img/jacket03.png";
import tshirt4 from "../../assets/img/jacket04.png";

import { getTShirt, setSaveTShirt } from "../../services/localStorage";

import { products } from "../../product.json";
import { CardTShirtProps } from "./interface";

import { ButtonPrice, CardContainer, ImageContent } from "./styles";

const imageMap: any = {
  "/jacket01.png": tshirt1,
  "/jacket02.png": tshirt2,
  "/jacket03.png": tshirt3,
  "/jacket04.png": tshirt4,
};

export function CardTShirt(props: CardTShirtProps) {
  const { data } = props;

  const imageSrc = imageMap[data.image];

  const handleSaveTShirt = (id: number) => {
    const savedIds = getTShirt() || [];

    if (!savedIds.includes(id)) {
      if (savedIds.length < products.length) {
        savedIds.push(id);
        setSaveTShirt(savedIds);
        window.dispatchEvent(new CustomEvent("atualizacaoCarrinho"));
      } else {
        alert("O carrinho está cheio.");
      }
    } else {
      alert("Este item já está adicionado ao carrinho.");
    }
  };

  return (
    <CardContainer>
      <ImageContent>
        <img src={imageSrc} alt={data.title} />
      </ImageContent>

      <ButtonPrice>
        <button onClick={() => handleSaveTShirt(data.id)}>
          <p>{data.title}</p>
          <span>R${data.price}</span>
        </button>
      </ButtonPrice>
    </CardContainer>
  );
}
