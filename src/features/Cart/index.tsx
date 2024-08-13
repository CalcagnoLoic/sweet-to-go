import { useState } from "react";

import EmptyCart from "./EmptyCart";
import Heading from "../../common/typographies/Heading";
import FilledCart from "./FilledCart";

const Feature = () => {
  const [fakeQuantity] = useState<number>(0); //passer de 0 à 7 pour voir les deux types de design: empty vs filled

  return (
    <>
      <Heading
        kind="h3"
        content={`Your cart (${fakeQuantity})`}
        css="text-2xl text-tiaMaria md:w-[341px] md:text-3xl lg:text-4xl"
      />

      {fakeQuantity === 0 ? <EmptyCart /> : <FilledCart />}
    </>
  );
};

export default Feature;
