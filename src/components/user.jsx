import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = ({
  _id,
  name,
  profession,
  completedMeetings,
  rate,
  onDelete,
  onToggle,
  ...rest
}) => {
  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>
        <Qualitie {...rest} />
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>
      <td>
        <BookMark onClick={() => onToggle(_id)} {...rest} />
      </td>
      <td>
        <button onClick={() => onDelete(_id)} className="btn bg-danger">
          <span className="badge bg-danger">delete</span>
        </button>
      </td>
    </tr>
  );
};

export default User;
