import React from 'react';
import { connect } from "react-redux";
import {showHide} from "../../../../action/index";


 class Header extends React.Component{
   constructor(props){
     super(props);
     this.state={

     }
   }
    hide_Show=()=>{
      this.props.showHide();
   }
   render(){
    const {userInfo,navName}=this.props;
    return (
      <div className="profileHeader">
      <div className="textprofile">{navName}</div>
    <div className="imgDiv imgprofile"  onClick={this.hide_Show}> <img src={userInfo.profilepicture} alt={`${userInfo.name} profile`} />
    <span>{userInfo.name}</span></div>
  </div>
  )
   }
   
}

const mapDispatchToProps=(dispatch) =>{
  return{
  showHide:()=>{dispatch(showHide())}
  }
};


export default connect(null, mapDispatchToProps) (Header);