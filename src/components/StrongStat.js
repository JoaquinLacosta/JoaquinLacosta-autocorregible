import React, { useContext } from "react"
import AppContext from "../context/AppContext"
import "./styles/StrongStat.scss"

const StrongStat = () => {
  const { sumAllStats, Team } = useContext(AppContext)
  const { team } = Team
  const orderedStats = sumAllStats.sort((a, b) => b.value - a.value)
  if(!team.length) {
    return null
  }
  return(
    <div className="Stats__powerful">
      <h2>Your teampower are based on: {orderedStats[0].name.toUpperCase()}</h2>
    </div>
  )
}

export default StrongStat
