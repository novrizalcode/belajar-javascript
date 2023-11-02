const object1 = {
    firstName: "Brendan"
};

const object2 = {
    lastName: "Eich"
};

const object3 = {
    fullName: "Brendan Eich"
};

console.log(Object.assign(object1, object2, object3));
console.log(object1);

const object4 = {
    a: "1",
    b: "2"
};

const object5 = {
    b: "3",
    c: "4"
};

console.log(Object.assign(object4, object5));