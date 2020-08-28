import React, {Component} from 'react';
import ListItem from "./listItem";
import { connect } from "react-redux";
import {Header} from "./header";
import {setState} from "../../action/index"

class UserData extends Component{
  constructor(props){
    super(props);
    this.state={
      userData:[]
    }
  }
  componentDidMount=()=>{
    fetch("https://panorbit.in/api/users.json",{
      method:'get',
      header:{'Content-Type': 'application/json'},
     })
      .then(res=>res.json())
      .then(response => {
        this.setState(()=>({
          userData:response.users
        }),()=>this.props.setState(this.state.userData))
      
      })
  }
  render(){
    return (
        <div className="container">
        <div className="row">
        <div className="col-12 col-md-6 col-lg-6 mx-auto Maincontainer">
            <div className="row">
            <Header />
            </div>

          <div className="scrollDiv" >
          {this.state.userData.map((val,ind)=>{
                 return <ListItem item={val} key={ind} />
               })}
            
          </div>
              
           </div>           
        </div>
    </div>
    );
  }

}

const mapDispatchToProps=(dispatch) =>{
  return{
  setState:(state)=>{dispatch(setState(state))}
  }
};

export default connect(null, mapDispatchToProps) (UserData);
