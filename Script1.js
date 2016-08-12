// JavaScript source code
// JavaScript source code- First JavaScript File

//Regex
var string1 = 'This is the longest string ever.'
var string2 = 'This is the shortest string ever.'
var string3 = 'Is this the thing called Mount Everest?'
var string4 = 'This is the Sherman on the Mount.';

var regex = /this/i;

console.log(regex.test(string1));
console.log(regex.test(string2));
console.log(regex.test(string3));
console.log(regex.test(string4));

//Ok, Cancel window
var answer = window.confirm('Click OK, get true.  Click cancel, get false.');

if (answer === true) {

    console.log('You said true!');

} else {

    console.log('You said cancel.');
}

//Else and if statements
var answer = window.prompt('Type YES, NO, or MAYBE.  Then click OK.');

if (answer === 'YES') {

    console.log('You said YES!');
}

else if (answer === 'MAYBE') {

    console.log("You said maybe.  I don't know what to make of that");
}

else if (answer === 'NO') {

    console.log('You said no. :(');
}

else {

    console.log('You rebel, you!');
}


//Swtich and case statements
var answer = window.prompt('Type YES, NO, or MAYBE.  Then click OK.');

switch (answer) {

    case "YES":

        console.log('You said YES!');
        break;

    case "MAYBE":

        console.log("I don't really understand your answer but ok.");
        break;

    case "NO":

        console.log('You said no. :(');
        break;

    default:

        console.log('You fool!');
        break;
}

//For Loops: Sequential- runs the loop the condition is met
for (var i = 0; i < 10; i += 1) {
    console.log(i);
}

var pageNames = ['Home', 'About Us', 'Contact Us', 'JavaScript Playground', 'News', 'Blog'];

for (i = 0; i < pageNames.length; i += 1) {
    var currentPageTitle = pageNames[i];

    if (document.title == currentPageTitle) {
        console.log('We ARE here: ' + currentPageTitle);
    } else {
        console.log('We are NOT here: ' + currentPageTitle);
    }
}

//While Loops- similar to a for loop but in a different format
var i = 0;
while (i < 10) {
    console.log(i + '...This will happen until we get 10');
    i += 1;
}

//Do/While Loop- allows the condition to run at least once before loop is satisfied
var i = 0;
do {
    console.log(i + '...this will go until we hit 10');
    i += 1;
} while (i < 10);


//Functions- allow the user to package lines of code together so only one keyword is need to perform the lines of code
function speak() {
    console.log('Woof');
    console.log('Meow');
    console.log('Chirp');
    console.log('Mooooooo');
}

speak(); // This is all I have to type in order to run the lines of code above

//Functions- arguments
function fuddify(speech) {
    //if its not a string then return an error message
    if (typeof speech !== 'string') return "Nice twy wabbit!";

    //other wise make it sound like Elmer Fudd by swapping r's for w's
    speech = speech.replace(/r/g, 'w');
    speech = speech.replace(/R/g, 'W');
    return speech
}

function isOdd(num) {//will tells us if the arugment is odd by displaying true- p.s. function(argument)
    if (num % 2 === 0) { return false; }
    else { return true; }
}

function isEven(num) {//will tells us if the argument is even by displaying true
    if (num % 2 !== 1) { return true; }
    else { return false; }
}

//More on Arguments
function speakSomething(what, howMany) {
    //this pattern works nicely with default valuess:
    //check if the argumnent is undefined and if it is then provide a default value (in this example 'Default Speech' and '10' are the default values)
    var what = (typeof what !== 'undefined') ? what : 'Default speech';//Ternary(conditional)operator.  Asking is 'what' not undefined.  If what is defined then print the value of what, else print 'Default Speech'
    var howMany = (typeof howMany !== 'undefined') ? howMany : 10;//Ternary(conditional)operator.  Asking is 'howMany' not undefined.  If howMany is defined then print the value of howMany, else print 10 times

    for (var i = 0; i < howMany; i += 1) {
        console.log(what + " (" + i + ")");
    }
}

function addingMachine() {
    var total = 0;

    for (var i = 0; i < arguments.length; i += 1) {
        var number = arguments[i];

        if (typeof number === 'number') {
            total += number;
        }
    }
    return total;
}


//Objects, references, and functions

