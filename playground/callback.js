var getuser =(id,callback) => {
  var user ={
    id:id,
    name:'anmol'
  };
  setTimeout(() => {
  callback(user);
},3000);

};

getuser(31,(useroption) =>{
  console.log(useroption);
});
