import React from "react"
import { IBoard } from "./types";
import "../../index.css"
import Square from "../Square/square";

const Board = (props: IBoard) => {
    const {squares, onClickBoard} = props
    const renderSquare = (i: number) => {
        return <Square value={squares[i]} onClickSquare={() => {
            onClickBoard(i)
        }}/>
    }
    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

export default Board