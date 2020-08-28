import React, {Component} from 'react';
import NavBar from "./navBar"
import Profile from "./navBarItemContainer/profile/index.js";
import { Route,Switch } from "react-router-dom";
import Gallery from "./navBarItemContainer/gallery/index"
import Posts from "./navBarItemContainer/posts/index"
import ToDo from "./navBarItemContainer/todo/index"
import SignOut from "../signOut/index";


class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state={
      userData:null,
      link:["profile","posts","gallery","todo"]
    }
  }
  componentDidMount=()=>{
    this.setState(()=>({
      userData:this.props.location.state
    }))
  }
  render(){
    return (
        <div className="container-fluid dashboardHeader">
            <div className="row">
            <div className="col-3 col-md-3 col-lg-3 ">
        <div className="navbarContainer">
         {this.state.link.map((val,ind)=>{
             return <NavBar val={val} key={ind} />
         })}
        </div>
        </div>
        <div className="col-9 col-md-9 col-lg-9 profileContainer">
            <Switch>
            <Route path="/dashboard/gallery" ><Gallery userInfo={this.state.userData?this.state.userData:this.props.location.state} /></Route>
            <Route path="/dashboard/profile"><Profile userInfo={this.state.userData?this.state.userData:this.props.location.state} /></Route>
            <Route path="/dashboard/posts"><Posts userInfo={this.state.userData?this.state.userData:this.props.location.state} /></Route>
            <Route path="/dashboard/todo"><ToDo userInfo={this.state.userData?this.state.userData:this.props.location.state} /></Route>
            </Switch>
      <SignOut userInfo={this.state.userData?this.state.userData:this.props.location.state} />
        </div>
            </div>
        
    </div>
    );
  }

}

export default Dashboard;
