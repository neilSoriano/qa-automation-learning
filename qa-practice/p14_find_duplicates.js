// Find Duplicates in a List - use a set and a loop

const ids = ["A1", "B2", "A1", "C3", "B2"];
const seen = new Set();
const dups = new Set();

for (const id of ids) {
    if(seen.has(id)) {
        dups.add(id);
    } else {
        seen.add(id);
    }
}
for (const d of dups) {
    console.log(d);
}

// useful for checking unique constraints and report rows