const loggedReducer = (state = false, action) => {
    switch (action.type) {
        case 'LOGIN':
            return true
        case 'LOGOUT':
            return false
    }
    return state //ever return same state if nothing is changed
}

export default loggedReducer