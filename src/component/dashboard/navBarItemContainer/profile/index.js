import React from 'react';
import Company from "./company";
import Address from "./address";
import Header from "../header/header";


 const Profile=(props)=>{
    const {userInfo}=props;
    return (
        <div>
        <Header userInfo={userInfo} navName="profile"/>
        <div className="row">
        <div className="col-5 col-md-5 col-lg-5 profilefooter textprofile">
          <img src={userInfo.profilepicture} alt={`${userInfo.name} profile`} />
          <p>{userInfo.name}</p>
          <div className="row bordershow">
          <div className="col-5 col-md-5 col-lg-5 userinfo textL">username : </div>
          <div className="col-7 col-md-7 col-lg-7 userinfo textR">{userInfo.username} </div>
          <div className="col-5 col-md-5 col-lg-5 userinfo textL">email : </div>
          <div className="col-7 col-md-7 col-lg-7 userinfo textR">{userInfo.email} </div>
          <div className="col-5 col-md-5 col-lg-5 userinfo textL">phone :  </div>
          <div className="col-7 col-md-7 col-lg-7 userinfo textR">{userInfo.phone} </div>
          <div className="col-5 col-md-5 col-lg-5 userinfo textL">website : </div>
          <div className="col-7 col-md-7 col-lg-7 userinfo textR">{userInfo.website} </div>
          </div>
          <p className="textL Al">Company</p>
              <Company company={userInfo.company} />
          </div>

         
        <div className="col-7 col-md-7 col-lg-7 textprofile addressContainer">
        <p className="textL Aleft">Address</p>
              <Address address={userInfo.address} />
            
        </div></div>
        </div>
    )
}

export default Profile;