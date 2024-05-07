import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Articles() {
  return (
    <div>
      Articles
      <Link to="/articles/art1">art1</Link>
      <Link to="/articles/art2 ">art2</Link>

      <Outlet/>
    </div>
  )
}
