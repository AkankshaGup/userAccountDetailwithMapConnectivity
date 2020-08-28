import React, {Component} from 'react';
import '../App.css';
import { BrowserRouter, Route,Switch } from "react-router-dom";
import UserData from "../component/List/index";
import Dashboard from "../component/dashboard/index"

class App extends Component{
  render(){
    return (
      <div>
    <BrowserRouter>
    <Switch>
    <Route path="/" component={UserData} exact={true} />
    <Route path="/dashboard" component={Dashboard} />
        </Switch>
    </BrowserRouter>
      </div>
    );
  }

}

export default App;
