var defense_reducer = function(state, action) {
    if (state == undefined) {
        var data = {
            abils: {},
            levels: {},
            defenses: {}
        }
        return data;
    }
    var newState = state;
    switch(action.type) {
        case 'update_defense_misc':
            var temp = {};
            temp[action.defense] = Object.assign({}, state[action.defense], {misc: action.newScore});
            newState = Object.assign({}, state, temp);
            break;
        case 'SET_DEFENSES':
            newState = action.defenses;
            break;
    }
    return newState;
}

export { defense_reducer }

