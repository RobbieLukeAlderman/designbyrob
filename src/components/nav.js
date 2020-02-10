import React from "react"
import { Link } from "gatsby"

const Nav = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/customers">Customers</Link>
    </li>
  </ul>
)

export default Nav
