function greet(name, callback){
    const msg= `Welcome! ${name}`
    callback(msg)
}
greet("Alice",(msg)=>{
    console.log(msg)
})