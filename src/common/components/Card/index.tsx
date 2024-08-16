import { CardProps } from "../../definition";
import { PriceFormat } from "../../utils";
import { useState } from "react";

import ButtonCard from "../../../features/ButtonCard";
import Image from "../Image";
import Paragraph from "../../typographies/Paragraph";

const Component = ({ dessertProps }: CardProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const price = PriceFormat(dessertProps.dessertPrice, true);

  const handleSelect = () => {
    setIsSelected((prevState) => !prevState);
  };

  return (
    <div key={dessertProps.dessertID} className="relative">
      <Image
        src={dessertProps.dessertIllustration}
        content={dessertProps.dessertName}
        css={`
          ${isSelected ? "border-2 border-tiaMaria" : ""}
        `}
        action={handleSelect}
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

      <div
        className={`add_cart ${isSelected ? "border-tiaMaria bg-tiaMaria" : "border-graphite bg-vistaWhite"} hover:border-tiaMaria`}
      >
        <ButtonCard state={isSelected} />
      </div>
    </div>
  );
};

export default Component;
