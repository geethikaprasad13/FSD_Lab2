function createProfile(obj){
    const{name,email}=obj
    return {name,email}
}
const person={name:'ABC',age:20,email:'abc@gmail.com'}
console.log(createProfile(person))