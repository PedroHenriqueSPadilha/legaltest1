export const setSaveTShirt = (id: string) => {
  localStorage.setItem("@web-shopping-cart", id);
};

export const setCountTShirt = (value: string) => {
  localStorage.setItem("@web-count-shopping-cart", value);
};

export const getQuantityShoppingCart = () => {
  return localStorage.getItem("@web-count-shopping-cart") !== "undefined"
    ? localStorage.getItem("@web-count-shopping-cart")
    : "";
};

export const getTShirt = () => {
  return localStorage.getItem("@web-shopping-cart") !== "undefined"
    ? localStorage.getItem("@web-shopping-cart")
    : "";
};
