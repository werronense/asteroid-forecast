import React from "react";
import { CloseApproachData } from "../interfaces/asteroid";
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
      <h3 className="approaches__heading">{heading}</h3>
      <ApproachList approachData={approachData} />
    </div>
  );
};
