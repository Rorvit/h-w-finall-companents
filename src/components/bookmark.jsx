import React from "react";

const BookMark = ({ status, ...rest }) => {
  let classes = "";
  status ? (classes = "bi bi-bookmark-fill") : (classes = "bi bi-bookmark");
  return (
    <button {...rest}>
      <i className={classes}></i>
    </button>
  );
};

export default BookMark;
