

// if statements
let actualTitle = "dashboard";
let expectedTitle = "dashboard";

if (actualTitle === expectedTitle) {
    console.log("test passed");
}

// if...else 
let isLoggedIn = false;

if (isLoggedIn) {
    console.log("User is logged in");
} else {
    console.log("User is not logged in")
}


// if...else if...else
let statusCode = 404;

if (statusCode === 200) {
    console.log("OK - test passed");
} else if (statusCode === 404) {
    console.log("Page Not Found - test failed");
} else {
    console.log("unexpected status error code");
}


// switch statements
let testResult = "failed";

switch(testResult) {
    case "passed":
        console.log("all good - release ready");
        break;
    case "failed":
        console.log("some tests failed - investigate");
        break;
    case "skipped":
        console.log("test skipped due to conditions")
        break;
    default:
        console.log("unknown result");
}


// for loop
for (let i = 0; i < 3; i++) {
    console.log("running test number " + (i+1));
}


// for ... of
let testCases = ["login", "search", "checkout"];

for (let test of testCases){
    console.log("running " + test + " test");
}


// while loop
let retries = 0;
while (retries < 3) {
    console.log("attempt " + (retries + 1) + " to log in");
    retries++;
}



// do... while
let count = 0;
do {
    console.log("processing test step " + (count + 1));
    count++;
} while (count < 2);



// combining control flow and loops

let tests = [
    {name: "Login", passed: true},
    {name: "Search", passed: false},
    {name: "Checkout", passed: true}
];

for (let test of tests) {
    if(test.passed) {
        console.log(test.name + " test passed");
    } else {
        console.log(test.name + " test failed - investigate");
    }
}

// practice
let fruits = [
    {name: "banana", isRound: false},
    {name: "cherry", isRound: true},
    {name: "apple", isRound: true},
    {name: "grape", isRound: true},
    {name: "strawberry", isRound: false}
];

for (let fruit of fruits) {
    if (fruit.isRound) {
        console.log(fruit.name + " passed and is round");
    } else {
        console.log(fruit.name + " failed and is not round");
    }
}

