import React from "react"
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div className="container">
            <h1 className="text-center mb-4">Definition of 'tic-tac-toe'</h1>
            <p className="p-3">Tic-tac-toe is a game in which two players take turns in drawing either an ' O'
                or an ' X' in one square
                of
                a grid consisting of nine squares. The winner is the first player to get three of the same symbols in a
                row.
                Tic-tac-toe, noughts and crosses, or Xs and Os is a paper-and-pencil game for two players who take turns
                marking the spaces in a three-by-three grid with X or O. The player who succeeds in placing three of
                their
                marks in a horizontal, vertical, or diagonal row is the winner.
            </p>
            <p>Ref: <Link to="https://reactjs.org/tutorial/tutorial.html#function-components">
                https://reactjs.org/tutorial/tutorial.html#function-components</Link></p>
        </div>
    )
}
export default About