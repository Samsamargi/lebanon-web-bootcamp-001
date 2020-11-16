//first work :"number divisible by 5"
let x=Number(prompt("Type your number")); 
if(variable % 5 == 0){
    console.log("true"); 
  }else{
    console.log("false"); 
  }

//second work :"sumof two numbers is less then 100"
let x = Number(prompt("Type first number")); 
let y = Number(prompt("Type second number"));
let sum = x +y ;
if(sum < 100){
  console.log("true"); 
}else{
  console.log("false"); 
}

//optional work :"Fibonacci sequence"
let j=1;
let y=1;
let sum=0;
  
for(let i=0 ; i < 10 ; i++){
  
   sum=j;
   j=sum+y;
   y=sum;
   console.log(sum);
}


//third work :"joining first name and last name"
let firstName = Number(prompt("Type first number")); 
let lastName = Number(prompt("Type second number"));
let fullName = firstName +lastName ;
console.log("Hello, "+fullName+"!");




//fourth work :"max between arrays inputs"
//we did it by two ways 

//first one
let size=Number(prompt("enter size for the array : "));
let cars = [size];
let max=0; 
let x;
for(let i=0 ; i<size; i++)
{ x= Number(prompt("Type your number  : "));
console.log("you entered "+x);
  cars[i]= x;
  
  if(max<cars[i])
    { 
      max=cars[i];
    }

} 
console.log("the max number is "+max);

//second one
let size=Number(prompt("enter size for the array : "));
let cars = [size];
let max=0; 

for(let i=0 ; i<size; i++)
{ 

  cars.push(prompt("Enter a number "))
  
  
  if(max<cars[i])
    { 
      max=cars[i];
    }

} 
console.log("the max number is "+max);