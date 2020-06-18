/* Rules:
Get play
Check if they've played that square
Check ships
Let them know if it's hit*/

/* Board Variable: 2d Array */

/* Instance variable- game over? */

class Game {
    constructor (rl) {
        this.rl = rl;
        this.board = new Board();
        this.gameStatus = false; // true when game is over
    }

    gameStart() {
        while(!this.gameStatus) { //When game is over gameStatus will be true so we will break out of loop
          this.gameStatus = newTurn();
        }
    }

    newTurn() {
        this.rl.question("Enter the spot you want to hit as a x,y pair!" , answer => {
          const inputArr = answer.split('');
          const x = Number(inputArr[0]);
          const y = Number(inputArr[2]);
          if(inputArr[1] === ',' && typeof(x) === 'number' && typeof(y) === 'number' ){
            const shotStatus = this.board.getSquare(x,y);
            // getSquare is going to return either m if it's missed, and o if open,
            // if there's a ship it will return an s, if it's hit an x
            if(shotStatus === "s"){
              //We hit a ship!
              console.log("You hit a ship!");
              this.board.setShipHit(x, y); //This puts an x in the corresponding location on our board object
              const returnValue = this.board.checkWin(); //Checks to see if there are any ships left returns true if 0 ships
              return returnValue;
            } else if (shotStatus === "o") {
              //We didnt hit a ship!
              console.log("Sorry! Try again.");
              this.board.setShipMiss(x, y); //This puts a m in the corresponding location on our board object
              return false;
            } else if (shotStatus === 'x' || shotStatus === 'm') {
                console.log("You've already tried that square");
                const returnValue = this.newTurn();
                return returnValue;
            }
        } else {
            // Incorrect Input
            console.log('Incorrect Input. Please input a spot in the form x,y.');
            const returnValue = this.newTurn();
            return returnValue;
          }
        });
    }
}

module.export = {Game}
