import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/dbr_logo.png"
console.log(logo)

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
    <img src={logo} alt="Logo" draggable="false"/>

      <ul>
        <li>
          <Link
            to="/" // to="/port/
            style={{
              color: `black`,
              textDecoration: `none`,
            }}
          >
            <span className="underline">showreel</span>
          </Link>
        </li>
        <li>
          <Link
            to="/"
            style={{
              color: `black`,
              textDecoration: `none`,
            }}
          >
          <span className="underline">home</span>
          </Link>
        </li>
      </ul>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
