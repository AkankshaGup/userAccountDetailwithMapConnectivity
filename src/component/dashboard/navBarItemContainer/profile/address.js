import React  from 'react';
import GoogleMapReact  from 'google-map-react';

 const Address=(props)=>{
    const {address}=props;
    let {lat, lng} =address.geo;
    lat=parseInt(lat);
    lng=parseInt(lng)
    return (
        <div className="row ">
        <div className="col-3 col-md-3 col-lg-3 userinfo textL">street : </div>
        <div className="col-7 col-md-7 col-lg-7 userinfo textR">{address.street} </div>
        <div className="col-3 col-md-3 col-lg-3 userinfo textL">suite : </div>
        <div className="col-7 col-md-7 col-lg-7 userinfo textR">{address.suite} </div>
        <div className="col-3 col-md-3 col-lg-3 userinfo textL">city :  </div>
        <div className="col-7 col-md-7 col-lg-7 userinfo textR">{address.city} </div>
        <div className="col-3 col-md-3 col-lg-3 userinfo textL">zipcode :  </div>
        <div className="col-7 col-md-7 col-lg-7 userinfo textR">{address.zipcode} </div>
        <div className="col-12 col-md-12 col-lg-12 mapdiv">
        <GoogleMapReact 
          bootstrapURLKeys={{ key: "AIzaSyAztAXsSJzZd7jfw5Kl7qjOAYudROEOBt8"}}
          defaultCenter={{lat: lat,lng: lng}}
          defaultZoom={11}
          zoom={12}
          yesIWantToUseGoogleMapApiInternals
        >
        </GoogleMapReact >
          <p style={{marginTop:"15px",fontSize:"12px"}}>{`Lat: ${lat  } Long: ${lng}`}</p></div>
        </div>
    )
}

export default Address;