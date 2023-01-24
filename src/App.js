import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';

import React,{useState} from 'react' // by installing es7 react/redux extension we can directly ge this by just writing rcc
// working on class based component
// Methods management is little bit easy in class based components
import {
  BrowserRouter,
  Route,
  // Link,
  Switch
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';  

const App=()=>{
  const pageSize=10;
  const apikey=process.env.REACT_APP_NEWS_API;
  const[progress,setProgress]=useState(10);
  //setProgress(progress);
  
    return (
      <div>
       <BrowserRouter>
       <Navbar />
       <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
       />
        
       <Switch>

          <Route exact path="/"><News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country='in' category='general'/></Route>
          <Route exact path="/business"><News setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize} country='in' category='business'/></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize} country='in' category='entertainment'/></Route>
          <Route exact path="/general"><News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country='in' category='general'/></Route>
          <Route exact path="/health"><News setProgress={setProgress} apikey={apikey} key="health" pageSize={pageSize} country='in' category='health'/></Route>
          <Route exact path="/science" ><News setProgress={setProgress} apikey={apikey} key="science" pageSize={pageSize} country='in' category='science'/></Route>
          <Route exact path="/sports"><News setProgress={setProgress} apikey={apikey} key="sports" pageSize={pageSize} country='in' category='sports'/></Route>
          <Route exact path="/technology"><News setProgress={setProgress} apikey={apikey} key="technology" pageSize={pageSize} country='in' category='technology'/></Route>

       </Switch>
            
       </BrowserRouter>
      </div>
    )
  
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
export default App

