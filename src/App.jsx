import React from "react";
import "./App.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Players from "./containers/Players";
import Add from "./containers/Add";
import Generate from "./containers/Generate"


const App = () => (
  <div className="container">
    {/* Single page app so router not necessary */}
    <Header title="Pick My Five" subtitle="Create five-a-side football teams on the fly" />
    {/*The add element loads the input field and button elements*/}
    <Add />
    {/*The Player element renders the list of players added into the input field*/}
    <Players />
    {/*The Generate element renders the generate button and list of teams*/}
    <Generate />
    <Footer notice="Pick My Five designed by Arthur Graham © " date={((new Date().getFullYear()))} />
  </div>
);

export default App;
