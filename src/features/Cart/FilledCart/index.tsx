import { createPortal } from "react-dom";
import { useState } from "react";

import ConfirmationModal from "../../ConfirmationModal";
import IconCart from "../../../common/icons/IconCart";
import Order from "../../Order";
import OrderButton from "../../Order/OrderButton";
import Paragraph from "../../../common/typographies/Paragraph";
import Total from "../../Total";

const Feature = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModal = () => {
    setIsOpen((prevState) => !prevState);
    scrollTo({ top: 1, behavior: "smooth" });
  };

  return (
    <div className="mt-10">
      <Order title="Classic Tiramisu" quantity={1} price="5.50" />
      <Order
        title="Vanilla Bean Crème brûlée"
        quantity={4}
        price="7.00"
        total="28.00"
      />
      <Order
        title="Vanilla Panna Cotta"
        quantity={2}
        price="6.50"
        total="13.00"
      />

      <Total total={46.5} />

      <div className="mt-7 flex w-full justify-center rounded-2xl bg-softPeach px-8 py-4">
        <IconCart kind="carbon_neutral" />
        <Paragraph
          kind="span"
          css="text-graphite"
          content={
            <>
              This is a <strong>carbon-neutral</strong> delivery
            </>
          }
        />
      </div>

      <OrderButton onclick={handleModal} content="Confirm your Order" />

      {isOpen &&
        createPortal(
          <ConfirmationModal onclick={handleModal} />,
          document.body,
        )}
    </div>
  );
};

export default Feature;
