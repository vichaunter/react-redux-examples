import React, {Component} from 'react';
import {decrement, increment} from "./store/actions";
import {connect} from "react-redux";

class ControlCounter extends Component {
    render() {
        const {increment, decrement} = this.props

        return (
            <div>
                <button onClick={() => increment()}>+</button>
                <button onClick={() => decrement()}>-</button>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    counter: state.counter
})

const mapDispatchToProps = () => ({
    increment,
    decrement
})

export default connect(mapStateToProps, mapDispatchToProps())(ControlCounter);

