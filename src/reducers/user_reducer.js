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
            newState = Object.assign({}, state, {email: action.user.email});
            newState = Object.assign({}, newState, {userId: action.user.uid});
            break;
        case 'LOGOUT':
            newState = Object.assign({}, state, {email: ''});
            newState = Object.assign({}, newState, {userId: ''});
            break;
    }
    return newState;
}

export { user_reducer }

