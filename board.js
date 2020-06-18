class Board {
    constructor () {
      this.board = [];
      for (let i = 0; i < 3; i++) {
        const arr = [];
        for (let j = 0; j < 3; j++) {
            const el = "o"
            arr.push(el);
        }
        this.board.push(arr);
      }
      this.shipCount = 3;
          
      const shipPositons = [];
      for (let i = 0; i< 3; i++){
        const shipPosition = Math.floor(Math.random() * Math.floor(9));
        shipPosition--;

        while(shipPositions.includes(shipPosition)){
          shipPosition = Math.floor(Math.random() * Math.floor(9));
          shipPosition--;
        }

        shipPositons.push(shipPositon);

        if(shipPosition < 3){
          this.board[0][shipPosition] = 's';
        } else if (shipPosition < 6){
          this.board[1][shipPosition - 3] = 's';
        } else {
          this.board[2][shipPosition - 6] = 's';
        }
      }

    }

    getSquare(x, y) {
      const squareChar = this.board[x-1][y-1];
      return squareChar;
    }

    gameStatus() {
      if(this.shipCount === 0){
        return true;
      } else return false;
    }

    

}
