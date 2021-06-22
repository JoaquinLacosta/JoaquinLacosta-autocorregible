import React, { useContext } from "react"
import AppContext from "../context/AppContext"
import "./styles/StatsList.scss"

const StatsList = () => {
  const { sumAllStats, Team } = useContext(AppContext)
  const { team } = Team
  const orderedStats = sumAllStats.sort((a, b) => b.value - a.value)
  if(!team.length) {
    return null
  }
  return(
    <>
      <div className="Team__stats">
        <ul className="Stats__list">{
          orderedStats.map(item => (
            <li className="Stats__list-item" key={item.id}>{item.name}: {item.value} Points</li>
          ))
        }
        </ul>
      </div>
    </>
  )
}

export default StatsList;