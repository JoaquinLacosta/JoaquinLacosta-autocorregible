import React, { useContext } from "react"
import AppContext from "../context/AppContext"
import "./styles/AverageWeightAndHeight.scss"

const AverageWeightAndHeight = () => {
  const { sumAllHeightAndWeights, Team } = useContext(AppContext)
  const { team } = Team
  if(!team.length) {
    return null
  }
  return(
    <div className="WH__Stats">
      <h2 className="WH__Stats-weight">Average team weight: {Math.round(sumAllHeightAndWeights.weight / team.length)}kg</h2>
      <h2 className="WH__Stats-height">Average team height: {Math.round(sumAllHeightAndWeights.height / team.length)}cm</h2>
    </div>
  )
}

export default AverageWeightAndHeight
