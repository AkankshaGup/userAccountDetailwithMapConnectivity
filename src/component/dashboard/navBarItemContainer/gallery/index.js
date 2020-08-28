import React from 'react';
import Header from "../header/header";
import ComSoon from "../commingsoon";


 const Gallery=(props)=>{
    const {userInfo}=props;
    return (
        <div>
         <Header userInfo={userInfo} navName="gallery"/>
         <ComSoon />
        </div>
    )
}

export default Gallery;