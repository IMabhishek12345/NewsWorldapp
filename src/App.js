import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';

import React, { Component } from 'react' // by installing es7 react/redux extension we can directly ge this by just writing rcc
// working on class based component
// Methods management is little bit easy in class based components
import {
  BrowserRouter,
  Route,
  // Link,
  Switch
} from "react-router-dom";
  

export default class App extends Component {
  render() {
    
    return (
      <div>
       <BrowserRouter>
       <Navbar />
       <Switch>

          <Route exact path="/"><News key="general" pageSize={this.pageSize} country='in' category='general'/></Route>
          <Route exact path="/business"><News key="business" pageSize={this.pageSize} country='in' category='business'/></Route>
          <Route exact path="/entertainment"><News key="entertainment" pageSize={this.pageSize} country='in' category='entertainment'/></Route>
          <Route exact path="/general"><News  key="general" pageSize={this.pageSize} country='in' category='general'/></Route>
          <Route exact path="/health"><News key="health" pageSize={this.pageSize} country='in' category='health'/></Route>
          <Route exact path="/science" ><News key="science" pageSize={this.pageSize} country='in' category='science'/></Route>
          <Route exact path="/sports"><News key="sports" pageSize={this.pageSize} country='in' category='sports'/></Route>
          <Route exact path="/technology"><News  key="technology" pageSize={this.pageSize} country='in' category='technology'/></Route>

       </Switch>
            
       </BrowserRouter>
      </div>
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


