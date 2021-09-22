import React from "react";
import {BrowserRouter as Router,Switch,Route} from'react-router-dom';

import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";
import recipes from "./pages/recipes";
import Details from "./pages/Details";

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/recipes" component={recipes} exact/>
        <Route path="/:Details" component={Details} exact/>
        
      </Switch>
      <GlobalStyle/>
    </Router>
  );
}
export default App;
