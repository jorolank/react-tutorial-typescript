import React from "react"
import {IProps, IState, TGameData} from "./types";
import {Board, calculateWinner} from "../index"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import "../../index.css"

class Game extends React.Component<IProps, IState>{
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
        const { xIsNext } = this.state
        let status: string;
        const gameData:TGameData = {
            X: 'X',
            O: 'O'
        }
        const {X, O} = gameData ?? {}
        const history = this.state.history
        const current = history[this.state.stepNumber]
        const winner = calculateWinner(current.squares);
        const moves = history.map((step, move) => {
            const desc = move ? `Go to move # ${move}` : `Go to game start`;
            return (
                <li key={move}>
                    <button className="game-button" onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            )
        })
        if(winner) {
            status = `Winner: ${winner}`
            //TOAST ID PROVIDED TO PREVENT DUPLICATES
            toast(`Winner: ${winner}`,
                {
                    toastId: 1,
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
        }else{
            status = `Next player is: ${xIsNext ? X : O}`;
        }
        return(
            <div className="game">
                <ToastContainer/>
                <div className="game-board">
                    <Board squares={current.squares} onClickBoard={(arrayElement: number) => this.handleClick(arrayElement)} />
                </div>
                <div className="game_info">
                    {/* Condition for style css */}
                    {status === 'Next player is: X' || winner === 'X' ?
                        <div className="status-green">{status}</div> :
                        <div className="status-red">{status}</div>}
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}
export default Game