/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
const numbers =[1,2,3,4,5,6,7,8,9,10,11,12,13];
 
const add= (number1,number2) =>{
      return number1+number2;
}

/* Function Expression - Subtract Numbers */
const subtract =(number1,number2)=>{
    return number1-number2;
}

/* Arrow Function - Multiply Numbers */


/* Open Function Use - Divide Numbers */


/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
document.querySelector('#array').innerHTML = numbers.map((value)=>{
    return value;
});
/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbers.filter((value)=>{
    if((value%2)>0) return value;
/* Output Evens Only Array */
document.getElementById('evens').innerHTML=  numbers.filter((myvalue)=>{if( (myvalue%2)==0)  return myvalue;});
/* Output Sum of Org. Array */
document.getElementById('sumOfArray').innerHTML = numbers.reduce( (val,sumatory) =>{ return val+sumatory;});
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numbers.map((val)=>{ return val*2;})
/* Output Sum of Multiplied by 2 Array */
document.getElementById('sumOfMultiplied').innerHTML = numbers.map((value)=>value*2).reduce( (val,suma)=>val + suma);