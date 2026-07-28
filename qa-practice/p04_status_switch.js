// HTTP Status Handler - use a switch to classify responses

// const statusCode = 200;
const statusCode = 404;
// const statusCode = 502;

switch(true) {
    case statusCode === 200:
        console.log("OK");
        break;
    case statusCode === 404:
        console.log("Not Found");
        break;
    case statusCode >= 500 && statusCode < 600:
        console.log("Server Error");
        break;
    default:
        console.log("Other");
}


// common in API assertions and triage routing