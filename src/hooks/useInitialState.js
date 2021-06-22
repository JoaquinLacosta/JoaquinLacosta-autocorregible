import { useState } from "react"
import initialState from "../initialState"

const useInitialState = () => {
  const [state, setState] = useState(initialState)
  const [Team, setTeam] = useState({team: [...state.Heroes, ...state.Villains]})

  let powerstats = []
  let appearance = []

  Team.team.map(item => {
    const Powerstats = item.powerstats
    const Appearance = item.appearance
    powerstats = [...powerstats,
        Powerstats
    ]
    appearance = [
      ...appearance,
      {
          height: parseInt(Appearance.height[1]),
          weight: parseInt(Appearance.weight[1])
      }
  ]

    return {
      powerstats,
      appearance
    }
  })

  const sumIntelligence = powerstats.reduce((acum, el) => acum + parseInt(el.intelligence), 0)
  const sumStrength = powerstats.reduce((acum, el) => acum + parseInt(el.strength), 0)
  const sumSpeed = powerstats.reduce((acum, el) => acum + parseInt(el.speed), 0)
  const sumDurability = powerstats.reduce((acum, el) => acum + parseInt(el.durability), 0)
  const sumPower = powerstats.reduce((acum, el) => acum + parseInt(el.power), 0)
  const sumCombat = powerstats.reduce((acum, el) => acum + parseInt(el.combat), 0)

  const sumHeight = appearance.reduce((acum, el) => acum + el.height, 0)
  const sumWeight = appearance.reduce((acum, el) => acum + el.weight, 0)


  const sumAllStats = [
    {
      name: "Intelligence",
      value: sumIntelligence,
      id: 1
    },
    {
      name: "Strength",
      value: sumStrength,
      id: 2
    },
    {
      name: "Speed",
      value: sumSpeed,
      id: 3
    },
    {
      name: "Durability",
      value: sumDurability,
      id: 4
    },
    {
      name: "Power",
      value: sumPower,
      id: 5
    },
    {
      name: "Combat",
      value: sumCombat,
      id: 6
    },
  ]

  const sumAllHeightAndWeights = {
    height: sumHeight,
    weight: sumWeight
}

  const logOut = () => {
    localStorage.removeItem("token")
  }

  const removeHero = (props) => {
    setState({
      ...state,
      Heroes: state.Heroes.filter(item => item.id !== props.id)
    })
  }
  const removeVillain = (props) => {
    setState({
      ...state,
      Villains: state.Villains.filter(item => item.id !== props.id)
    })
  }
  const addVillain = (props) => {
    setState({
      ...state,
      Villains: [
        ...state.Villains,
        props
      ]
    })
    setTeam({
      ...Team,
      team: [
        ...Team.team,
        props
      ]
    })
  }

  const addHero = (props) => {
    setState({
      ...state,
      Heroes: [
        ...state.Heroes,
        props
      ]
    })
    setTeam({
      ...Team,
      team: [
        ...Team.team,
        props
      ]
    })
  }

  const removeFromTeam = (props) => {
     setTeam({
       ...Team,
       team: Team.team.filter(item => item.id !== props.id)
     })
     }

  return {
    state,
    Team,
    sumAllStats,
    sumAllHeightAndWeights,
    removeHero,
    removeFromTeam,
    removeVillain,
    addVillain,
    addHero,
    logOut
  }
}

export default useInitialState