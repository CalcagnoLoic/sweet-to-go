import { ActionButton } from "../../common/definition";

import IconCart from "../../common/icons/IconCart";
import Order from "../Order";
import OrderButton from "../Order/OrderButton";
import Total from "../Total";

const Feature = ({ onclick }: ActionButton) => {
  return (
    <>
      <div className="fixed left-0 top-0 h-screen w-screen bg-black opacity-80"></div>
      <div className="absolute left-1/2 top-1/3 h-fit w-5/6 -translate-x-1/2 rounded-2xl bg-vistaWhite px-5 py-7 md:w-[600px] md:px-12 md:py-8">
        <IconCart kind="confirm" />

        <h2 className="mt-4 text-2xl font-bold text-graphite md:text-4xl">
          Order Confirmed
        </h2>

        <p className="mt-3 font-semibold text-beaver">
          We hope you enjoy your food!
        </p>

        <section className="mt-8 rounded-3xl bg-softPeach px-5 py-7 md:px-10 md:py-7">
          <Order
            title="Classic Tiramisu"
            quantity={1}
            price="5.50"
            total="5.50"
            confirm
            src="tiramisu"
          />
          <Order
            title="Vanilla Bean Crème brûlée"
            quantity={4}
            price="7.00"
            total="28.00"
            confirm
            src="cremebrulee"
          />
          <Order
            title="Vanilla Panna Cotta"
            quantity={2}
            price="6.50"
            total="13.00"
            confirm
            src="pannacotta"
          />

          <Total total={46.5} />
        </section>

        <OrderButton onclick={onclick} content="Start a New Order" />
      </div>
    </>
  );
};

export default Feature;
