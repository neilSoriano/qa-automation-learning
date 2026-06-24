// Compare Two API Payloads - deep compare simple objects

function shallowEqual(a, b) {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);

    if(aKeys.length !== bKeys.length) return false;
    for (const k of aKeys) {
        if (a[k] !== b[k]) return false;
    }
    return true;
}


const res1 = {
  status: 200,
  totalUsers: 100,
  page: 1
};

const res2 = {
  status: 200,
  totalUsers: 100,
  page: 1
};

console.log(shallowEqual(res1, res2));  // true


const res3 = {
  status: 200,
  user: {
    id: 1,
    name: "Neil"
  }
};

const res4 = {
  status: 200,
  user: {
    id: 1,
    name: "Neil"
  }
};

console.log(shallowEqual(res3, res4));  // returns false

// despite objects looking the same, user keys are different object references
// res1.user → { id: 1, name: "Neil" }  // Object A
// res2.user → { id: 1, name: "Neil" }  // Object B
// Object A === Object B -> false


// great for validating reponse bodies in simple cases