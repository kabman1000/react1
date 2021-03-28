import React from 'react'
import './App.css';
import Header from './components/Header'
import logo from './logo.svg'
import Alert from './components/Alert'

//function App() {
 // return (
   // <div className="App">
     // <h1>Wahun</h1>
   // </div>
  //);
//}

class App extends React.Component{
  render(){
    return(
      <div className='container'>
        <img src={logo} />
        <Header name='User'/>
        <Alert name='James' />
      </div>
    )
  }
}

export default App;
