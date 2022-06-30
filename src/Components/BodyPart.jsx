import React from 'react'
import { CgGym } from "react-icons/cg";


const BodyPart = ({item, setBodyPart, bodyPart}) => {
  const style = { color: "#98a9b7", fontSize: "1.9em", marginBottom: ".1em" };

  return (
    <div>
        <CgGym style={style} />
            <h4> {item}</h4>
    </div>
  )
}

export default BodyPart