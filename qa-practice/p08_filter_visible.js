// Filter Visible Elements - work with arrays and booleans

const elements = [
    { id: "btnLogin", visible: true },
    { id: "btnCancel", visible: false },
    { id: "btnSubmit", visible: true}
];

for(const e of elements) {
    if (e.visible) {
        console.log(e.id);
    }
}

// similar to asserting displayed controls