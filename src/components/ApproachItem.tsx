import React from "react";
import { CloseApproachData } from "../interfaces/asteroid";
import { formatMillionsOfKms } from "../utils/format-distances";
import "./ApproachItem.scss";

interface ApproachItemProps {
  approach: CloseApproachData;
}

export const ApproachItem: React.FC<ApproachItemProps> = ({ approach }) => {
  const { kilometers } = approach.miss_distance;

  return (
    <li className="approach-item">
      <h4 className="approach-item__heading">{approach.close_approach_date}</h4>
      <span className="bold">Approach distance</span>:<br />
      <span>{formatMillionsOfKms(kilometers)}</span>
    </li>
  );
};
