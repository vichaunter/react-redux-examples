import React from 'react';
import {decrement, increment} from "./store/actions";
import {useDispatch} from "react-redux";

const ControlCounter = (props) => {
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
}


export default ControlCounter;

