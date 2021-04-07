const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // iInterpret incoming data as text
  conn.setEncoding('utf8');

  // When connection is successfully established
  conn.on('connect', () => {
    console.log('Successfully connected to game server!'); // Print message to client screen
    conn.write('Name: RZ');                               // Write to server
  });

  // Handle message from server (incoming data)
  conn.on('data', (data) => {
    console.log(data);          // Pritn message from server
  });

  return conn;
};

module.exports = {connect};

// setInterval(() => conn.write('Move: up'), 100);
// setTimeout(() => conn.write('Move: up'), 1000);
// setTimeout(() => conn.write('Move: right'), 1050);
// setTimeout(() => conn.write('Move: up'), 1100);
// setTimeout(() => conn.write('Move: right'), 1150);