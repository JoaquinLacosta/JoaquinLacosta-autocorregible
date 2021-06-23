import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import AppContext from "../context/AppContext"

const Header = ({ isLogin, isHeroes }) => {
  const { logOut } = useContext(AppContext)
  const hasUser = localStorage.getItem("token")
  return(
        <ul className="nav nav-tabs bg-primary">
          <li className="nav-item">
            <NavLink exact activeClassName="active" className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact activeClassName="active" className="nav-link" to="/search">Search</NavLink>
          </li>
          <li className="nav-item">
            {
              !hasUser ? <NavLink exact activeClassName="active" className="nav-link" to="/login">Login</NavLink>
              : <NavLink className="nav-link" onClick={logOut} to="/login">LogOut</NavLink>
            }
          </li>
        </ul>
  )
}

export default Header