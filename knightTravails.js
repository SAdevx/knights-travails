import { createBoard } from "./board.js";

const knightBoard = createBoard();

function knightMoves(start, end){
   let prev = solve(start);
   return reconstructPath(start,end,prev);
}

function solve(start){
   let isVisited = new Map();
   let prev = new Map();
   let queue = [];

   queue.push(start);
   isVisited.set(JSON.stringify(start), true);

   while(queue.length){
      let currPoint = queue.shift();
      let currPointNeighbors = knightBoard.get(JSON.stringify(currPoint));

      for(let i = 0; i < currPointNeighbors.length; i++){
         if(!isVisited.get(`${currPointNeighbors[i]}`)){
            queue.push(currPointNeighbors[i]);
            isVisited.set(JSON.stringify(currPointNeighbors[i]),true);
            prev.set(JSON.stringify(currPointNeighbors[i]),currPoint);
         }
      }
      return prev;
   }
}

function reconstructPath(start,end,prev){
   let path = [];

   for(let i = end; i != null; i = prev.get(`${end}`)){
      path.push(i);
   }
   path.reverse();

   if(path[0] == JSON.stringify(start)) return path;
   return [];
}

export {knightMoves};