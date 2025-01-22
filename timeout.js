function delayedMessage(message, delay, callback) {
    setTimeout(() => {
        console.log(message);
        callback()
    }, delay);
}
delayedMessage("setTimeout example",3000,()=>{
    console.log("Printed the message")
})