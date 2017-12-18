var level_reducer = function(state, action) {
    if (state == undefined) {
        var data = {
            abils: {},
            levels: {}
        }
        return data;
    }
    var newState = state;
    switch(action.type) {
        case 'update_levels':
            var temp = {};
            newState = Object.assign({}, state, {level: action.level});
            break;
        case 'SET_LEVEL':
            newState = action.levels;
            break;
    }
    return newState;
}

export { level_reducer }

