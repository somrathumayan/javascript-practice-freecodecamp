console.log("Hello World");
// inline comment


/*
Md. Humayan Kabir
Started Learning Javascript with free codecamp
*/

// data types: 
// undefined, null, boolean, string, symbol, number and object 

// var name = "Humayan";
// let num = 12;
// const pie = 3.1416;

// assignment operator
var a = 7;
var b = 8;

// a assigned to 7

/*
\'  single quote
\"  double quote
\\  backlash
\n  newline
\r  carriage return
\t  tab
\b  backspace
\f  form feed
*/


// concate 
var ourStrr= "First " + "Second";
console.log(ourStrr);

// length 
var len = ourStrr.length;
console.log(len);

// array 
var arr = [10,20,50];
arr[1] = 70;
console.log(arr[1])

// push function 
var ourArr = ["Stimpson", "J", "Cat"];
// ourArr.push(["Happy", "Joy"]);
ourArr.push("Happy", "Joy");

console.log(ourArr);

// pop()

var myNum = [1,2,3,4];
myNum.pop();
console.log(myNum);

var number = [1,2,3,4,5]
number.shift();

console.log(number);


var myNumber = [1,2,3,4,5]
myNumber.unshift(6);

console.log(myNumber);

function reUsable(a,b){
    console.log(a-b);
}
reUsable(10, 5);

function abTest(p, q){
    if(a<0 || b<0){
        return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(p) + Math.sqrt(q), 2));
}

console.log(abTest(2 , 2));

// create object
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats",
} 

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

console.log(hatValue);
console.log(shirtValue);

delete testObj.shoes;
console.log(testObj);

// while loop

var myArray = [];

var i = 0;
while(i<10){
    myArray.push(i);
    i++;
}
console.log(myArray);