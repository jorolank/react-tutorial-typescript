import {CSSProperties} from "react";

export interface IBoard{
    squares: Array<string>
    onClickBoard: (i:number) => void
}