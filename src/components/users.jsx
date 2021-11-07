import React, { useState } from 'react'
import Pagination from './pagination'
import { paginate } from '../utils/paginate'
import User from './user'
import PropTypes from 'prop-types'

const Users = ({ users: allUsers, ...rest }) => {
  const count = allUsers.length
  const pageSize = 4
  const [currentPage, setCurrentPage] = useState(1)
  const handlePageChange = (pageIndex) => {
    console.log('page:', pageIndex)
    setCurrentPage(pageIndex)
  }
  const users = paginate(allUsers, currentPage, pageSize)
  return (
    <>
      {users.map((user) => (
        <User key={user._id} {...user} {...rest} />
      ))}
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  )
}
Users.propTypes = {
  users: PropTypes.array.is
}
export default Users
