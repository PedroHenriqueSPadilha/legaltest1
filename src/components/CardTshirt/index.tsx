import { ButtonPrice, CardContainer, ImageContent } from "./styles";
import tshirt1 from "../../assets/img/jacket01.png";
import tshirt2 from "../../assets/img/jacket02.png";
import tshirt3 from "../../assets/img/jacket03.png";
import tshirt4 from "../../assets/img/jacket04.png";
import { products } from "../../product.json";

import {
  getQuantityShoppingCart,
  setCountTShirt,
  setSaveTShirt,
} from "../../services/localStorage";
import { useNavigate } from "react-router-dom";

const images: any = {
  "/jacket01.png": tshirt1,
  "/jacket02.png": tshirt2,
  "/jacket03.png": tshirt3,
  "/jacket04.png": tshirt4,
};

export function CardTShirt(props: any) {
  const { data } = props;
  const imageSrc = images[data.image];
  const navigate = useNavigate();

  const handleSaveTShirt = (id: string) => {
    const total = getQuantityShoppingCart();
    if (total && Number(total) < products.length) {
      let newTotal = Number(total) + 1;
      setCountTShirt(newTotal.toString());
      window.dispatchEvent(new CustomEvent("atualizacaoCarrinho"));
    }
    if (total == null && Number(total) <= products.length) {
      setCountTShirt("1");
    }

    setSaveTShirt(id);
    navigate("/carrinho");
  };
  return (
    <CardContainer>
      <ImageContent>
        <img src={imageSrc} alt="" />
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
