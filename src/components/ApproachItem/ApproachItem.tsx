import React from "react";
import { FaMeteor } from "react-icons/fa";
import { CloseApproachData } from "../../interfaces/asteroid.ts";
import { formatMillionsOfKms } from "../../utils/format-distances.ts";
import { getShortLocalDate } from "../../utils/format-dates.ts";
import "./ApproachItem.scss";

interface ApproachItemProps {
  approach: CloseApproachData;
}

export const ApproachItem: React.FC<ApproachItemProps> = ({ approach }) => {
  const { kilometers } = approach.miss_distance;

  return (
    <li className="approach-item">
      <h4 className="approach-item__heading">
        <FaMeteor /> {getShortLocalDate(new Date(approach.epoch_date_close_approach))}
      </h4>
      <span className="bold">Near approach distance</span>:<br />
      <span>{formatMillionsOfKms(kilometers)}</span>
    </li>
  );
};
