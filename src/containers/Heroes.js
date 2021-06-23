import React, { useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage"
import { Redirect } from "react-router-dom"
import useHeroes from "../hooks/useHeroes"
import { ImSearch } from "react-icons/im"
import Header from "../components/Header"
import Footer from "../components/Footer"
import CharacterCard from "../components/CharacterCard"
import "./styles/Heroes.scss"
import { SwipeableDrawer } from "@material-ui/core"

const Heroes = () => {
  const [search, setSearch] = useState("")
  const [results, setResults] = useState([])
  const token = useLocalStorage()

  if(!token) {
    return <Redirect to="/login"/>
   } 

  const heroes = useHeroes(`https://superheroapi.com/api/4323813290981998/search/${search}`)

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!search.length || search.length <= 2 || typeof search == "undefined") {
      swal.fire({
      icon: 'error',
      title: 'Ups...',
      text: 'No se pudieron obtener los datos!',})
    } else {
      setResults(heroes.results)
    }
  }

  return(
    <>
      <Header isHeroes/>
      <main className="Container">
        <div className="Input__container">
          <form onSubmit={handleSubmit}>
            <div>
            <input placeholder="Search your heroes ex: Ironman" className="alkemy-form-control" onChange={handleChange} type="text" name="heroname" value={search}/>
            <button className="alkemy-btn-primary" type="submit">Buscar</button>
            </div>
          </form>
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