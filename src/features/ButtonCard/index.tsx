import { ActionCard } from "../../common/definition";

import IconCart from "../../common/icons/IconCart";
import IconQuantity from "../../common/icons/IconQuantity";
import Paragraph from "../../common/typographies/Paragraph";

const Feature = ({ state }: ActionCard) => {
  return (
    <>
      {state ? (
        <div className="flex justify-between">
          <IconQuantity kind="decrement" />
          <Paragraph
            kind="span"
            content={0}
            css="self-center font-semibold text-vistaWhite"
          />
          <IconQuantity kind="increment" />
        </div>
      ) : (
        <div className="flex cursor-pointer justify-center gap-2">
          <IconCart kind="add" />
          <Paragraph
            kind="span"
            content="Add to Cart"
            css="font-semibold text-graphite hover:text-tiaMaria"
          />
        </div>
      )}
    </>
  );
};

export default Feature;
