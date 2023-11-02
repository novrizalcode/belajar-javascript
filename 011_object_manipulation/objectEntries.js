const person = {
    name: "Jhon Doe",
    age: 24,
    gender: "male"
};

console.log(Object.entries(person));

for (const [key, value] of Object.entries(person)) {
    console.log(`${key} = ${value}`);
}