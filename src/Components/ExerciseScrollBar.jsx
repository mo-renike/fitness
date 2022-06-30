import React from "react";

import BodyPart from "./BodyPart";
// import Left from "../assets/icons/left-arrow.png";
// import Right from "../assets/icons/right-arrow.png";

const ExerciseScrollBar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <div className="bodyPart">
      {data.map((item) => {
        return (
          <div
            key={item.id}
            onClick={() => {
              setBodyPart(item);
            }}
          >
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
          </div>
        );
      })}
    </div>
  );
};

export default ExerciseScrollBar;
