import React, {Component} from "react";
import {connect} from 'react-redux'
import {login, logout} from "./store/actions";
import ControlCounter from "./ControlCounter";

class App extends Component {

    render() {
        const {counter, isLogged, login, logout} = this.props
        return (
            <div>
                <div style={{position: 'fixed', right: 0}}>
                    {isLogged ? <>
                            <span>Hola usuario!</span> &nbsp;
                            <button onClick={() => logout()}>Logout</button>
                        </>
                        : <button onClick={() => login()}>Login</button>}
                </div>
                <div>Counter {counter}</div>
                <ControlCounter/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    counter: state.counter,
    isLogged: state.isLogged
})

const mapDispatchToProps = () => ({
    login,
    logout
})

export default connect(mapStateToProps, mapDispatchToProps())(App);
