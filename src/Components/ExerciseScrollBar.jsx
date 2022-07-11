import React from "react";

import BodyPart from "./BodyPart";
// import Left from "../assets/icons/left-arrow.png";
// import Right from "../assets/icons/right-arrow.png";

const ExerciseScrollBar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <div className="bodyPart">
      {data.map((item) => {
        return (
            <BodyPart
             key={item.id}
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
        );
      })}
    </div>
  );
};

export default ExerciseScrollBar;
