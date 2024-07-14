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
      {approachData.map((approach, i) => (
        <ApproachItem key={i} approach={approach} />
      ))}
    </ul>
  );
};
