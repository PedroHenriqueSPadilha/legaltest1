import { useEffect, useState } from "react";
import { CardShoppingCart } from "../../components/CardShoppingCart";
import { Product } from "../../model/Product/product";

import productJson from "../../product.json";

import {
  CartShoppingContainer,
  CheckoutButton,
  TotalAndCheckout,
  TotalDisplay,
} from "./styles";
import { getTShirt } from "../../services/localStorage";
import { useProduct } from "../../components/contexts/Product";

export function CartShopping() {
  const { productsData } = useProduct();
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  useEffect(() => {
    const updateCartProducts = () => {
      const savedIds = getTShirt();
      const productsInCart = productsData.filter((product) =>
        savedIds.includes(product.id)
      );
      setCartProducts(productsInCart);
    };

    updateCartProducts();

    window.addEventListener("atualizacaoCarrinho", updateCartProducts);

    return () => {
      window.removeEventListener("atualizacaoCarrinho", updateCartProducts);
    };
  }, []);

  const total = cartProducts.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <CartShoppingContainer>
        {cartProducts.map((item: Product) => {
          return <CardShoppingCart data={item} key={item.id} />;
        })}
      </CartShoppingContainer>

      <TotalAndCheckout>
        <TotalDisplay>
          Valor dos produtos: <span>R${total.toFixed(2)}</span>
        </TotalDisplay>
        <CheckoutButton onClick={() => alert("Compra finalizada")}>
          Finalizar Compra
        </CheckoutButton>
      </TotalAndCheckout>
    </div>
  );
}
