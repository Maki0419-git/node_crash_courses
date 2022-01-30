//Event-driven program
//Class
const EventEmitter = require('events');
//Instance
const customEventEmitter = new EventEmitter();
//on-listen for an event
//emit-emit an event
//要先聽再接收!!!
customEventEmitter.on('response', (name, id) => {
    console.log(`data received :${name} ${id}`)
})



customEventEmitter.emit('response', 'john', 123)

//don't run
// customEventEmitter.on('response', () => {
//     console.log(`some other logic here`)
// })
