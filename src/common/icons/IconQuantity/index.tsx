import { KeyProps } from "../../definition";

const Icons = ({ kind }: KeyProps) => {
  switch (kind) {
    case "increment":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 10 10"
          className="quantity"
        >
          <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
        </svg>
      );

    case "decrement":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 10 2"
          className="quantity"
        >
          <path d="M0 .375h10v1.25H0V.375Z" />
        </svg>
      );

    default:
      null;
  }
};

export default Icons;
