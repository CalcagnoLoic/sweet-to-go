import { Orders } from "../../common/definition";
import IconCart from "../../common/icons/IconCart";
import Paragraph from "../../common/typographies/Paragraph";

const Component = ({ title, quantity, price, total }: Orders) => {
  return (
    <>
      <div className="mt-5 flex justify-between">
        <div className="flex flex-col">
          <Paragraph kind="span" content={title} css="text-graphite" />
          <div>
            {/* Récupérer depuis le state management + résultat avec reduce */}
            <strong className="text-tiaMaria">{quantity}x</strong>
            <Paragraph
              kind="span"
              content={`@ $${price}`}
              css="mx-5 text-pharlap"
            />
            {total && (
              <Paragraph
                kind="span"
                content={`$${total}`}
                css="font-semibold text-beaver"
              />
            )}
          </div>
        </div>
        <IconCart kind="remove" />
      </div>
      <div className="mt-4 h-[1px] w-full bg-clamShell"></div>
    </>
  );
};

export default Component;
