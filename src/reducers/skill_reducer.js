var skill_reducer = function(state, action) {
    if (state == undefined) {
        var data = {
            abils: {},
            levels: {},
            skills: {}
        }
        return data;
    }
    var newState = state;
    switch(action.type) {
        case 'update_skill':
            var temp = {};
            temp[action.name] = Object.assign({}, state[action.name], {score: action.newScore});
            newState = Object.assign({}, state, temp);
            break;
        case 'SET_ABILS':
            newState = action.skills;
            break;
    }
    return newState;
}

export { skill_reducer }

