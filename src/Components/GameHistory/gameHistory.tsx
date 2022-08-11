import React from "react"
import {IGameHistory} from "./types";

const GameHistory = (props: IGameHistory) => {
    const {moves} = props ?? {}
    return (
        <ol>{moves}</ol>
    )
}

export default GameHistory