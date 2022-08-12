import React from "react"
import {IProps, IState, TGameData} from "./types";
import {Board, calculateWinner, CheckGameOutcome, dynamicToast, GameHistory} from "../"
import {ToastContainer} from "react-toastify"
import {HeaderName} from "../../Pages/";

class Game extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            xIsNext: true,
            stepNumber: 0,
        }
    }
    handleClick(i: number){
        const history = this.state.history
        const gameData:TGameData = {
            X: 'X',
            O: 'O'
        }
        const {X, O} = gameData ?? {}
        const current = history[history.length - 1]
        const squares = current.squares.slice()
        if(calculateWinner(squares) || squares[i]){
            return
        }
        squares[i] = this.state.xIsNext ? X : O;
        this.setState({
            history: [...history, {squares}],
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        })
    }

    jumpTo(step: number){
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        })
    }
    render() {
        const {xIsNext} = this.state
        let status: string;
        const gameData: TGameData = {
            X: 'X',
            O: 'O'
        };
        const {X, O} = gameData ?? {}
        const history = this.state.history
        const current = history[this.state.stepNumber]
        const tieUp = current.squares.filter((player) => player === null)
        const winner = calculateWinner(current.squares);
        const moves = history.map((step, move) => {
            const desc = move ? `Go to move # ${move}` : `Go to game start`;
            return (
                <li className="mb-2" key={move}>
                    <button className="game-button" onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            )
        })
        if (winner) {
            status = `Winner: ${winner}`
            dynamicToast(status, winner)
        } else if (!tieUp.length) {
            status = `We tied`
            dynamicToast(status)
        } else {
            status = `Next player is: ${xIsNext ? X : O}`;
        }
        return (
            <>
                <HeaderName/>
                <div className="game">
                    <ToastContainer/>
                    <div className="game-board">
                        <Board squares={current.squares}
                               onClickBoard={(arrayElement: number) => this.handleClick(arrayElement)}/>
                    </div>
                    <div className="game_info">
                        <CheckGameOutcome status={status} winner={winner}/>
                        <GameHistory moves={moves}/>
                    </div>
                </div>
            </>
        );
    }
}
export default Game