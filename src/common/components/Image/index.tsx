import { ImageProps } from "../../definition";

const Component = ({ isThumbnail, src, content, css, action }: ImageProps) => (
  <img
    src={src}
    alt={content}
    title={content}
    className={` ${isThumbnail ? "h-[75px] w-[75px]" : "h-[300px] w-[300px] xl:h-[250px] xl:w-[250px]"} ${css} cursor-pointer rounded-3xl`}
    onClick={action}
  />
);

export default Component;
