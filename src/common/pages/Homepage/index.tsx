import { dessertsList } from "@data/data";
import { Dessert } from "../../definition";
import GridLayout from "../../layouts/GridLayout";
import Card from "../../components/Card";

const Page = () => {
  return (
    <div className="mx-8 my-10 md:mx-16 md:my-20 lg:mx-20 lg:my-20">
      <h1 className="text-5xl font-bold text-graphite">Desserts</h1>
      <div className="lg: flex flex-col gap-16 lg:flex-row">
        <GridLayout>
          {dessertsList.map((dessert: Dessert) => (
            <Card dessertProps={dessert} />
          ))}
        </GridLayout>

        <div className="bg-vistaWhite">
          <p>cart ici</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
