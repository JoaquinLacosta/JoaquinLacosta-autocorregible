import React, { useContext } from "react"
import AppContext from "../context/AppContext"

const AddButton = (props) => {
  const { state, addVillain } = useContext(AppContext)
  const { Heroes, Villains } = state
  const { alignment } = props.biography
  const isHero = alignment === "good"
  const fullHeroes = Object.keys(Heroes).length === 3
  const fullVillains = Object.keys(Villains).length === 3

  return (
    <>
    {
      isHero ? <button onClick={props.onClick} disabled={fullHeroes} className={fullHeroes ? "alkemy-btn-primary" : "alkemy-btn-primary"}>{ fullHeroes ? "You cannot add more heroes" : "Add hero" }</button>
      : <button onClick={props.onClick} disabled={fullVillains} className={fullVillains ? "alkemy-btn-primary" : "alkemy-btn-primary"}>{ fullVillains ? "You cannot add more villains" : "Add villain" }</button>
    }
  </>
  )
}

export default AddButton