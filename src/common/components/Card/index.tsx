import { CardProps } from "../../definition";
import IconCart from "../../icons/IconCart";

const Component = ({ dessertProps }: CardProps) => {
  return (
    <div key={dessertProps.dessertID} className="relative">
      <img
        src={dessertProps.dessertIllustration}
        alt={dessertProps.dessertName}
        className="h-[300px] w-[300px] rounded-2xl lg:h-[250px] lg:w-[250px]"
        title={dessertProps.dessertName}
      />

      <p className="mt-10 text-pharlap">{dessertProps.dessertCategory}</p>
      <p className="mt-1 font-semibold text-graphite">
        {dessertProps.dessertName}
      </p>
      <p className="mt-2 font-semibold text-tiaMaria">
        ${dessertProps.dessertPrice}
      </p>

      <div className="absolute left-1/2 top-[270px] flex w-3/4 -translate-x-1/2 cursor-pointer justify-center gap-2 rounded-full border-[1px] border-graphite bg-vistaWhite px-5 py-4 hover:border-tiaMaria lg:top-[220px]">
        <IconCart kind="add" />
        <span className="font-semibold">Add to cart</span>
      </div>
    </div>
  );
};

export default Component;
