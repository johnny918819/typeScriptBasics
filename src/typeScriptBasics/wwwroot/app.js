var x = 1;
var firstName = "John";
var lastName = "Thompson";
var isTrue = true;
//let input:string = prompt("Please enter something");
//alert(input);
//Dec - new variable is created 
var y;
//Init - new variable receives it's first value
y = 4;
var z = 1;
//assignment - new value is assigned to existing variable
y = 5;
z = 14;
//typeof()
console.log(typeof (isTrue));
//Ask user for their favorite number and add 5 to that number, then alert the result to the user.
//let input: string = prompt("What is your favorite number");
//let inputToNum: number = parseFloat(input);
//alert(inputToNum + 5);
var theAnswer = 42;
var theAnswerAsString = theAnswer.toString();
console.log(theAnswerAsString);
function repeatString(stringToRepeat, numTimes) {
    var result = "";
    for (var i = 0; i < numTimes; i++) {
        result += stringToRepeat;
    }
    return result;
}
var myString = repeatString("world", 5);
