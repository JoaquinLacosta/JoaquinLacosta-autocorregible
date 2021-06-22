import React, { useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage"
import { Redirect } from "react-router-dom"
import useHeroes from "../hooks/useHeroes"
import { ImSearch } from "react-icons/im"
import Header from "../components/Header"
import Footer from "../components/Footer"
import CharacterCard from "../components/CharacterCard"
import "./styles/Heroes.scss"

const Heroes = () => {
  const [search, setSearch] = useState("")
  const [results, setResults] = useState([])
  const [title, setTitle] = useState("Not found heroes")
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
      alert("Insert hero name")
      setTitle("Insert hero name")
    } else {
      setResults(heroes.results)
    }
  }

  return(
    <>
      <Header isHeroes/>
      <main className="Container">
        <div className="Black-filter"></div>
        <div className="Input__container">
          <form onSubmit={handleSubmit}>
            <div>
            <input placeholder="Search your heroes ex: Ironman" onChange={handleChange} type="text" name="heroname" value={search}/>
            <button type="submit"><i>{ImSearch()}</i></button>
            </div>
          </form>
          {
             typeof results == "undefined" || !results.length ? <div className="Heroes__title-container"><h1>{title}</h1></div>
            : <div className="Character__grid">
                {results.map(item => <CharacterCard key={item.id} {...item}/>)}
              </div>
          }
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Heroes