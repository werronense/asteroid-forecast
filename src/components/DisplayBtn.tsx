import { FaChevronCircleDown } from "react-icons/fa";
import "./DisplayBtn.scss";

interface DisplayBtnProps {
  closed: boolean;
  clickHandler: () => void;
}

export const DisplayBtn: React.FC<DisplayBtnProps> = ({ closed, clickHandler }) => {
  return (
    <button
      type="button"
      className={`display-btn ${closed ? "display-btn--closed": ""}`}
      onClick={clickHandler}
    >
      <FaChevronCircleDown />
    </button>
  );
};
