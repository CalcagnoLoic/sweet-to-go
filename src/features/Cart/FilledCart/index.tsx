import IconCart from "../../../common/icons/IconCart";
import Order from "../../Order";
import Paragraph from "../../../common/typographies/Paragraph";

const Component = () => {
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

      <div className="mt-8 flex justify-between">
        <Paragraph
          kind="span"
          content="Order Total"
          css="self-end text-graphite"
        />
        <Paragraph
          kind="span"
          content="$46.50"
          css="text-3xl font-bold text-beaver"
        />
      </div>

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

      <button className="mt-4 w-full justify-center rounded-2xl bg-tiaMaria px-8 py-4 text-vistaWhite">
        Confirm your order
      </button>
    </div>
  );
};

export default Component;
