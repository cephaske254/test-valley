import numral from "numeral";

export const formatPrice = (price: number) => {
  return numral(price).format("0,0");
};
