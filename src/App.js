import React, { Component } from 'react';
import './App.css';
import '@atlaskit/css-reset';
import VideoPlayer from "./components/VideoPlayer";
import ChildrenTest from './components/ChildrenTest';
import SortTeams  from "./components/SortTeams";
import DragComponent  from "./components/DragComponent";
import DnDComponent  from "./components/DnDComponent";
import DnDDemoApp from "./components/DnDDemoApp";


class App extends Component {

  render() {

    
    return (
      <div >
       <DnDComponent/>
       
      </div>
    );
  }
}

export default App;
