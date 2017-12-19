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
        case 'SET_DEFENSES':
            newState = action.defenses;
            break;
    }
    return newState;
}

export { defense_reducer }

