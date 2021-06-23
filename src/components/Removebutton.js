import React from "react"

const RemoveButton = (props) => {
  return (
    <button onClick={props.onClick} className="alkemy-btn-danger">{props.title}</button>
  )
}

export default RemoveButton
