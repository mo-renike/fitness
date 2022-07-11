import React from "react";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <div className="details__row">
      <div className="details__row_img">
        <img src={gifUrl} alt={name} />
      </div>
      <div className="details__row_text">
        <h1>{name}</h1>
        Exercises keep you strong. <br />
        <span style={{ textTransform: "capitalize" }}>{name}</span> is one of
        the best exercises to target your {target}. It will help you improve
        your mood and gain energy.
        <div className="details__extra">
          {extraDetail.map((detail, index) => (
            <div key={index} className="details__extra_item">
              <img src={detail.icon} alt={detail.name} />
              <h3>{detail.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
