function update(emp,r){{
    return {...emp, role : r}
}
}
const employee = {
    name : "Abc",
    role : "Developer",
    age : 20,
    location : "IN"
}
console.log(update(employee,'Senior Developer'))