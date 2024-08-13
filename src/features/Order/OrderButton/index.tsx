import { ActionButton } from "../../../common/definition";

const Feature = ({ onclick, content }: ActionButton) => {
  return (
    <button
      className="mt-4 w-full justify-center rounded-2xl bg-tiaMaria px-8 py-4 text-vistaWhite transition duration-300 ease-in-out"
      onClick={onclick}
    >
      {content}
    </button>
  );
};

export default Feature;
