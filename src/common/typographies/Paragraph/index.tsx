import { Paragraph } from "../../definition";

const Typography = ({ kind, content, css }: Paragraph) => {
  switch (kind) {
    case "p":
      return <p className={css}>{content}</p>;

    case "span":
      return <span className={css}>{content}</span>;

    default:
      null;
  }
};

export default Typography;
