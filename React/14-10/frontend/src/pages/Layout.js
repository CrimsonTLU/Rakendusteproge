import React, { Fragment, useContext } from "react"
import { Outlet, Link } from "react-router-dom"
import { UserContext } from "../App.js"

const Layout = ({ children }) => {
  //const [currentUser, setCurrentUser] = useContext(UserContext)

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/todo">Todo list</Link>
          </li>
          <li>
            <Link to="/main">Main</Link>
          </li>
          <li>
            <Link to="/table">Table</Link>
          </li>
          <li>
            <Link to="/contactform">Contact Form</Link>
          </li>
          <li>
            <Link to="/crud">CRUD</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default Layout
