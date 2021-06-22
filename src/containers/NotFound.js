import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Logo from "../assets/static/not-found.png"
import "./styles/NotFound.scss"


const NotFound = () => {
  return (
  <>
    <Header />
    <main className="Container">
      <div className="Black-filter"></div>
      <div className="Image__container">
        <img src={Logo} alt="Error 404 logo page not found"/>
      </div>
    </main>
    <Footer />
  </>
  )
}

export default NotFound