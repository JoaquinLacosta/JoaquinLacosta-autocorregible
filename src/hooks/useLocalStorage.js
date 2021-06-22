import { useState, useEffect } from "react"

const useLocalStorage = () => {
  const [token, setToken] = useState(localStorage.getItem("token"))
  useEffect(() => {
    setToken(localStorage.getItem("token"))
  }, [])

  return token
}

export default useLocalStorage