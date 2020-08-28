import React  from 'react';


 const Company=(props)=>{
    const {company}=props;
    return (
        <div className="row ">
        <div className="col-5 col-md-5 col-lg-5 userinfo textL">name : </div>
        <div className="col-7 col-md-7 col-lg-7 userinfo textR">{company.name} </div>
        <div className="col-5 col-md-5 col-lg-5 userinfo textL">catchPhrase : </div>
        <div className="col-7 col-md-7 col-lg-7 userinfo textR">{company.catchPhrase} </div>
        <div className="col-5 col-md-5 col-lg-5 userinfo textL">bs :  </div>
        <div className="col-7 col-md-7 col-lg-7 userinfo textR">{company.bs} </div>
        </div>
    )
}

export default Company;