

const yargs =require('yargs');

const geocode =require('./geocode/geocode.js');

const weather =require('./weather/weather.js')

const argv =yargs
.option({
  a:{
    demand: true,
    alias:'address',
    describe:'address you want to see the weather of',
    string: true
  }
})
.help()
.alias('help','h')
.argv;

//console.log(argv);
geocode.geoCodeAddress(argv.address,(errorMessage,result)=>{
  if (errorMessage){
    console.log(errorMessage);
  }else{
    console.log(result.address);
    weather.getWeather(result.latitude,result.longitude,(errorMessage,weatherResults)=>{
    if(errorMessage)
      {
        console.log(errorMessage);}
      else {
        console.log('Its currently'+weatherResults.temperature+'.Its likely to be'+weatherResults.apparentTemperature);
      }
    });

  }
});
