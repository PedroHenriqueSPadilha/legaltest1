import { Dispatch, SetStateAction } from "react";
import { Product } from "../../../model/Product/product";

export interface ProductContextProps {
  productsData: Product[];
  setProductData: Dispatch<SetStateAction<Product[]>>;
}

export interface ProductContextProviderType {
  children: React.ReactNode;
}
