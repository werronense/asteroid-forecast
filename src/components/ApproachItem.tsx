import React from "react";
import { CloseApproachData } from "../interfaces/asteroid";

interface ApproachItemProps {
  approach: CloseApproachData;
}

export const ApproachItem: React.FC<ApproachItemProps> = ({ approach }) => {
  return (
    <li>
      <span>{approach.close_approach_date}</span>
      <span>{approach.miss_distance.kilometers}</span>
    </li>
  );
};
