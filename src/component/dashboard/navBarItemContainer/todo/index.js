import React from 'react';
import Header from "../header/header";
import ComSoon from "../commingsoon";


 const ToDo=(props)=>{
    const {userInfo}=props;
    return (
        <div>
         <Header userInfo={userInfo} navName="post"/>
         <ComSoon />
        </div>
    )
}

export default ToDo;