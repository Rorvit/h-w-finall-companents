import React, { useState } from "react";
import api from "../API";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    let indexToDelete = users.findIndex((user) => {
      return user._id === userId.id;
    });

    let usersUpdated = users
      .slice(0, indexToDelete)
      .concat(users.slice(indexToDelete + 1, users.length));

    setUsers(usersUpdated);
  };

  const renderPhrase = (number) => {
    if (number === 0) {
      return (
        <span className={"badge m-2 bg-danger"}>Никто с тобой не тусанет</span>
      );
    }
    if (
      [2, 3, 4].some((el) => {
        let booly = el === number % 10 && Math.trunc(number / 10) !== 1;
        console.log(booly);
        return booly;
      })
    ) {
      return (
        <span className={"badge bg-primary"}>
          {number} человека тусанут с тобой сегодня
        </span>
      );
    } else {
      return (
        <span className={"badge bg-primary"}>
          {number} человек тусанет с тобой сегодня
        </span>
      );
    }
  };

  const usersRowsMarkup = users.map((user, index) => {
    const renderUserQualities = () => {
      return user.qualities.map((quality) => (
        <div
          key={quality._id}
          className={"badge rounded-pill bg-" + quality.color}
          style={{ fontSize: "15px" }}
        >
          {quality.name}
        </div>
      ));
    };

    return (
      <tr key={user._id.toString()}>
        <th scope="row">{index + 1}</th>
        <td>{user.name}</td>
        <td>{renderUserQualities()} </td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}</td>
        <td>
          <button
            onClick={() => handleDelete({ id: user._id })}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <React.Fragment>
      <h2>{renderPhrase(users.length)}</h2>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Имя</th>
            <th>Качества</th>
            <th>Профессия</th>
            <th>Кол-во встреч</th>
            <th>Оценка</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{usersRowsMarkup}</tbody>
      </table>
    </React.Fragment>
  );
};

export default Users;
