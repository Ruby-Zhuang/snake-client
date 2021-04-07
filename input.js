// Require
const { MOVES, MESSAGES } = require('./constants');

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
const handleUserInput = (key) => {
  // Check for ctrl + c input to terminate the game
  if (key === '\u0003') process.exit();

  // Send Movement Keys (WASD) to server
  if (MOVES[key]) connection.write(`Move: ${MOVES[key]}`);
  // if (key === 'w') connection.write('Move: up');
  // if (key === 'a') connection.write('Move: left');
  // if (key === 's') connection.write('Move: down');
  // if (key === 'd') connection.write('Move: right');

  // Send messages to the server
  if (MESSAGES[key]) connection.write(`Say: ${MESSAGES[key]}`);
  // if (key === 'h') connection.write('Say: HI! :)');
  // if (key === 'm') connection.write('Say: meow~');
  // if (key === 'z') connection.write('Say: ZzZzZzzzzz');
};

module.exports = {setupInput};