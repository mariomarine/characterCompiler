var user_reducer = function(state, action) {
    if (state == undefined) {
        var data = {
            abils: {},
            levels: {},
            user: {}
        }
        return data;
    }
    var newState = state;
    switch(action.type) {
        case 'LOGIN':
            newState = Object.assign({}, state, {email: action.email});
            break;
        case 'LOGOUT':
            newState = Object.assign({}, state, {email: ''});
            break;
    }
    return newState;
}

export { user_reducer }

