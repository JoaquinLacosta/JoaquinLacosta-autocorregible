import React, { useContext } from "react"
import AppContext from "../context/AppContext"
import RemoveButton from "../components/RemoveButton"
import AddButtom from "../components/AddButton"
import { Link } from "react-router-dom"
import "./styles/CharacterCard.scss"

const CharacterCard = (props) => {
  const { removeFromTeam, removeHero, removeVillain, addVillain, addHero } = useContext(AppContext)
  const isHero = props.biography.alignment == "good"
  const handleRemove = (props) => () => {
    if(props.biography.alignment == "good") {
      removeHero(props)
      removeFromTeam(props)
    }
    if(props.biography.alignment == "bad") {
      removeVillain(props)
      removeFromTeam(props)
    }
  }

  const Hero = (props) => () => {
    addHero(props)
  }

  const Villain = (props) => () => {
    addVillain(props)
  }


  return(
    <div className="Character__card">
      <div className="Image__wrapper" style={{backgroundImage: `url(${props.image.url})`}}>
      </div>
      <div className="Character__data-wrapper">
        <ul className="Character__data-list">
          <li className="Data__list-item">Name: {props.name}</li>
          <li className="Data__list-item">Intelligence: {props.powerstats.intelligence}</li>
          <li className="Data__list-item">Strength: {props.powerstats.strength}</li>
          <li className="Data__list-item">Speed: {props.powerstats.speed}</li>
          <li className="Data__list-item">Durability: {props.powerstats.durability}</li>
          <li className="Data__list-item">Power: {props.powerstats.power}</li>
          <li className="Data__list-item">Combat: {props.powerstats.combat}</li>
        </ul>
        <div className="Character__buttons">
          {
            props.isTeam ? <RemoveButton onClick={handleRemove(props)} className="Character__buttons-remove" title="Remove from team" />
            : <AddButtom {...props}  onClick={isHero ? Hero(props) : Villain(props)} />
          }
          
          <Link to={`/character/${props.id}`} className="Details__button">Details</Link>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard