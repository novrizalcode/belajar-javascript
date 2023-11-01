const user = {
    name: "John Doe",
    address: {
        street: "Mawar"
    },
    contact: {
        phone: "321"
    },
    alamat: {
        jln: "mampir"
    }
};

const street = user.address?.street;
const phone = user.contact?.phone;
const alamat = user.alamat?.jln;
const getName = user.name;

console.log(street);
console.log(phone);
console.log(getName);
console.log(alamat);