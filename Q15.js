function createPerson(per, inter){

    var [primary, secondary] = inter
    let {name: n,age: a}=per
    return {n, a, primary, secondary}
}
const Person={name:"ABC", age: 20}
const interest= ['a','b','c']
console.log(createPerson(Person,interest))