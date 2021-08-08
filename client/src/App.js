import React from "react";
import Homepage from "./pages/homepage"
import { Route, Switch } from "react-router-dom";
import Portfolio from "./pages/portfolio";
import ContactPage from "./pages/ContactPage";
import  Menu  from "./components/menu";
import Header from "./components/header/header";
import About from "./pages/about";

const App = () => {
  return ( 
    <div className="mx-auto max-w-screen-xl px-5 lg:px-4">
      <Header />
      <Menu />  
      <div className="max-w-screen-lg mx-auto">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path='/portfolio' component={Portfolio} />
          <Route exact path="/contactMe" component={ContactPage} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </div>
   );
}

export default App;
