import React from "react";
import { CloseApproachData } from "../interfaces/asteroid";
import { DisplayBtn } from "./DisplayBtn";
import "./Approaches.scss";

import { ApproachList } from "./ApproachList";

interface ApproachesProps {
  heading: string;
  approachData: CloseApproachData[];
}

export const Approaches: React.FC<ApproachesProps> = ({
  heading,
  approachData,
}) => {
  return (
    <div className="approaches">
      <div className="approaches__group">
        <h3 className="approaches__heading">{heading}</h3>
        <div className="approaches__btn-container">
          <DisplayBtn
            closed={false}
            clickHandler={() => console.log("click")}
          />
        </div>
      </div>
      <ApproachList approachData={approachData} />
    </div>
  );
};
