var ab=4;
let can=4;
const y=8;
let af =true;

let obj={name:"iam",last:"me",age:45,city:"bhopal"};

let array=["me","you","uys"]

let date= new date("2022-3-25");

let x= BigInt("2931415256")

typeof""; //describe type








// ## **block scope** >> inside {}----------------------------------------------
{
    // only here 
    let bc=4;
}
   // here no bc


// ## **data types**---------------------------------------------------------------

var a=4;
{
    a=6;
// a =6;
}
// a is 6 here


let c=4;
{
    c=6;
// c =6;
}
// c is 4 here


const d=4;
{
    const d=6;
// d =6;
}
// d is 4 here



carname="tesla";
var carname; //okay

carnamee="tesla";
let carnamee ="vivo"; //not okay

// --------------------------------------------------------------------------------

let t=0;
// The let keyword was introduced in ES6 (2015)
// Variables defined with let cannot be Redeclared
// Variables defined with let must be Declared before use
// Variables defined with let have Block Scope

const b=4;

// The two variables price1 and price2 are declared with the const keyword.
// These are constant values and cannot be changed.
// The variable total is declared with the let keyword.
// The value total can be changed.

//  Only use let if you can't use const
//  Only use var if you MUST support old browsers.
