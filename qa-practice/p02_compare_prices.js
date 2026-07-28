// Parse and Compare Prices - validate a price conversion from text

const priceText = "19.99";
const priceNumber = parseFloat(priceText);
console.log(priceNumber === 19.99);

// UI often returns text so validation should have a number