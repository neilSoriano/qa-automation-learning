// Error Handling

// Debugging mindset
// 1. Reproduce issue on demand
// 2. Read the error message fully
// 3. Find the exact line that failed
// 4. Change one thing at a time
// 5. Verify the fix with a clean run


// Reading Error Messages
// Three parts: type of error, a message with details, stack trace with files and line numbers

// TypeError: Cannot read properties of undefined (reading 'length')
//  at calculateTotal (cart.js:12:15)
//  at main (index.js:7:3)
// Meaning: .length was used on something that is undefined. Check cart.js line 12

// Print values to understand state
// console.log if your first tool. Log inputs, outputs and key steps
let username = "pikachu";

console.log("username:", username);
console.log("response status:", Response.status);
// console.log("page title:", await page.title());

//  use clear labels. remove noisy logs after you fix the issue

// Try and Catch for Controlled Failures
// Use try { } catch (e) { } to handle errors without crashing the whole run
async function safeClick(page, selector) {
    try {
        await page.click(selector);
        console.log("Clicked:", selector)
    }   catch (e) {
        console.error("Click failed for:", selector);
        console.error("Reason:", e.message);
        throw e; // rethrow when the step is critical
    }
}
// only swallow erors if the step is optimal, otherwise rethrow

// Timeout and Waits
// Many UI errors are timing issues. The element is not ready. 
// Use explicit waits. Avoid fixed sleeps when possible

// await page.getByRole('button', { name: 'Login' }).waitFor();
// await page.getByRole('button', { name: 'Login' }).click();

// If the app is slow, increase timeouts in your config or on a single step.
// do not set a huge global timeout by default. Tune it per case


// Common Error Types and Fixes

// Selector not found
// Message: No node found for selector
// Fix: Verify the locator. Wait for the element. Prefer role or data-test ids

// Element detached
// Message: Element is not attached to the DOM
// Fix: Requery the locator after the page updates. Use a more stable locator

// Timeout exceeded
// Message: Waiting for selector or navigation timed out
// Fix: Add proper waits. Check network speed. Confirm the app actually reaches the expected state.

// Assertion failed
// Message: Expected X but recived Y
// Fix: Log the actual value. Confirm test data. Check that you waited for the state to settle.

// Undefined or null
// Message: Cannot read properties of undefined.
// Fix: Log the variable. Add guards. Ensure the function returns the expected shape.


// Breakpoints and Step Through Debugging in VS Code - saves time when logs are not enough
// 1. Open the test file
// 2. Click in the gutter to set a red breakpoint
// 3. Run the test in debug mode
// 4. Use Step Over, Step Into, Step Out
// 5. Inspect variables in the Debug panel
// 6. Watch expressions to track values as they change


// Isolate the Failing Test - Isolation reduces noise and flakiness during triage
// Run only the failing part
// In Playwright, use .only on the test
// Comment out unrelated tests
// Run with single browser first. Add others after it passes


// Reduce Flakiness
// flaky tests pass and fail without code changes; fix them with discipline

// Use robust locators. Prefer data-testid, role or label
// avoid hard sleeps. use smart waits for visible, attached and stable
// rest state between tests. Use fresh data per run.
// control randomness, seed data, stub network when possible
// keep tests short, one clear purpose per test


// Capturing Evidence
// save artifacts when a test fails: screenshots, HTML snapshots, console logs, video of the run

// Plawright config sample:
// use: {
//     screenshot: 'only-on-failure',
//     video: 'retain-on-failure',
//     trace: 'retain-on-failure'
// }


// Structured Triage Checklist
// 1. Reproduce locally. Not the exact command.
// 2. Read the error and stack trance. Identify the failing line.
// 3. Add minimal logs around the failure
// 4. Confirm selector, data, and timing
// 5. Try the step by hand in the browser
// 6. Run with headful mode. Watch the flow.
// 7. Isolate the test. Remove unrelated steps.
// 8. Decide: Fix the test or log a product bug


// Patterns for Safer Code

// Guard clauses
function assertTitle(actual, expected) {
    if (!actual || !expected) {
        throw new Error("Title values are missing");
    }
    if (actual != expected) {
        throw new Error(`Expected ${expected}, got ${actual}`);
    }
}

// console.log(assertTitle("any", "amy"));


// Default values 
function getUserRole(user = { role: "guest" }) {
    return user.role;
}

getUserRole("clerk");


// Validate inputs
function isValidEmail(email) {
    return typeof email === "string" && email.includes("@");
}

// Lab 1: Read and fix an undefined error
// getLength();

function getLength(length) {
    if (length < 0) {
        throw new Error("length cannot be negative")
    }
    if (length === 0) {
        throw new Error("no length to measure")
    } else {
        console.log(`length is ${length} inches long`)
    }
}

getLength(1);
getLength(0);
getLength(-2);



