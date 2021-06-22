import { useState, useEffect } from "react"
import axios from "axios"

const useHeroes = (api) => {
  const [heroes, setHeroes] = useState()
  const proxy = "https://thingproxy.freeboard.io/fetch/"
  useEffect(() => {
    axios({
      url: proxy+api,
      method: "GET"
    })
      .then(data => {
        if(data.status == 200) {
          setHeroes(data.data)
        }
      })
      .catch(err => {
        alert("Error calling api")
      })
  }, [api])

  return heroes
}

export default useHeroes