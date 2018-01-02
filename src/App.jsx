import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Players from "./containers/Players";
import Teams from "./containers/Teams";
import Add from "./containers/Add"


const App = () => (
  <div className="container">
    <Header title="Pick My Five" subtitle="Five a Side team selection done easy!" />

    <Add />

    <Players />

    <Teams />

    <Footer notice="Pick My Five designed by Arthur Graham © " date={((new Date().getFullYear()))} />
  </div>
);

export default App;
