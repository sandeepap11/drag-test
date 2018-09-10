import React, { Component } from 'react';
import SortableComponent from './SortableComponent';
import BootNav from "./BootNav"
import SayHola  from "./SayHola";

class SortTeams extends Component {

  render() {

    const labels = ["Hola", "Hello", "Namastey", "Bonjour"];
    const componentLabels = [<SayHola key="1" greeting={"Hola"}/>, <SayHola key="2" greeting={"Hello"}/>];

    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Welcome to Ninja Turtle ...</h1>
        </header>
       
       
        <SortableComponent/>
        
      </div>
    );
  }
}

export default SortTeams;
