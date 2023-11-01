const user = {
    username: "Jhon Doe",
    email: "jhondoe@domain.com",
    profile: null
};

const hasEmail = "email" in user;
const hasPhone = "phone" in user;
const hasProfile = "profile" in user;

console.log(hasEmail);
console.log(hasPhone);
console.log(hasProfile);

const colors = ["1", "110", 20, "3", "5"];
colors.forEach((value, index) => {
    console.log('key value', index, value)
    if(value==="5"){
        console.log("kasih nilai A")
    }else if(value==="3"){
        console.log("kasih nilai b")
    }else if(value=="20"){
        console.log("kasih nilai d")
    }
    else {
        console.log("kasih nilai c")
    }
})
// console.log('red kan',colors[0]);
// console.log('blue kan',colors[2]);
// console.log('110 kan',colors[1]);
const firstIndexAvailable = 0 in colors;

console.log(firstIndexAvailable);