export const setSaveTShirt = (id: number) => {
  localStorage.setItem("@web-shopping-cart", JSON.stringify(id));
};

export const getTShirt = () => {
  return JSON.parse(localStorage.getItem("@web-shopping-cart") || "[]");
};
