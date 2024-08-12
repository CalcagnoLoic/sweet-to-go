import { CardProps } from "../../definition";
import IconCart from "../../icons/IconCart";
import Paragraph from "../../typographies/Paragraph";
import Image from "../Image";
import { PriceFormat } from "../../utils";

const Component = ({ dessertProps }: CardProps) => {
  const price = PriceFormat(dessertProps.dessertPrice, true);

  return (
    <div key={dessertProps.dessertID} className="relative">
      <Image
        src={dessertProps.dessertIllustration}
        content={dessertProps.dessertName}
      />

      <Paragraph
        kind="p"
        content={dessertProps.dessertCategory}
        css="mt-10 text-pharlap"
      />
      <Paragraph
        kind="p"
        content={dessertProps.dessertName}
        css="mt-1 font-semibold text-graphite"
      />
      <Paragraph
        kind="p"
        content={`$${price}`}
        css="mt-2 font-semibold text-tiaMaria"
      />

      <div className="add_cart border-graphite bg-vistaWhite hover:border-tiaMaria">
        <IconCart kind="add" />
        <Paragraph
          kind="span"
          content="Add to Cart"
          css="font-semibold text-graphite hover:text-tiaMaria"
        />
      </div>
    </div>
  );
};

export default Component;
