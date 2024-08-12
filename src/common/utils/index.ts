export const PriceFormat = (
  price: number,
  displayPrice: boolean,
): string | number => {
  const roundedPrice = Math.round(price * 100) / 100;

  return displayPrice ? roundedPrice.toFixed(2) : roundedPrice;
};
