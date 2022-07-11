import React from "react";
import { CgGym } from "react-icons/cg";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const style = { color: "#98a9b7", fontSize: "1.9em", marginBottom: ".1em" };

  return (
    <div  className="bodyPart_item"
      onClick={() => {
        setBodyPart(item);
      }}
    >
      <CgGym style={style} />
      <h4 key={item.id}> {item}</h4>
    </div>
  );
};

export default BodyPart;
