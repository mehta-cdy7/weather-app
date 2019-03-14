
const request =require('request');

var getWeather =(lat,lng,callback) =>{

  request({
    url:`https://api.darksky.net/forecast/79fa23feb1ac8a5ac27020ff04a60051/${lat},${lng}`,
    json:true
  },(error,response,body)=>{
    if(!error && response.statusCode===200){
      callback(undefined,{
        temperature:body.currently.temperature,
        apparentTemperature:body.currently.apparentTemperature
      });
    }else if(response.statusCode===404) {
      callback('unable to find the weather -- check the location -- or try again after sometime(weather)');
    }
    else{
      callback('unable to access forecast.io')
    }

  });

};
module.exports.getWeather=getWeather;
