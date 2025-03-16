function createBoard(){
    let knightBoard = new Map();

    for(let row = 0; row <= 7; row++){
        for(let col = 0; col <= 7; col++){
            let validMoves = [];
            
            if(row+1 >= 0 && row+1 <= 7 && col-2 >= 0 && col-2 <= 7){
                validMoves.push([row+1,col-2]);
            }
            if(row-1 >= 0 && row-1 <= 7 && col-2 >= 0 && col-2 <= 7){
                validMoves.push([row-1,col-2]);
            }
            if(row+2 >= 0 && row+2 <= 7 && col-1 >= 0 && col-1 <= 7){
                validMoves.push([row+2,col-1]);
            }
            if(row-2 >= 0 && row-2 <= 7 && col-1 >= 0 && col-1 <= 7){
                validMoves.push([row-2,col-1]);
            }
            if(row+2 >= 0 && row+2 <= 7 && col+1 >= 0 && col+1 <= 7){
                validMoves.push([row+2,col+1]);
            }
            if(row-2 >= 0 && row-2 <= 7 && col+1 >= 0 && col+1 <= 7){
                validMoves.push([row-2,col+1]);
            }
            if(row+1 >= 0 && row+1 <= 7 && col+2 >= 0 && col+2 <= 7){
                validMoves.push([row+1,col+2]);
            }
            if(row-1 >= 0 && row-1 <= 7 && col+2 >= 0 && col+2 <= 7){
                validMoves.push([row-1,col+2]);
            }
            knightBoard.set(JSON.stringify([row,col]),validMoves);
        }
    }
    return knightBoard;
}

export {createBoard};