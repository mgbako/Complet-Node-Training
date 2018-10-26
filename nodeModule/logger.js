const EventEmitter = require('events');

class Logger extends EventEmitter {

  log(message){
    // Send a HTTP request
    console.log(message);

    this.emit('messageLogger', {name: 'john', age: 29});
  }
}

module.exports = Logger;