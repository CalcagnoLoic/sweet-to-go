export const PriceFormat = (
  price: number,
  displayPrice: boolean,
): string | number => {
  return displayPrice ? (Math.round(price * 100) / 100).toFixed(2) : price;
};
