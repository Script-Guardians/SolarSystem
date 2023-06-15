import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div>
      <Link to="/">Solar System</Link>{' '}
      <Link to="/mars">Mars</Link>{' '}
      <Link to="/mercury">Mercury</Link>{' '}
      <Link to="/venus">Venus</Link>{' '}
      <Link to="/earth">Earth</Link>{' '}
      <Link to="/jupiter">Jupiter</Link>{' '}
      <Link to="/uranus">Uranus</Link>{' '}
      <Link to="/neptune">Neptune</Link>{' '}
      <Link to="/saturn">Saturn</Link>{' '}
    </div>
  )
}
