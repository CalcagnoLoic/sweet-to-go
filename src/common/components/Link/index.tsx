import { Link } from "../../definition";

const Component = ({ path, content, css }: Link) => (
  <a href={path} target="_blank" className={css}>
    {content}
  </a>
);

export default Component;
