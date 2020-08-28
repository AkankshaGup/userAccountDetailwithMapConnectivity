import React, {Component} from 'react';
import { connect } from "react-redux";
import ListItem from "../List/listItem";
import { withRouter } from "react-router-dom";
import {displayBlock,displayNone} from "./logOutCSS";

class SignOut extends Component{
    constructor(props){
        super(props);
        this.state={
            userData:[],
            hideShow:false
        }
    }
    componentDidMount=()=>{
        this.setState(()=>({
            userData:this.props.allUserData
        }))
    }
    jumpToHome=()=>{
        this.props.history.push("/");
    }
    
  render(){
      const {userInfo,hide_show}=this.props;
      console.log(this.props)
    return (
      <div style={hide_show?displayBlock:displayNone}>
          <div className="innerDivUser">
          <img src={userInfo.profilepicture} alt={`${userInfo.name} profile`} />
          <p>{userInfo.name}</p>
          <span className="emailt">{userInfo.email}</span>
          <div className="userListDiv">
          {this.state.userData.map((val,ind)=>{
              return <ListItem item={val} key={ind} />
          })}
          </div>
          <div className="btndiv">
          <div className="signOutBtn" onClick={this.jumpToHome}>Sign Out</div>
          </div>
          </div>
      </div>
    );
  }

}


const mapStateToProps = ({ userDataReducer: { allUserData,hide_show} }) => ({
    allUserData,
    hide_show
  });

export default withRouter(connect(mapStateToProps, null) (SignOut));
