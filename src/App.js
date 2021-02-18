import React, { Component } from 'react';
import './App.css';
// import './assets/css/style.css';
import Navigation from './components/generalComponents/Navigation';
import Footer from './components/generalComponents/Footer';
import Home from './components/Home';
import AdminLogin from './components/AdminLogin';
import Conditions from './components/Conditions';
import Faq from './components/Faq';
import { BrowserRouter as Router, Route, Link, HashRouter } from 'react-router-dom';

// import 'animate.css'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation/>
          <div className="content">
            <Route exact path="/" component={ Home }/>
            <Route path="/admin-login" component={ AdminLogin }/>
            <Route path="/conditions" component={ Conditions }/>
            <Route path="/faq" component={ Faq }/>
          </div>
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
