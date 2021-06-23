import React, { useContext } from "react"
import AppContext from "../context/AppContext"
import { useHistory } from "react-router-dom"
import RemoveButton from "../components/RemoveButton"
import AddButtom from "../components/AddButton"
import { Link } from "react-router-dom"

const CharacterCard = (props) => {
  const { removeFromTeam, removeHero, removeVillain, addVillain, addHero } = useContext(AppContext)
  const history = useHistory()
  const isHero = props.biography.alignment == "good"
  const handleRemove = (props) => () => {
    if(props.biography.alignment == "good") {
      removeHero(props)
      removeFromTeam(props)
      Swal.fire({
        icon: 'success',
        title: 'Heroe elminado',
        text: ''
    })
    }
    if(props.biography.alignment == "bad") {
      removeVillain(props)
      removeFromTeam(props)
      Swal.fire({
        icon: 'success',
        title: 'Villano eliminado',
        text: ''
    })
    }
  }

  const Hero = (props) => () => {
    addHero(props)
    Swal.fire({
      icon: 'success',
      title: 'Heroe agregado',
      text: ''
  })
  }

  const Villain = (props) => () => {
    addVillain(props)
    Swal.fire({
      icon: 'success',
      title: 'Villano agregado',
      text: ''
  })
  }


  return(
    <div className="alkemy-card">
      <img src={props.image.url}/>
      <div className="Character__data-wrapper">
          <h5 className="card-title">{props.name}</h5>
          {
            props.isTeam
              ? <>
              <p className="card-text">Intelligence: {props.powerstats.intelligence}</p>
              <p className="card-text">Strength: {props.powerstats.strength}</p>
              <p className="card-text">Speed: {props.powerstats.speed}</p>
              <p className="card-text">Durability: {props.powerstats.durability}</p>
              <p className="card-text">Power: {props.powerstats.power}</p>
              <p className="card-text">Combat: {props.powerstats.combat}</p>
              </>
              : <></>
          }
        <div className="Character__buttons">
          {
            props.isTeam ? <RemoveButton onClick={handleRemove(props)} title="Remove from team" />
            : <AddButtom {...props}  onClick={isHero ? Hero(props) : Villain(props)} />
          }
          
          <button onClick={() => history.push(`/character/${props.id}`)} className="alkemy-btn-primary">Details</button>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard