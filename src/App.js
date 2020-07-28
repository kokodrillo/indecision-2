import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      options:['one','two']
    }
  }
  
render(){
  return(
    <div>
    <p>TITLE</p>
    <Header title = "Indecision App"
            subtitle = "Put your life in hands of a computer"/>
    </div>
  )
  }
};




export default App;
