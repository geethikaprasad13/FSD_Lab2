let s1 = Symbol("Unique symbol")
let s2 = Symbol("Unique symbol")
let object={
    [s1]: "hello",
    [s2]: "hi"
}
console.log(object[s1],object[s2])
console.log(s1=== s2)