const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
    }
    return state //ever return same state if nothing is changed
}

export default counterReducer