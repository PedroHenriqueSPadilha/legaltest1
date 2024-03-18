import tshirt1 from "../../assets/img/jacket01.png";
import tshirt2 from "../../assets/img/jacket02.png";
import tshirt3 from "../../assets/img/jacket03.png";
import tshirt4 from "../../assets/img/jacket04.png";

import { getTShirt, setSaveTShirt } from "../../services/localStorage";
import { CardTShirtProps } from "./interface";
import { MdDelete } from "react-icons/md";
import { formatPrice } from "../../utils/Price";

import {
  CardShoppingCartContainer,
  DeleteItemShoppingcart,
  InformationShoppingCart,
  PriceShoppingCart,
} from "./styles";

const images: any = {
  "/jacket01.png": tshirt1,
  "/jacket02.png": tshirt2,
  "/jacket03.png": tshirt3,
  "/jacket04.png": tshirt4,
};

export function CardShoppingCart(props: CardTShirtProps) {
  const { data } = props;

  const priceFormatter = formatPrice(data.price);

  const imageSrc = images[data.image];

  const handleDeleteItemShoppingCart = (id: number) => {
    const currentTShirts = getTShirt();

    const updatedTShirts = currentTShirts.filter(
      (tshirtId: number) => tshirtId !== id
    );

    setSaveTShirt(updatedTShirts);

    window.dispatchEvent(new CustomEvent("atualizacaoCarrinho"));
  };

  return (
    <CardShoppingCartContainer key={data.id}>
      <InformationShoppingCart>
        <img src={imageSrc} alt={data.title} />
        <h2>{data.title}</h2>
      </InformationShoppingCart>

      <PriceShoppingCart>
        <p>Preço à vista</p>
        <span>{priceFormatter}</span>
      </PriceShoppingCart>

      <DeleteItemShoppingcart
        onClick={() => handleDeleteItemShoppingCart(data.id)}
      >
        <MdDelete />
      </DeleteItemShoppingcart>
    </CardShoppingCartContainer>
  );
}
