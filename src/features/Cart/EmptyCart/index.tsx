import IconCart from "../../../common/icons/IconCart";
import Paragraph from "../../../common/typographies/Paragraph";

const Feature = () => (
  <>
    <IconCart kind="empty" css="block mx-auto my-16" />
    <Paragraph
      kind="p"
      content="You added items will appear here"
      css="block text-center"
    />
  </>
);

export default Feature;
