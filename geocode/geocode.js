const request =require('request');

var geoCodeAddress =(address,callback) => {

  var encodedaddress = encodeURIComponent(address);
  request({
    url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encodedaddress}`,
    json:true
  },(error,response,body)=>{
    if(error){
      callback(`unable to connect to google servers`);
    }else if(body.status === 'ZERO_RESULTS'){
      callback(`unable to find that address --- try again later -- or check the address`);
    }else if(body.status === 'OK'){
      callback(undefined,{
        address:body.results[0].formatted_address,
        latitude:body.results[0].geometry.location.ltd,
        longitude:body.results[0].geometry.location.lng
      });
    //console.log(JSON.stringify(response,undefined,2));
    // console.log(body.results[0].formatted_address);
    // console.log(body.results[0].geometry.location.lng);
    // console.log(body.results[0].geometry.location.lat);
  }
  });
};
module.exports.geoCodeAddress = geoCodeAddress;
