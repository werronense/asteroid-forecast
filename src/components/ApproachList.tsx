import React from "react";
import { CloseApproachData } from "../interfaces/asteroid";
import { ApproachItem } from "./ApproachItem";
import "./ApproachList.scss";

interface ApproachListProps {
  approachData: CloseApproachData[];
  closed: boolean;
}

export const ApproachList: React.FC<ApproachListProps> = ({ approachData, closed }) => {
  return (
    <ul className={`approach-list ${closed ? "approach-list--closed" : ""}`}>
      {approachData.map((approach, i) => (
        <ApproachItem key={i} approach={approach} />
      ))}
    </ul>
  );
};
