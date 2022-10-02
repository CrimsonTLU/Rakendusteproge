import { Outlet, Link } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
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
