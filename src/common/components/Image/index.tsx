import { ImageProps } from "../../definition";

const Component = ({ isThumbnail, src, content }: ImageProps) => (
  <img
    src={src}
    alt={content}
    title={content}
    className={` ${isThumbnail ? "h-[75px] w-[75px]" : "h-[300px] w-[300px] lg:h-[250px] lg:w-[250px]"} rounded-3xl`}
  />
);

export default Component;
