import { useEffect, useState } from "react";
import { getQuantityShoppingCart } from "../../services/localStorage";
import { HeaderContainer, ShoppingWrapper } from "./style";
import { LuShoppingBag } from "react-icons/lu";

export function Header() {
  const [totalShoppingCart, setTotalShoppingCart] = useState<number>(0);

  useEffect(() => {
    const handleAtualizacaoCarrinho = () => {
      setTotalShoppingCart(Number(getQuantityShoppingCart()));
    };
    window.addEventListener("atualizacaoCarrinho", handleAtualizacaoCarrinho);
    setTotalShoppingCart(Number(getQuantityShoppingCart()));

    return () => {
      window.removeEventListener(
        "atualizacaoCarrinho",
        handleAtualizacaoCarrinho
      );
    };
  }, []);

  return (
    <HeaderContainer>
      <div>Legaltest</div>

      <ShoppingWrapper>
        <LuShoppingBag />
        Carrinho({totalShoppingCart})
      </ShoppingWrapper>
    </HeaderContainer>
  );
}
