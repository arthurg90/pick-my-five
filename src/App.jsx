import React from "react";
import {
    Route,
    Switch,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Players from "./containers/Players";
import Add from "./containers/Add";
import Generate from "./containers/Generate"


const App = () => (
  <div className="container">

    <Header title="Pick My Five" subtitle="Five a Side team selection done easy!" />

    <Add />

    <Players />

    <Generate />

    <Footer notice="Pick My Five designed by Arthur Graham © " date={((new Date().getFullYear()))} />

  </div>
);

export default App;
