// Compute Order Total - use numbers and a loop for totals

const prices = [14.3, 5.4, 8];
let total = 0;

for(const p of prices) {
    total += p;
}

// useful for cart and invoice checks

console.log(total);