import React, { useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage"
import { Redirect } from "react-router-dom"
import axios from "axios"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Formik, Form, Field } from "formik"
import CharacterCard from "../components/CharacterCard"
import "./styles/Heroes.scss"

const Heroes = () => {
  const [search, setSearch] = useState("")
  const [results, setResults] = useState([])
  const proxy = "https://thingproxy.freeboard.io/fetch/"
  const api = "https://superheroapi.com/api/4323813290981998/search/"
  const token = useLocalStorage()

  if(!token) {
    return <Redirect to="/login"/>
   } 


  return(
    <>
      <Header isHeroes/>
      <main className="Container">
        <div className="Input__container">
          <Formik
            initialValues={{ search: "" }}
            onSubmit={values => {
              setSearch(values.search)
              if(!values.search.length || values.search.length <= 2) {
                swal.fire({
                icon: 'error',
                title: 'Ups...',
                text: 'No se pudieron obtener los datos!',})
              } else {
                axios.get(proxy+api+values.search)
                  .then(res => setResults(res.data.results))
                  .catch(err => {
                    swal.fire({
                      icon: 'error',
                      title: 'Ups...',
                      text: 'No se pudieron obtener los datos!',})
                  })
              }
            }}
          >
            <Form>
              <Field name="search" type="search" className="alkemy-form-control" placeholder="Search your heroes ex: Ironman"/>
              <button className="alkemy-btn-primary" type="submit">Buscar</button>
            </Form>
          </Formik>
        </div>
        {
             typeof results == "undefined" || !results.length ? <></>
            : <div className="Character__grid">
                {results.map(item => <CharacterCard key={item.id} {...item}/>)}
              </div>
          }
      </main>
      <Footer />
    </>
  )
}

export default Heroes