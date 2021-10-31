import React, { useState } from "react";
import Users from "./users";
import SearchStatus from "./searchStatus";
import API from "../API";

const App = () => {
  const [users, setUsers] = useState(API.users.fetchAll());
  const [status, setStatus] = useState(false);
  const handleDelete = (userId) => {
    console.log(userId);
    setUsers(users.filter((user) => user._id !== userId));
  };
  const handleToggleBookMark = (id) => {
    console.log(id);
    status === false ? setStatus(true) : setStatus(false);
  };
  return (
    <div>
      {users.length > 0 ? (
        <table className="table caption-top">
          <SearchStatus length={users.length} />
          <thead>
            <tr>
              <th>Имя</th>
              <th>Качества</th>
              <th>Профессия</th>
              <th>Встретился, раз</th>
              <th>Оценка</th>
              <th>Избранное</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <Users
              users={users}
              status={status}
              onDelete={handleDelete}
              onToggle={handleToggleBookMark}
            />
          </tbody>
        </table>
      ) : (
        <h1>
          <span className="badge bg-danger">Никто с тобой не тусанет</span>
        </h1>
      )}
    </div>
  );
};

export default App;
