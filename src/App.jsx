import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form"
import Teams from "./components/Teams"


const App = () => (
  <div className="App">
    <Header title="Pick My Five" subtitle="Five a Side team selection done easy!" />
    <Form />
    <Teams />
    <Footer notice="Pick My Five designed by Arthur Graham ©" date={((new Date().getFullYear()))} />
  </div>
);

export default App;
