// Retry Logic - use a loop with exit conditions
let attempt = 0;
let success = false;

while (attempt < 3 && !success) {
    attempt++;
    success = Math.random() >= 0.5;
    console.log("Attempt:", attempt, "success:", success);
}

if (success) {
    console.log("Succeeded on attempt", attempt);
} else {
    console.log("All attempts failed");
}

// mirrors network retry or flaky endpoint handling