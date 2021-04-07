// Require constants
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
  // "data" callback handler for stdin
  process.stdin.on('data', handleUserInput); // On any input from stdin
  return stdin;
};

// Keep track of the current move
let currentMove;

// Handle user input
const handleUserInput = (data) => {
  // Function to make the next snake move continuously using setInterval
  const nextMove = (key) => {
    currentMove = setInterval(() => connection.write(`Move: ${key}`), 100);
  };
  // Check for ctrl + c input to terminate the game
  if (data === '\u0003') process.exit();
  
  // Send Movement Keys (WASD) to server
  if (MOVES[data]) {
    {
      clearInterval(currentMove);
      nextMove(MOVES[data]);
    }
  }
  //connection.write(`Move: ${MOVES[key]}`);
  // if (key === 'w') connection.write('Move: up');
  // if (key === 'a') connection.write('Move: left');
  // if (key === 's') connection.write('Move: down');
  // if (key === 'd') connection.write('Move: right');
  
  // Send messages to the server
  if (MESSAGES[data]) connection.write(`Say: ${MESSAGES[data]}`);
  // if (key === 'h') connection.write('Say: HI! :)');
  // if (key === 'm') connection.write('Say: meow~');
  // if (key === 'z') connection.write('Say: ZzZzZzzzzz');
};

module.exports = {setupInput};