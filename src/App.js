import React from "react";
import navbar from "./navbar";
import Variabel from "./Variable";
import StateProps from "./StateProps";
import Map from "./Map";
import Lifecyle from "./Lifecyle";
import "./App.css";
import Crud from "./crud";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <navbar />
      <h1><center>Hello World</center></h1> */}
      {/* <StateProps/> */}
      {/* <Variabel/> */}
      {/* <Map/> */}
      {/* <Lifecyle/> */}
      <Crud/>
    </div>
  );
}

export default App;
