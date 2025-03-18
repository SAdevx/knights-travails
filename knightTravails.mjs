import { createBoard } from "./board.mjs";

function knightMoves(start, end){
   const board = createBoard();
   let prev = findPath(start,board);
   return reconstructPath(start,end,prev);
}


function findPath(start,board){
   let queue = [];
   let visited =[];
   let prev = [];

   for(let i = 0; i <= 7; i++){
     visited[i].push(Array.from({length: 8}).fill(false));
   }
  
   queue.push(start);
   visited[start[0]][start[1]] = true;
 
   for(let i = 0; i <= 7; i++){
      prev[i].push(Array.from({length: 8}).fill(null));
   }

   while(queue.length > 0){
      let currNode = queue.shift();
      let neighbors = JSON.parse(board.get(JSON.stringify(start)));

      for(let i = 0; i < neighbors.length; i++){
         let index = neighbors[i];

         if(!visited[index[0]][index[1]]){
            queue.push([index[0],index[1]]);
            visited[index[0]][index[1]] = true;
            prev[index[0]][index[1]] = currNode;
         }
      }
   }
   return prev;
}

export {knightMoves};