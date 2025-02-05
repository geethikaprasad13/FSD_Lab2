const events = require('events');
const emitter = new events.EventEmitter();
emitter.once('userDetails', (name, age) => {
    console.log(`Hello, ${name}! You are ${age} years old.`);
    console.log('This listener will be removed after the first event.');
});
emitter.emit('userDetails', 'Ria', 22);  
emitter.emit('userDetails', 'Gia', 30); 
emitter.emit('userDetails', 'Sia', 28); 