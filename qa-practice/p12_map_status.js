// Map Status to Human Message - use object as a lookup table
const map = {
    PENDING: "Waiting",
    RUNNING: "In progress",
    PASSED: "Passed",
    FAILED: "Failed"
};

const code = "PASSED";
console.log(map[code] || "Unknown");

