import React,{Component} from 'react';
import './App.css';
import Header from './Components/Header';
import Showarea from './Components/Showarea';
// import pic from "./src/../assets/images/expense.jpg";


class App extends Component {
  render(){
  return (
    <div className="App">
      {/* <h1>Hi! I am in React App</h1> */}
      <Header/>
      <Showarea/>
      {/* <img src={pic} alt="mypic" width="300px"/> */}
     
    </div>
  );
  }
}

export default App;
