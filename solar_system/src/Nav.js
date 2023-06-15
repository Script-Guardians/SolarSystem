import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div>
      <Link to="/">Solar System</Link>{' '}
      <Link to="/mars">Mars</Link>{' '}
      <Link to="/mercury">Mercury</Link>{' '}
    </div>
  )
}
