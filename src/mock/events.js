const EventEmitter = require('events')

class MockErrorEmitter extends EventEmitter {}

module.exports = new MockErrorEmitter()