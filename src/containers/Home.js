import React, { useContext, useEffect, useState } from "react"
import { Redirect, Link } from "react-router-dom"
import useLocalStorage from "../hooks/useLocalStorage"
import Header from "../components/Header"
import Footer from "../components/Footer"
import StrongStat from "../components/StrongStat"
import CharacterCard from "../components/CharacterCard"
import AverageWeightAndHeight from "../components/AverageWeightAndHeight"
import StatsList from "../components/StatsList"
import "./styles/Home.scss"
import AppContext from "../context/AppContext"


const Home = () => {
  const { Team } = useContext(AppContext)
  const { team } = Team
  const token = useLocalStorage()

  if(!token) {
    return <Redirect to="/login"/>
   } 
    return <>
      <Header/>
        <main className="Container">
          <div className="Black-filter"></div>
          <StrongStat />
          <AverageWeightAndHeight />
          {
            !team.length ? 
              <div className="Noteam__title">
                <Link className="Noteam__title-item" to="/heroes">Create your team</Link>
              </div>
            : <div className="Character__grid">{
            team.map(item => {
              return <CharacterCard {...item} key={item.id} isTeam/>
            })
            }</div>
          }
          <StatsList />
        </main>
      <Footer />
    </>
}

export default Home