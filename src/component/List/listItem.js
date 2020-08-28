import React from 'react';
import { withRouter } from "react-router-dom";

 const ListItem=(props)=>{
    const {item}=props;
    const gotoDashboard=()=>{
        props.history.push({
            pathname: '/dashboard/profile',
            state: item
        })
    }
    return (
        <div className="listItemHeader" onClick={gotoDashboard}> 
            <div className="imgDiv"> <img src={item.profilepicture} alt={`${item.name} profile`} /></div>
            <div className="listnameDiv"><span>{item.name}</span></div>
        </div>
    )
}

export default withRouter (ListItem);