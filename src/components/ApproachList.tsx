import React from "react";
import { CloseApproachData } from "../interfaces/asteroid";
import "./ApproachList.scss";

interface ApproachListProps {
  approachData: CloseApproachData[];
}

export const ApproachList: React.FC<ApproachListProps> = ({ approachData }) => {
  return (
    <ul className="approach-list">
      {approachData.map((approach) => (
        <li key={approach.close_approach_date}>
          <span>{approach.close_approach_date}</span>
          <span>{approach.miss_distance.kilometers}</span>
        </li>
      ))}
    </ul>
  );
};
