import { createContext, useContext, useEffect, useRef, useState } from "react";

import { products } from "../../../product.json";

import { ProductContextProps, ProductContextProviderType } from "./intereface";
import { Product } from "../../../model/Product/product";

const ProductContext = createContext({} as ProductContextProps);

export function ProductContextProvider({
  children,
}: ProductContextProviderType) {
  const [productsData, setProductData] = useState<Product[]>(products);

  return (
    <ProductContext.Provider
      value={{
        productsData,
        setProductData,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProduct = () => {
  return useContext(ProductContext);
};
