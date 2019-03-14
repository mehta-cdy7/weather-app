var addNumber =(a,b)=>{
  return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    if (typeof a == 'number' && typeof b == 'number')
      {
        resolve(a+b);
      }
  else
     {
       reject('arguments must be numbers');
     }
   },2000);
  });
};

addNumber(5,7).then((res)=>{
  console.log('result :',res);
  return addNumber(res,'44');
}).then((res)=>{
  console.log('result expected is :',res);
}).catch((errorMessage)=>{
  console.log('error',errorMessage);
});








// var somePromises = new Promise((resolve,reject)=>{
//
// setTimeout(()=>{
//   resolve('wow!! rsolve successfully');
// //reject('oops!!! rejected');
// },2500);
//
// });
//
// somePromises.then((message)=>{
//   console.log('sucess: ',message);
// },(errorMessage)=>{
//
//   console.log('failure:',errorMessage);
// }
// );
