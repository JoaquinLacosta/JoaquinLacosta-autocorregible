import React, { useState } from "react"
import Header from "../components/Header"
import { useHistory } from "react-router-dom"
import axios from "axios"
import Footer from "../components/Footer"
import "./styles/Login.scss"

const Login = () => {
  const [form, setForm] = useState()
  const [message, setMessage] = useState()
  const history = useHistory()
  const proxy = "https://thingproxy.freeboard.io/fetch/"
  const url = "http://challenge-react.alkemy.org"


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    if(typeof form.email == "undefined") {
      setMessage("Invalid email")
    } else if(!form.password) {
      setMessage("Invalid password")
    } else if(form.email && form.password) {
      axios.post(proxy+url, JSON.stringify(form), {
        headers: { 
          'Access-Control-Allow-Origin': 'true',
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          if(res.status == 200) {
            localStorage.setItem("token" ,res.data.token)
            swal.fire({
              icon: 'success',
              title: 'Pudiste loguearte. Serás redirigido al home',
              text: '',})
            history.push("/")
          }
        })
        .catch(err => {
          if(err) {
            Swal.fire({
              icon: 'error',
              title: 'Ups...',
              text: 'Error al loguearse!',
            })
          }
          Swal.fire({
            icon: 'warning',
            title: 'Alerta',
            text: 'Datos incorrectos',
        })
        })
    }
  }

  return(
    <>
      <Header isLogin/>
      <main className="Container">
        <div className="Black-filter"></div>
        <div className="Form__container">
          <form onSubmit={handleSubmit}>
            <div>
              <label for="email" class="alkemy-form-label">Email</label>
              <input minLength="8" className="alkemy-form-control" onChange={handleChange} required type="email" name="email" placeholder="Email"/>
              <label for="password" class="alkemy-form-label">Password</label>
              <input minLength="4" className="alkemy-form-control" onChange={handleChange} required type="password" name="password" placeholder="Password"/>
              <div className="Button__wrapper">
                <span className={message == "Logged" ? "Error-message login" : "Error-message"}>{message}</span>
                <button className="alkemy-btn-primary" type="submit">Login</button>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Login