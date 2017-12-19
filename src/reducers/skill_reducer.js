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
            temp[action.name] = Object.assign({}, state[action.name], {misc: action.newScore});
            newState = Object.assign({}, state, temp);
            break;
        case 'update_trained':
            var temp = {};
            temp[action.skill] = Object.assign({}, state[action.skill], {trained: action.trained});
            newState = Object.assign({}, state, temp);
            break;
        case 'SET_SKILLS':
            newState = action.skills;
            break;
    }
    return newState;
}

export { skill_reducer }

