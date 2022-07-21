/* Dijkstra's algorithm
Returns all nodes in the order they were visited
Also allows nodes to point back to the previous node to 
compute shortest path by backtracking from the finish node */

function dijkstra(grid, startNode, finishNode) {
    const visitedNodes = [];
    startNode.distance = 0;
    // create unvisitedNodes from getAllNodes
    const unvisitedNodes = getAllNodes(grid);
    // while loop to evaluate nodes
}

// sort nodes function - take in unvisited nodes and sort
function sortNodesByDistance() {

}

// update visited nodes function
function updateUnvisitedNodes(node, grid) {

}

// get unvisited nodes function
function getUnvisitedNodes(node, grid) {

}

// get all nodes function
function getAllNodes(grid) {
    // initialize nodes array
    const nodes = [];
    // nested for loops to add all nodes in each row to nodes array
    for (const row of grid) {
        for (const node of row) {
            nodes.push(node);
        }
    }
    return nodes;
}

// after finishNode is found, create function to return shortest path