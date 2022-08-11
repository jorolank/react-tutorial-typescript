import React from "react"
import {ICheckGameOutcome} from "./types";
import "../../index.css"

const checkGameOutcome = (props: ICheckGameOutcome) => {
    const {status, winner} = props ?? {}
    if (status === "Next player is: X" || winner === 'X') {
        return (<div className="status-green">{status}</div>)
    }
    if (status === "We tied") {
        return (<div style={{color: "blue", marginLeft: "35px"}}>{status}</div>)
    }
    return (<div className="status-red">{status}</div>)
}
export default checkGameOutcome