var abil_reducer = function(state, action) {
    if (state == undefined) {
        var data = {
            abils: {},
            levels: {}
        }
        return data;
    }
    var newState = state;
    switch(action.type) {
        case 'update_abils':
            var temp = {};
            temp[action.abil] = Object.assign({}, state[action.abil], {score: action.newScore});
            console.log(state);
            newState = Object.assign({}, state, temp);
            break;
    }
    return newState;
}

export { abil_reducer }

