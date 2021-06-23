import React from "react"
import { useHistory } from "react-router-dom"

const DetailsButton = (id) => {
  let history = useHistory()

  const handleClick = (id) => {
    history.push(`/${id}`)
  }
  return(
    <>
      <button onClick={handleClick(id)} className="Details__button">Details</button>
    </>
  )
}

export default DetailsButton