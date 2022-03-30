import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "./Home";
import Service from "./Service";
import Contact from "./Contact";
import About from "./About";
import {Route , Switch , Redirect} from 'react-router-dom'
import NavBar from "./NavBar";
import Footer from "./Footer";
import Signup from "./Signup"
import Signin from "./Signin"

const App = () =>{

  return(
    <>
    <NavBar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <Redirect to="/" />
      </Switch>
    <Footer/>
    </>
  )
}

export default App