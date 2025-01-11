import React, { useState } from "react";
import { CloseApproachData } from "../../interfaces/asteroid.ts";
import { DisplayBtn } from "../DisplayButton/DisplayBtn.tsx";
import "./Approaches.scss";

import { ApproachList } from "../ApproachList/ApproachList.tsx";

interface ApproachesProps {
  heading: string;
  approachData: CloseApproachData[];
}

export const Approaches: React.FC<ApproachesProps> = ({
  heading,
  approachData,
}) => {
  const [isListClosed, setIsListClosed] = useState(true);

  const toggleClosed = (): void => {
    setIsListClosed((isListClosed) => !isListClosed);
  }

  return (
    <div className="approaches">
      <div className="approaches__group">
        <h3 className="approaches__heading">{heading}</h3>
        <div className="approaches__btn-container">
          <DisplayBtn
            closed={isListClosed}
            clickHandler={toggleClosed}
          />
        </div>
      </div>
      <ApproachList approachData={approachData} closed={isListClosed} />
    </div>
  );
};
