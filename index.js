const tcpStream = require('./libs/tcpStream');
const udpStream = require('./libs/udpStream');

module.exports = function socketDestination (userOptions) {
  const options = Object.assign({
    mode: 'udp',
    address: '127.0.0.1',
    port: 514,
    reconnect: false,
    reconnectTries: Infinity
  }, userOptions);

  if (!['tcp', 'udp'].includes(options.mode)) {
    throw new Error(`Invalid mode ${options.mode}`);
  }

  const socketStream = options.mode === 'tcp'
    ? tcpStream(options)
    : udpStream(options);

  return socketStream;
};
