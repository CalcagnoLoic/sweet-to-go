import { dessertsList } from "../../data/data";
import { Dessert } from "../../definition";
import GridLayout from "../../layouts/GridLayout";
import Card from "../../components/Card";
import Heading from "../../typographies/Heading";

const Page = () => {
  return (
    <>
      <Heading
        kind="h1"
        content="Desserts"
        css="text-5xl font-bold text-graphite"
      />

      <div className=" flex flex-col gap-16 lg:flex-row">
        <GridLayout>
          {dessertsList.map((dessert: Dessert) => (
            <Card dessertProps={dessert} />
          ))}
        </GridLayout>

        <div className="bg-vistaWhite">
          <p>cart ici</p>
        </div>
      </div>
    </>
  );
};

export default Page;
