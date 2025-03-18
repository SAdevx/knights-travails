import { createBoard } from "./board.mjs";

function knightMoves(start, end){
   if(start[0] < 0 || start[0] > 7 || start[1] < 0 || start[1] > 7 ||
      end[0] < 0 || end[0] > 7 || end[1] < 0 || end[1] > 7
   ){
      console.log("No path found...");
      return;
   }

   const board = createBoard();
   let prev = findPath(start,board);
   return reversePath(start,end,prev);
}


function findPath(start,board){
   let queue = [];
   let visited =[];
   let prev = [];

   for(let i = 0; i <= 7; i++){
     visited[i] = Array.from({length: 8}).fill(false);
   }
  
   queue.push(start);
   visited[start[0]][start[1]] = true;
  
   for(let i = 0; i <= 7; i++){
      prev[i] = Array.from({length: 8}).fill(null);
   }

   while(queue.length > 0){

      let currNode = queue.shift();
      let neighbors = board.get(JSON.stringify(currNode));
     
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

function reversePath(start, end, prev){
   let path = [];

   for(let currVertex = end; currVertex != null; currVertex = prev[currVertex[0]][currVertex[1]]){
      path.push(currVertex);
   }

   path.reverse();

   if(path[0] == start){
      console.log(`You made it in ${path.length-1} moves! Here's your path:`);

      for(let i = 0; i < path.length; i++){
         console.log(path[i]);
      }
      return
   }
   console.log("No path found...")
}

export {knightMoves};