/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  // "data" callback handler for stdin
  const handleUserInput = (data) => {
    // Check for ctrl + c input to terminate the game
    if (data === '\u0003') {
      process.exit();
    }
  };

  // On any input from stdin
  process.stdin.on('data', handleUserInput);
  
  return stdin;
};

module.exports = {setupInput};