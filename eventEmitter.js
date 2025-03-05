const events = require('events')
const emitter = new events.EventEmitter()
emitter.on('userDetails',(name,age)=>{
    console.log(`Hello, ${name}! You are ${age} years old`)
})
emitter.emit('userDetails',"Ria",22)
emitter.emit('userDetails', 'Gia', 30);