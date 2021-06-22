import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import NotFound from "../containers/NotFound"
import Home from "../containers/Home"
import Login from "../containers/Login"
import CharacterDetails from "../containers/CharacterDetails"
import Heroes from "../containers/Heroes"
import useInitialState from "../hooks/useInitialState"
import AppContext from "../context/AppContext"

function App() {
  const initialState = useInitialState()
  return(
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/character/:id" component={CharacterDetails}/>
          <Route exact path="/heroes" component={Heroes}/>
          <Route exact path="/login" component={Login}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App