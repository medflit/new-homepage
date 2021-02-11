import React, { Component } from 'react';
import './App.css';
// import './assets/css/style.css';
import Navigation from './components/generalComponents/Navigation';
import Footer from './components/generalComponents/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation/>
          <Home/>
          <Footer/>
        </div>
      </Router>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
