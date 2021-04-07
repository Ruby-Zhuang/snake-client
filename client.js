const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  // Print message to screen when connection is successfully established
  conn.on('connect', () => {
    console.log('Successfully connected to game server!');
    conn.write('Name: RZ!');

    // setInterval(() => {
    //   conn.write('Move: up');
    // }, 100);
    // setTimeout(() => conn.write('Move: up'), 1000);
    // setTimeout(() => conn.write('Move: right'), 1050);
    // setTimeout(() => conn.write('Move: up'), 1100);
    // setTimeout(() => conn.write('Move: right'), 1150);
  
  });

  // Message from server (event handler to handle incoming data)
  conn.on('data', (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = {connect};