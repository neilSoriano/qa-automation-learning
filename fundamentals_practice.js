let name = "Neil";
let age = 28;
let learning = true;
let automation_tools = ["Playwright", "Cypress", "Selenium"];

let credentials = {
    username: "neilSoriano",
    password: "star123"
};

console.log("Name: ", name);
console.log("Age: ", age);
console.log("Is learning automation: ", learning);
console.log("favorite automation tools: ", automation_tools);
console.log("credentials: ", credentials);

let olderThan18 = age > 18;
console.log("\nAge is older than 18?", olderThan18);

let older18Learner = olderThan18 && learning;
console.log("\nAge is older than 18 and learning automation?", older18Learner);