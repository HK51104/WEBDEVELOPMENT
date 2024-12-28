var a=5;
var b=6;
var c="happy";
// compiler for javascript itself recognizes the data type of variable
console.log(a+b);
console.log(typeof a , typeof b , typeof c);
// used to tell the data type of variables
/*
 var z=8;
 z=z+1;
 possible
*/
/*
const z1=9;
z1=z1+1;
not possible
*/
// notes mein likhio ki var use hota hai lobal variable ke liye and let use hota hai block scope ke liye

// object creation
let o=
{
    /*
     name:"Happy",
     also possible
    */
"name":"Happy",
"roll no":93 
}
// no semicolons used for the object instead commas are used in between
console.log(o);
o.salary="100 crores"
// after creation of object
console.log(o);
o.ishandsome="true"
console.log(o); 

