"use strict";
// We are officially writing inside of a ts file - meaning that we are technically writing Typescript
// instead of Javascript right now (although it will eventually be transformed into Javascript)
console.log("Hello World");
// Because we are now typing in Typescript, we are able to take advantage of strict typing.
// Let's try defining a variable:
// I can explicitly tell typescript that age is supposed to be a number
// To do that, we put a colon after the variable name:
let age = 25;
// Will get an error because we are trying to turn a variable that we explicitly told TS
// was a number into a string
// age = "I'm 25"
age = 30;
// Other primitive types in Typescript include:
let myName = "Ethan"; // We have string,
let didEaglesWin = false; // We have boolean
// Just like with our age variable, attempts to assign these vars to another datatype will be met with
// errors:
// myName = 14;
// didEaglesWin = "no";
// So we have to be very careful about changing the values of our vars / maintaining the data types that we contract
// ourselves to use
// But ethan, what if I wanted to have a variable that could be any type I wanted
// There is something called the 'any' type in Typescript, meaning that it is compatible with any type you can imagine,
// BUT you have to use it sparingly because as soon as you start trusting yourself with this level of control,
// you are kind of shooting yourself in the foot by giving up what makes typescript useful
// So if you have a case where you are VERY SURE that data type is irrelevant, you can use any BUT
// be VERY CAREFUL
let myAnythingVar = 14;
myAnythingVar = "String";
myAnythingVar = true;
// Okay, so we know how to define variables that have a datatype, but what if we wanted to allow for
// multiple data types at once WITHOUT using any
// we can use something called 'union types'
// let's say we have an id property on a user that can either be a string or a number, but we want to restrict it to just those
// two types:
let id;
id = 101; // Valid code because number is a valid type for id
id = "202"; // Also valid code because string is another valid type for id
// Actually have to provide an object for interfaces
// interface Shape = string; // Not Valid TS because we need to define fields in an object
// Let's try to make a variable that 'follows the User contract':
const myUser = {
    email: "myemail@gmail.com",
    id: 123,
    username: "superguy12345",
    favoriteColor: "blue",
};
const myWebsiteUser = {
    username: "EthanA124",
    role: "OWNER",
};
// In contrast to interfaces, we can map a type directly to (a) primitive(s)
// A quick alternative (that is kind of unnecessary now that literal typing is allowed) is the enum keyword from typescript
// Just like in Java, an enum is a collection of values that you MUST choose between for the compiler to approve
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
const currentDirection = Directions.Right;
console.log(currentDirection);
// Array Types - A lot of the time, you will define a custom type but intend to use it inside of an array
// Just like in Java, you need to specify when your object is an array (int[] + float[] + String[])
// Let's say you want to specify that you have an array of strings in TS:
const fruits = ["Apple", "Banana", "Cucumber"];
// This specifies an array of WebsiteUsers - EVERY SINGLE OBJECT inside of the array MUST
// be a valid WebsiteUser
const mySiteUsers = [
    {
        username: "ShadowOfMordor",
        role: "USER",
    },
    {
        username: "TwinkleFairy",
        role: "ADMIN",
    },
    {
        username: "Astarion",
        role: "OWNER",
    },
];
// Typing functions
// Up until now, we've just seen the basics of how Typescript works in a vacuum - in real code,
// we typically want to rely on static typing in terms of what is allowed to be passed to a method
// and what data will be returned from that method:
// We can add data types directly to our input arguments to ensure that
// we are handling them properly from inside of the method:
// (inputArg1: dataType, inputArg2: dataType): returnDataType {}
function add(a, b) {
    return a + b;
}
console.log(add(14, 2));
// console.log(add("14", 5)); // doesn't work because add does not take in a string as input
// We can even define the typing of callback functions:
// Follows the following pattern of a 'blank' arrow function: (arg1: dataType, arg2: dataType) => returnDataType
function doMath(a, b, fn) {
    return fn(a, b);
}
console.log(doMath(14, 25, (a, b) => a * b));
console.log(doMath(14, 25, (a, b) => a - b));
console.log(doMath(14, 25, (a, b) => a / b));
const myCircle = {
    radius: 10,
    color: "Red",
    area: 100 * Math.PI
};
console.log(myCircle);
const myPet = {
    name: "Shackleton",
    species: "cat",
    vertebrate: true,
};
