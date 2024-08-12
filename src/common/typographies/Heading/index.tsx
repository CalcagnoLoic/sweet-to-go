import { Heading } from "../../definition";

const Typography = ({kind, content, css}: Heading) => {
  switch (kind) {
    case "h1":
      return <h1 className={css}>{content}</h1>;

    case "h2":
      return <h2 className={css}>{content}</h2>;

    case "h3":
      return <h3 className={css}>{content}</h3>;

    default:
      null;
  }
};

export default Typography;
