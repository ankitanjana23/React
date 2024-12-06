
function learnPromises(duration){
   let p = new Promise((resolve) => {
    setTimeout(resolve(),duration)
   })
   return p;
}

let ans = learnPromises(1000);
ans.then(function print(){
  console.log("Hi Everyone")
})

console.log("This lecature provide you a guidance to use promises")