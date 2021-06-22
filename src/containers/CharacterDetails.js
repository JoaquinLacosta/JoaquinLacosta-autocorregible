import React, { useEffect, useState } from "react"
import { useParams, Redirect } from "react-router-dom"
import axios from "axios"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Loader from "../components/Loader"
import useLocalStorage from "../hooks/useLocalStorage"
import "./styles/CharacterDetails.scss"

const CharacterDetails = () => {
  const token = useLocalStorage()
  const [details, setDetails] = useState()
  const { id } = useParams()
  const proxy = "https://thingproxy.freeboard.io/fetch/"
  const url = `https://superheroapi.com/api/4323813290981998/${id}`
  useEffect(() => {
    axios.get(proxy+url)
      .then(data => {
        if(data.status == 200) {
          setDetails([data.data])
        }
      })
      .catch(err => alert("Error calling api"))
  }, [])

  if(!token) {
    return <Redirect to="/login"/>
   } 
  
  return(
    <>
      <Header />
      <main className="Container">
        <div className="Black-filter"></div>
        <div className="Hero__description">
          {typeof details == "undefined" ? <div className="Description__container">
              <Loader />
          </div> :
            details.map(item => (
              <div className="Description__container" key={item.id}>
                <div className="Description__container-image">
                  <img src={item.image.url} alt={item.name + " photo"}/>
                  <div>
                    <p>Intelligence: <span>{item.powerstats.intelligence}</span></p>
                    <p>Strength: <span>{item.powerstats.strength}</span></p>
                    <p>Speed: <span>{item.powerstats.speed}</span></p>
                    <p>Durability: <span>{item.powerstats.durability}</span></p>
                    <p>Power: <span>{item.powerstats.power}</span></p>
                    <p>Combat: <span>{item.powerstats.combat}</span></p>
                  </div>
                </div>
                <div className="Description__container-biography">
                  <h1>Name: <span>{item.name}</span></h1>
                  <article className="Biography__item">
                    <h2>Appearance</h2>
                    <p>Eye color: <span>{item.appearance["eye-color"]}.</span></p>
                    <p>Gender: <span>{item.appearance["gender"]}.</span></p>
                    <p>Hair color: <span>{item.appearance["hair-color"]}.</span></p>
                    <p>Height: <span>{item.appearance.height[1]}.</span></p>
                    <p>Weight: <span>{item.appearance.weight[1]}.</span></p>
                  </article>
                  <article className="Biography__item">
                    <h2>Biography</h2>
                    <p>Full name: <span>{item.biography["full-name"]}.</span></p>
                    <p>Alignment: <span>{item.biography["alignment"]}.</span></p>
                    <p>Publisher: <span>{item.biography["publisher"]}.</span></p>
                    <p>Alias: <span>{item.biography.aliases[0]}.</span></p>
                    <p>Work: <span>{item.work.occupation}.</span></p>
                  </article>

                </div>
              </div>

            ))
          }
        </div>
      </main>
      <Footer />
    </>
  )
}

export default CharacterDetails