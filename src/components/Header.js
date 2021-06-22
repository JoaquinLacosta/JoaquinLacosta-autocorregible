import React, { useContext } from "react"
import "./styles/Header.scss"
import { Link } from "react-router-dom"
import AppContext from "../context/AppContext"

const Header = ({ isLogin, isHeroes }) => {
  const { logOut } = useContext(AppContext)
  const hasUser = localStorage.getItem("token")
  return(
    <header className="Header">
      <div className="Header__title">
        <h2 className="Header__title-item">
        <Link to="/">Heroes App</Link>
        </h2>
      </div>
      <nav className="Header__nav">
        <ul className="Nav__list">
          <li className={isHeroes ? "Nav__list-item selected" : "Nav__list-item"}>
            <Link to="/heroes">Heroes</Link>
          </li>
          <li className={isLogin ? "Nav__list-item selected" : "Nav__list-item"}>
            {
              !hasUser ? <Link to="/login">Login</Link>
              : <Link onClick={logOut} to="/login">LogOut</Link>
            }
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header