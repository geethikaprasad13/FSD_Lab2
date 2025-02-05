const os = require('os')
const tot = os.totalmem()
const free = os.freemem()
const per = free/tot
console.log("Total memory: ",tot)
console.log("Free memory: ",free)
setInterval(()=>{
    console.log("percentage of free memory:",per.toFixed(2))
},500);