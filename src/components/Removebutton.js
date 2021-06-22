import React from "react"

const RemoveButton = (props) => {
  return (
    <button onClick={props.onClick} className="Character__buttons-remove">{props.title}</button>
  )
}

export default RemoveButton
