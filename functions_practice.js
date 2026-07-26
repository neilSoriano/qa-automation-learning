// best practices for functions is automation
// keep functions short and focused on one task
// use descriptive names (login, searchProduct) isntead of vague names (doStuff)
// avoid hardcoding values when possible, pass them as aparameters
// reuse functions across multiple test cases to save time


function functionName() {
    // code to run
}

functionName(); // calling function


// functions with parameters
function greetUser(name) {
    console.log("Hello " + name + ", welcome to the site");
}

greetUser("Sam");
greetUser("Dylan");


// functions with return values
function addNumbers(a, b) {
    return a + b;
}

let total = addNumbers(5, 10);
console.log(total); // prints 15


// real qa automation example
function login(username, password) {
console.log("Navigating to login page");
console.log("Entering username: " + username);
console.log("Entering password: " + password);
console.log("Clicking login button");
console.log("Verifying login successful");
}
// Using the login function in different tests
login("qa_user1", "pass123");
login("qa_user2", "pass456");


// methods are functions that belong to objects
// often used in Page Object Models in automation
let testUtils = {
    printPass: function(testName) {
        console.log(testName + " passed");
    },
    printFail: function(testName) {
        console.log(testName + " failed");
    }
};

testUtils.printPass("Login Test");
testUtils.printFail("Checkout Test");


function runTest(testName) {
    console.log("Starting test: " + testName);
    console.log("Test complete: " + testName);
}

function compareValues(expected, actual) {
    if (expected === actual) {
        console.log("Test Passed");
    } else {
        console.log("Test Failed");
    }
}

runTest("Menu change");
runTest("Order date change");

compareValues(9, 9);
compareValues("sincere", "Sincere");

