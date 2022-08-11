import React from "react"
import {IOrderedLists} from "./types";

const OrderedLists = (props: IOrderedLists) => {
    const {moves} = props ?? {}
    return (
        <ol>{moves}</ol>
    )
}

export default OrderedLists