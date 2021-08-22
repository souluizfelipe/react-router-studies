import React from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
  return (
    <>
      <h1>Users</h1>
      <ul>
        <li>
          <Link to='/' >Home</Link>
        </li>
        <li>
          <Link to='/users' >Users</Link>
        </li>
      </ul>
    </>
  )
}

export default Users