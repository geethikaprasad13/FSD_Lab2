const person = {
    name: 'Alice', 
    address: {
        street: '123 Main St',
        city: 'Los Angeles', 
        zip: '90001'
    },
    age: 25
};
let {address:{street:s,city :c}} = person
console.log('street: '+s+', city: '+c)