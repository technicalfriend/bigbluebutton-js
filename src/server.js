'use strict'

function server(host, salt) {
  return {
    administration: require('./administration')(host, salt),
    monitoring: require('./monitoring')(host, salt),
    recording: require('./recording')(host, salt),
  }
}

module.exports = {
  server,
}
