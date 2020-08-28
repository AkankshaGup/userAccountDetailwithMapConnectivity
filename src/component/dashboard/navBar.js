import React from 'react';
import { NavLink } from "react-router-dom";


 const NavBar=(props)=>{
    const {val}=props;
    return (
        <div>
          <NavLink activeClassName="textWhite" to={`/dashboard/${val}`}><span>{val}</span><i className="fa fa-angle-right iconDiv"></i></NavLink>
        </div>
    )
}

export default NavBar;