import React from "react"
import { ISquare } from "./types"
import "../../index.css"

const Square = (props: ISquare) => {
    const { value, onClickSquare} = props;
    return (
    <button className={"square"} onClick={onClickSquare} style={value === "X" ? {color: 'green'} : {color: 'red'}}>{value}</button>
    )
}

export default Square