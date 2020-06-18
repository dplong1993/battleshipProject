# Battleship

Let's write a basic implementation of the classic game
[Battleship][wiki-battleship]!

[wiki-battleship]: http://en.wikipedia.org/wiki/Battleship_%28game%29

## Guidelines

You should start with a very basic implementation. Write Battleship as a
single-player game; it's you against the game. There is only one board;
the computer will fill it with ships at random, and it will be your job
to find and destroy these ships by guessing their coordinates.

You should organize your program using multiple classes; each class should have 
clear responsibilities and encapsulate a distinct part of the overall game 
"story". 

This is an open-ended project and you can design the game however you like
using OOP concepts. You should be coming up with classes and methods that 
you think would best implement this game. Hopefully you will have fun with the
design phase! It also might be helpful to draw the class relationships on a
pen and paper.

Make sure to extract the different classes that you create into different files.

I suggest creating a game layer that has classes and methods solely handling 
game logic, then making a UI layer that has classes and methods solely handling
the user interface and interacts with the game layer to tell the game layer
what the user input is and what the current state of the game is.

Use the built-in node module, `readline`, to get user input from the terminal.
You will be printing out to the terminal using `console.log` whatever you want
the user to see. Reminder of how `readline` works:

```javascript
const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

// rl.question is an asynchronous function!!
rl.question("Whatever prompt you want to ask the user", answer => {
  // do stuff with that answer

  // rl.close() // if want to close the game
});
```

You should only be instantiating ONE readline!! Do not create multiple
interfaces. You should also only be having one question open at a time.

I also suggest having a `main.js` (or whatever you want to call it) file that 
you can start running the game from. 

If you need help starting to come up with the classes and methods, look at the 
following recommendations for creating your program. Please be sure to view this
only as a template, and as always, if a function or line of code gets too long, 
you might want to think about refactoring it to make it DRYer or into more 
classes/helper methods. The `#` after a class name means that it's an instance
method.

- A `Board` class with an underlying `grid` (a two-dimensional Array),
  where each element in a row represents a ship, open water, or a space
  that has already been attacked. Used the string `"s"` to represent an
  undamaged ship (or ship segment), `null` for empty space, and `"x"` to
  represent a destroyed space. Useful Board instance methods to implement:
  - `Board#display`: prints the board, with marks on any spaces that
    have been fired upon.
  - `Board#count`: returns the number of valid targets (ships) remaining
  - `Board#populateGrid` to randomly distribute ships across the board
  - `Board#inRange?(pos)`
- A `HumanPlayer` class, responsible for translating user input into
  positions of the form `[x, y]`
- A `BattleshipGame` class to enforce rules and run the game. The game
  should keep a reference to the Player, as well as the Board. Some
  (possibly) useful methods:
  - `BattleshipGame#play`: runs the game by calling `playTurn` until
    the game is over.
  - `BattleshipGame#playTurn`: gets a guess from the player and makes
    an attack.
  - `BattleshipGame#attack(pos)`: Marks the board at `pos`, destroying
    or replacing any ship that might be there.
  - `BattleshipGame#displayStatus`: Prints information on the current
    state of the game, including board state and the number of ships
    remaining.

**Note**: You probably won't need a Ship class (at least, not at first).
As noted above, a simple String of `"s"` or `"x"` is sufficient for the basic
implementation. For the bonus phase, however, you probably will want to
write this class.

## Bonus

- Add a `ComputerPlayer` class that will fire at random positions on the
  board. Make it as smart as you can; ensure that it doesn't fire at the
  same position twice. You should not need to modify any logic internal
  to your `Game` class in order to support computer players.
- Refactor your game so that there are two players, each with his or her
  own board. Players should take turns firing at each other's fleet.
- Introduce a "setup" phase, where each player can place ships on their
  board.
- Update your game to use different types of ships, each of a different
  size. Here are the canonical ship sizes (though of course you could
  choose your own):

| Ship type | Dimensions |
| ----------|----------- |
| Aircraft carrier | 5x1 |
| Battleship | 4x1 |
| Submarine | 3x1 |
| Destroyer (or Cruiser) | 3x1 |
| Patrol boat (or destroyer) | 2x1 |
