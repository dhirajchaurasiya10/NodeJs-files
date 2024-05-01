const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', ()=> {
    console.log('an event occured');
    setTimeout(()=> {
        console.log('Take an action immediately');
    }, 3000);
})
console.log("Script is running");
myEmitter.emit('event');
console.log("Script is still running");
