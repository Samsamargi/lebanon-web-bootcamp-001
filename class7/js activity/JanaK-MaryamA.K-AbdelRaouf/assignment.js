//ading from 1 to the given number
console.log(AddUp());

function AddUp(){
  let x=prompt("enter a number  ")
  let sum=0;
  for(let i=1 ; i<=x ; i++)
      {sum+=i;};
  return sum;
 }

 //doubeling each letter
 let char="hello";
console.log(doubleChar(char))

function doubleChar(x){
  let doubled="";
  for(let j=0 ; j< x.length ; j++){
   doubled +=x[j]+x[j];
  }
  return doubled;
}