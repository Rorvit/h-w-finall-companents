import React, { useState, useEffect } from 'react'
import Pagination from './pagination'
import { paginate } from '../utils/paginate'
import User from './user'
import PropTypes from 'prop-types'
import API from '../API'
import GroupList from './groupList'
import SearchStatus from './searchStatus'

const Users = ({ users: allUsers, ...rest }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [professions, setProfessions] = useState()
  const [selectedProf, setSelectedProf] = useState()

  const pageSize = 2
  useEffect(() => {
    API.professions.fetchAll().then((data) => setProfessions(data))
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProf])
  useEffect(() => {
    if (paginate(filteredUsers, currentPage, pageSize) < 1) {
      setCurrentPage(currentPage - 1)
    }
  }, [allUsers])

  const handleProfessionSelect = (item) => {
    setSelectedProf(item)
  }

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }
  const filteredUsers = selectedProf
    ? allUsers.filter((user) => user.profession._id === selectedProf._id)
    : allUsers
  const count = filteredUsers.length
  const usersCrop = paginate(filteredUsers, currentPage, pageSize)
  const clearFilter = () => {
    setSelectedProf()
  }
  return (
    <div className="d-flex">
      {professions && (
        <div className="d-flex flex-column flex-shrink-0 p-3">
          <GroupList
            items={professions}
            selectedItem={selectedProf}
            onItemSelect={handleProfessionSelect}
          />
          <button className="btn btn-secondary mt-2" onClick={clearFilter}>
            Очистить
          </button>
        </div>
      )}
      <div className="d-flex flex-column">
        <SearchStatus length={count} />
        {count > 0 && (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился, раз</th>
                <th scope="col">Оценка</th>
                <th scope="col">Избранное</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {usersCrop.map((user) => (
                <User {...rest} {...user} key={user._id} />
              ))}
            </tbody>
          </table>
        )}
        <div className="d-flex justify-content-center">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  )
}
Users.propTypes = {
  users: PropTypes.array
}

export default Users
