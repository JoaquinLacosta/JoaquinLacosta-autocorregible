import React from "react"
import "./styles/Footer.scss"
import { Link } from "react-router-dom"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const Footer = () => {
  return <footer className="Footer">
    <ul className="Footer__list">
      <li className="Footer__list-item">
        <a target="_blank" href="https://www.linkedin.com/in/joaquin-lacosta-63a7ab1bb/">
          <i>{FaLinkedin()}</i>
        </a>
      </li>
      <li className="Footer__list-item">
        <a target="_blank" href="https://github.com/JoaquinLacosta">
          <i>{FaGithub()}</i>
        </a>
      </li>
    </ul>
    <h2 className="Footer__description">Hecho por Joaquin Lacosta 🤍</h2>
  </footer>
}

export default Footer