import Paragraph from "../../typographies/Paragraph";
import Link from "../Link";

const Component = () => (
  <footer className="mt-20 text-center font-semibold text-graphite">
    <Paragraph
      kind="p"
      content="&copy; Sweet to go - 2024 - Project based on Frontend Mentor"
    />
    <Paragraph
      kind="p"
      content={
        <>
          Coding with love by
          <Link
            path="https://github.com/CalcagnoLoic"
            content=" @CalcagnoLoic "
          />
          and
          <Link path="https://github.com/JodieAddis" content=" @JodieAddis " />
          🚀
        </>
      }
    />
  </footer>
);

export default Component;
