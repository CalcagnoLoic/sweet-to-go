import { Orders } from "../../common/definition";

import IconCart from "../../common/icons/IconCart";
import Image from "../../common/components/Image";
import Paragraph from "../../common/typographies/Paragraph";
import OrderTotal from "./OrderTotal";

const Feature = ({ title, quantity, price, total, confirm, src }: Orders) => {
  return (
    <>
      <div className="mt-5 flex justify-between">
        <div className="flex flex-row gap-4 w-full">
          {confirm && (
            <Image
              src={`./assets/img/${src}.webp`}
              content={title}
              isThumbnail
            />
          )}

          <div className="flex flex-grow flex-col justify-between md:flex-row md:self-center">
            <div className="flex flex-col">
              <Paragraph
                kind="span"
                content={title}
                css="text-graphite font-semibold"
              />
              <div>
                <strong className="text-tiaMaria">{quantity}x</strong>
                <Paragraph
                  kind="span"
                  content={`@ $${price}`}
                  css="mx-5 text-pharlap"
                />
                {total && !confirm && <OrderTotal total={total} />}
              </div>
            </div>

            {confirm && (
              <div className="ml-auto flex items-end self-center">
                <OrderTotal total={total} />
              </div>
            )}
          </div>
        </div>
        {!confirm && <IconCart kind="remove" />}
      </div>
      <div className="mt-4 h-[1px] w-full bg-clamShell"></div>
    </>
  );
};

export default Feature;

