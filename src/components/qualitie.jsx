import React from "react";

const Qualitie = (props) => {
  return (
    <>
      {props.qualities.map((quality) => (
        <span key={quality._id} className={`badge bg-${quality.color} m-2`}>
          {quality.name}
        </span>
      ))}
    </>
  );
};

export default Qualitie;
