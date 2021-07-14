import React from "react";
import Arrow from "./components/arrow";
import Homepage from "./pages/homepage"
import { Route, Switch } from "react-router-dom";
import Portfolio from "./pages/portfolio";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return ( 
    <div className="max-w-screen-lg mx-auto" >
      <Arrow />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path="/contactMe" component={ContactPage} />
      </Switch>
    </div>
   );
}
 
export default App;
