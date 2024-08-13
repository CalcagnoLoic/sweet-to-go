import { TotalPrice } from "../../../common/definition";

import Paragraph from "../../../common/typographies/Paragraph";

const Feature = ({ total }: TotalPrice) => {
  return (
    <Paragraph
      kind="span"
      content={`$${total}`}
      css="font-semibold text-beaver"
    />
  );
};

export default Feature;
