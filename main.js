#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "firstNumber",
        type: "number",
        message: "Enter your first number"
    },
    {
        name: "secondNumber",
        type: "number",
        message: "Enter your second number"
    },
    {
        name: "operator",
        type: "list",
        message: "Select your  operator to perform  operation",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Module"]
    }
]);
//Conditional Statement//
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "Module") {
    console.log(answer.firstNumber % answer.secondNumber);
}
else {
    console.log("Please select valid operator");
}
console.log("Thanks for trying my first project");
