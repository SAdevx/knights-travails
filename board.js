function createBoard(){
    let knightBoard = new Map();

    for(let row = 0; row <= 7; row++){
        for(let col = 0; col <= 7; col++){
            let validMoves = [];
            validMoves.push([row-2,col+1]);
            validMoves.push([row-1,col+2]);
            validMoves.push([row+1,col+2]);
            validMoves.push([row+2,col+1]);
            validMoves.push([row+2,col-1]);
            validMoves.push([row+1,col-2]);
            validMoves.push([row-1,col-2]);
            validMoves.push([row-2,col-1]);
            knightBoard.set(JSON.stringify([row,col]),validMoves);
        }
    }
    return knightBoard;
}

export {createBoard};