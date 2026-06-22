// Check empty cart - use if statements to decide next steps

const cartCount = 0;
// const cartCount = 1;
// const cartCount = -5;

if (cartCount > 0) {
    console.log("Proceed to checkout");
} else if (cartCount === 0) {
    console.log("cart is empty")
} else {
    console.log("invalid count");
}

// mirrors smoke checks for purchase flow responses