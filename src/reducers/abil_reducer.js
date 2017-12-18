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
            newState = Object.assign({}, state, temp);
            break;
        case 'update_racial':
            var temp = {};
            temp[action.abil] = Object.assign({}, state[action.abil], {racial: action.racial});
            newState = Object.assign({}, state, temp);
            break;
        case 'update_bonus':
            var temp = {};
            temp[action.abil] = Object.assign({}, state[action.abil], {bonus: action.bonus});
            newState = Object.assign({}, state, temp);
            break;
        case 'SET_ABILS':
            newState = action.abils;
            break;
    }
    return newState;
}

export { abil_reducer }

