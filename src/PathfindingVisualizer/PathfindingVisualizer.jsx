import React, {Component} from 'react';
import Node from './Node/Node';
import {dijkstra} from '../algorithms/dijkstra';

import './PathfindingVisualizer.css';

export default class PathfindingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: [],
            mouseIsPressed: false,
        };
    }

    componentDidMount() {
        const grid = getInitialGrid();
        this.setState({grid});
    }

    render() {
        const {nodes} = this.state;
        console.log(nodes);

        return (
            <div className='grid'>
                {nodes.map((row, rowIdx) => {
                    return (
                        <div key={rowIdx}>
                            {row.map((node, nodeIdx) => {
                                const {isStart, isFinish} = node;
                                return (
                                    <Node
                                    key={nodeIdx}
                                    isStart={isStart}
                                    isFinish={isFinish}
                                    ></Node>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }
}

// initial grid
const getInitialGrid = () => {
    // initialize grid as empty array
    const grid = [];
    // for loop to set nodes within grid
    for (let row = 0; row < 20; row++) {
        const currentRow = [];
        for (let col = 0; col < 50; col++) {
            currentRow.push(createNode(col, row));
        }
        grid.push(currentRow);
    }
    return grid;
};

// create nodes
const createNode = (col, row) => {
    return {
        col,
        row,
        isStart: row === START_NODE_ROW && START_NODE_COL,
        isFinish: row === FINISH_NODE_ROW && FINISH_NODE_COL,
        distance: Infinity,
        isVisited: false,
        isWall: false,
        previousNode: null,
    };
};

// create walls