let x:number= 1;

let firstName:string = "John";

let lastName:string = "Thompson";

let isTrue:boolean = true;

//let input:string = prompt("Please enter something");

//alert(input);

//Dec - new variable is created 
let y: number;

//Init - new variable receives it's first value
y = 4;
let z: number = 1;

//assignment - new value is assigned to existing variable

y = 5;
z = 14;

//typeof()

console.log(typeof (isTrue));

//Ask user for their favorite number and add 5 to that number, then alert the result to the user.

//let input: string = prompt("What is your favorite number");
//let inputToNum: number = parseFloat(input);
//alert(inputToNum + 5);

let theAnswer = 42;
let theAnswerAsString = theAnswer.toString();
console.log(theAnswerAsString);

function repeatString(stringToRepeat: string, numTimes: number) {
    let result = "";
    for (let i = 0; i < numTimes; i++) {
        result += stringToRepeat;
    }
    return result;
}

let myString = repeatString("world", 5);