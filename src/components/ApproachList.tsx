import React from "react";
import { CloseApproachData } from "../interfaces/asteroid";
import { ApproachItem } from "./ApproachItem";
import "./ApproachList.scss";

interface ApproachListProps {
  approachData: CloseApproachData[];
}

export const ApproachList: React.FC<ApproachListProps> = ({ approachData }) => {
  return (
    <ul className="approach-list">
      {approachData.map((approach) => (
        <ApproachItem key={approach.close_approach_date} approach={approach} />
      ))}
    </ul>
  );
};
