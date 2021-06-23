import React, { useState } from "react"
import Header from "../components/Header"
import { Formik, Field, Form } from "formik"
import { useHistory } from "react-router-dom"
import { Post } from "../services/HttpService"
import axios from "axios"
import Footer from "../components/Footer"
import "./styles/Login.scss"

const Login = () => {
  const [message, setMessage] = useState()
  const history = useHistory()
  const proxy = "https://thingproxy.freeboard.io/fetch/"
  const url = "http://challenge-react.alkemy.org"

  return(
    <>
      <Header isLogin/>
      <main className="Container">
        <div className="Black-filter"></div>
        <div className="Form__container">
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={values => {
              Post(proxy+url, JSON.stringify(values))
                .then(res => {
                    localStorage.setItem("token" ,res.token)
                    swal.fire({
                      icon: 'success',
                      title: 'Pudiste loguearte. Serás redirigido al home',
                      text: '',})
                    history.push("/")
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
            }}>
            <Form>
              <div>
                <Field name="email" type="email" className="alkemy-form-control" placeholder="Email"/>
                <Field name="password" type="password" className="alkemy-form-control" placeholder="Password"/>
                <button className="alkemy-btn-primary" type="submit">Login</button>
              </div>
            </Form>
          </Formik>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Login