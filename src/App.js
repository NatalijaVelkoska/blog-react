import React from 'react'
import Nav from "./components/Nav"
import Post from "./pages/Post"
import Home from "./pages/Home"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import GlobalProvider from "./context/GlobalState"

export default function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/:postId' exact component={Post}/>
        </Switch>
      </BrowserRouter>
       
    </GlobalProvider>
   
  )
}
