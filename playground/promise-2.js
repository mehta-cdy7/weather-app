const request=require('request');

var geoCodeAddress=(address)=>{
  return new Promise((resolve,reject)=>{

      var encodedaddress = encodeURIComponent(address);
      request({
        url:'http://maps.googleapis.com/maps/api/geocode/json?address='+encodedaddress,
        json:true
      },(error,response,body)=>{
        if(error){
          reject('unable to connect to google servers');
        }else if(body.status === 'ZERO_RESULTS'){
          reject('unable to find that address --- try again later -- or check the address');
        }else if(body.status === 'OK'){
          resolve(undefined,{
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
  });
};



geoCodeAddress('00000').then((location)=>{
  console.log(JSON.stringify(location,undefined,2));
},(errorMessage)=>{
  console.log(errorMessage);
});
