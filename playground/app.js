

const yargs =require('yargs');

const geocode =require('./geocode/geocode.js');

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
    console.log(JSON.stringify(results,undefined,2));
  }
});

//79fa23feb1ac8a5ac27020ff04a60051
