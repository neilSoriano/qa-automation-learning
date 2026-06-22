// Validate Email Format - write a simple validator

function isValidEmail(email) {
    if (typeof email !== "string") {
        return false;
    }
    const at = email.indexOf("@");
    const dot = email.lastIndexOf(".");
    return at > 0 && dot > at + 1 && dot < email.length - 1;
}

// basic client side check

console.log(isValidEmail("ryanwalsh@gmail.com"));
console.log(isValidEmail("ryanwalsh@"));
console.log(isValidEmail("ryanwalsh."));
console.log(isValidEmail("ryanwalsh@."));
console.log(isValidEmail("ryan@walsh."));
console.log(isValidEmail(12998));
console.log(isValidEmail("14982"));
console.log(isValidEmail("#*@"));
console.log(isValidEmail("ryanwalsh@gmail.com"));