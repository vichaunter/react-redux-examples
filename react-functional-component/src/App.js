import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import {login, logout} from "./store/actions";
import ControlCounter from "./ControlCounter";

const App = (props) => {
    const isLogged = useSelector(state => state.isLogged)
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    return (<div>
        <div style={{position: 'fixed', right: 0}}>
            {isLogged ? <>
                    <span>Hola usuario!</span> &nbsp;
                    <button onClick={() => dispatch(logout())}>Logout</button>
                </>
                : <button onClick={() => dispatch(login())}>Login</button>}
        </div>
        <div>Counter {counter}</div>
        <ControlCounter/>
    </div>)
}

export default App;
