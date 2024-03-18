import { useEffect, useState } from "react";

import { getTShirt } from "../../services/localStorage";
import { LuShoppingBag } from "react-icons/lu";
import { products } from "../../product.json";

import { HeaderContainer, SearchProductHeader, ShoppingWrapper } from "./style";

import { useProduct } from "../contexts/Product";

export function Header() {
  const { setProductData } = useProduct();

  const [totalShoppingCart, setTotalShoppingCart] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const handleAtualizacaoCarrinho = () => {
      const tShirtIds = getTShirt();
      setTotalShoppingCart(tShirtIds.length);
    };

    window.addEventListener("atualizacaoCarrinho", handleAtualizacaoCarrinho);

    handleAtualizacaoCarrinho();

    return () => {
      window.removeEventListener(
        "atualizacaoCarrinho",
        handleAtualizacaoCarrinho
      );
    };
  }, []);

  useEffect(() => {
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductData(results);
  }, [searchTerm]);

  return (
    <HeaderContainer>
      <SearchProductHeader>
        <p>legalTest</p>
        <input
          type="text"
          placeholder="Pesquisar produtos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchProductHeader>

      <div>
        <ShoppingWrapper href="/carrinho">
          <LuShoppingBag />
          <span> Carrinho({totalShoppingCart})</span>
        </ShoppingWrapper>
      </div>
    </HeaderContainer>
  );
}
