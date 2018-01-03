import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Players from "./containers/Players";
import Teams from "./components/Teams/Teams";
import TeamA from "./containers/TeamA";
import TeamB from "./containers/TeamB";
import Add from "./containers/Add";
import Generate from "./containers/Generate"


const App = () => (
  <div className="container">

    <Header title="Pick My Five" subtitle="Five a Side team selection done easy!" />

    <Add />

    <Players />

    <Generate />

    <TeamA />

    <TeamB />

    <Footer notice="Pick My Five designed by Arthur Graham © " date={((new Date().getFullYear()))} />

  </div>
);

export default App;
