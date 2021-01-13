
const timer = (input) =>{
  if (input < 0 || isNaN(input) ){
    //input=0;
  }else{
    setTimeout( ( )=>{
      process.stdout.write('\x07');
      //console.log('input', input)
      }, input*1000 )
 }
}
const numbers=process.argv.slice(2)
for (let i= 0 ; i <numbers.length ; i++){
  timer(numbers[i]);
  }





