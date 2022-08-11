import React from "react";
import "./rules.css"

const Rules = () => {
    return (
        <div className="container">
            <h1>Rules for Tic-Tac-Toe</h1>
            <ol className="ordered-lists-rules">
                <li id="lists-rules">The game is played on a grid that's 3 squares by 3 squares.</li>
                <li id="lists-rules">You are X, your friend (or the computer in this case) is O. Players take turns
                    putting their
                    marks
                    in
                    empty squares.
                </li>
                <li id="lists-rules">The first player to get 3 of her marks in a row (up, down, across, or diagonally)
                    is the
                    winner.
                </li>
                <li id="lists-rules">When all 9 squares are full, the game is over. If no player has 3 marks in a row,
                    the game
                    ends
                    in a
                    tie.
                </li>
            </ol>
        </div>
    )
}
export default Rules
