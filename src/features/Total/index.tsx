import { PriceFormat } from "../../common/utils";
import { TotalPrice } from "../../common/definition";

import Paragraph from "../../common/typographies/Paragraph";

const Feature = ({ total }: TotalPrice) => {
  const price = PriceFormat(total, true);

  return (
    <div className="mt-8 flex justify-between">
      <Paragraph
        kind="span"
        content="Order Total"
        css="self-end text-graphite"
      />
      <Paragraph
        kind="span"
        content={`$${price}`}
        css="text-3xl font-bold text-beaver"
      />
    </div>
  );
};

export default Feature;
