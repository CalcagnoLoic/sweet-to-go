import { Dessert } from "../../definition";
import { dessertsList } from "../../data/data";

import Card from "../../components/Card";
import Cart from "../../../features/Cart";
import GridLayout from "../../layouts/GridLayout";
import Heading from "../../typographies/Heading";

const Page = () => {
  return (
    <>
      <Heading
        kind="h1"
        content="Desserts"
        css="text-5xl font-bold text-graphite"
      />

      <div className="flex flex-col gap-20 xl:gap-32 lg:flex-row">
        <GridLayout>
          {dessertsList.map((dessert: Dessert) => (
            <Card dessertProps={dessert} />
          ))}
        </GridLayout>

        <div className="rounded-3xl bg-vistaWhite p-6 h-fit">
          <Cart />
        </div>
      </div>
    </>
  );
};

export default Page;
