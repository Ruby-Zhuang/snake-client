// Stores the active TCP connection object.
let connection;

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  process.stdin.on('data', handleUserInput); // On any input from stdin
  return stdin;
};

// "data" callback handler for stdin
const handleUserInput = (data) => {
  // Check for ctrl + c input to terminate the game
  if (data === '\u0003') process.exit();

  // Send Movement Keys (WASD) to server
  if (data === 'w') connection.write('Move: up');
  if (data === 'a') connection.write('Move: left');
  if (data === 's') connection.write('Move: down');
  if (data === 'd') connection.write('Move: right');
};

module.exports = {setupInput};