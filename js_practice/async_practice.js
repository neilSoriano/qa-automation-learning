// Async/Await and Promises

// IMPORTANT MODULE FOR FUTURE MODULES
// every playwright test uses async and await, every API call returns a Promise

// Asynchronous Code
// JS can perform actions (loading a page, fetching date from an API)
// without freezing the rest of the program
// instead of waiting, it starts the task, moves on and returns when the task finishes

// Synchronous (blocking)
const a = getDataFromDB();      // waits here...
const b = getDataFromAPI();     // then waits here...
console.log(a,b);

// Asynchronous (non-blocking)
const a = fetchDataFromDB();    // starts, moves on
const b = fetchDataFromAPI();   // starts, moves on
// a and b are Promises, not actual data yet


// Promise - an object that represents a future value. It has three states:
// Pending - task is still running
// Fulfilled - task finished successfully and returned data
// Rejected - task failed and returned an error

const promise = fetch('https://reqres.in/api/users');
// promise is pending right now
// it will resolve to a Response object later

// Old way to handle Promises using .then() and .catch()
fetch('https://reqres.in/api/users')
.then(response => response.json())
.then(data => {
console.log('Users:', data);
})
.catch(error => {
console.error('Failed:', error);
});


// The Clean Way: async and await
// async marks a function as asynchronous. await pauses execution inside that function until the Promise resolves

// Key rules
// await can only be used inside an async function
// await pauses that function, not the entire program
// the function itself returns a Promise

async function getUsers() {
    const response = await fetch('https://reqres.in/api/users');
    const data = await response.json();
    console.log('Users:', data);
}

getUsers();


// Error Handling with try/catch
// when an awaited Promise rejects, it throws an error. Wrap it in try/catch:

async function getUsers() {
    try {
        const response = await fetch('https://reqres.in/api/users');
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.error("Request failed:", error.message);
    }
}


// Why Playwright Uses async/await everywhere
// every browser action takes time. Playwright returns Promises for all of them

// every line with await is saying "wait for this browser action to finish before moving on"
// without await, the test would try to fill the fields before the page even loads

const { test, expect } = require('@playwright/test');

test('login test',  async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL(/inventory/);
});


// Common mistakes

// Forgetting await
// WRONG - page.goto returns a Promise, not a result
page.goto('https://example.com');
page.fill('#user', 'test'); // runs before page loads!
// CORRECT
await page.goto('https://example.com');
await page.fill('#user', 'test');

// Using await outside async
// WRONG - top-level await needs special setup
const data = await fetch('/api');
// CORRECT - wrap in async function
async function main() {
const data = await fetch('/api');
}
main();


// Practice exercise4

async function fetchFirstUser() {
    try {
        const response = await fetch('https://reqres.in/api/users');
        const data = await response.json();
        console.log("First user email: ", data.data[0].email);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

fetchFirstUser();