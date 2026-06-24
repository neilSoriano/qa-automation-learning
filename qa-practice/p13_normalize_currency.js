// Normalize Currency Text -

const raw = "$1234.50";
const normalized = Number(raw.replace("$", "").replace(/,/g, ""));
console.log(normalized);

// common when UI uses locale formatting

