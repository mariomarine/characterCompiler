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
        case 'update_defense_bonus_choice':
            var temp = state;
            temp[action.defense].bonuses[action.index] = Object.assign({}, state[action.defense].bonuses[action.index],
                {name: action.bonus, bonus: state[action.defense].bonuses[action.index].bonus});
            newState = Object.assign({}, state, temp);
            break;
        case 'add_bonus_defense':
            var temp = {};
            console.log(state);
            console.log(action);
            temp[action.defense] = {bonuses: []};
            temp[action.defense].bonuses = state[action.defense].bonuses.slice();
            temp[action.defense].bonuses.push({name: 'Misc', bonus: 0});
            newState = Object.assign({}, state, temp);
            break;
        case 'update_defense_bonus_score':
            var temp = state;
            temp[action.defense].bonuses[action.index] = Object.assign({}, state[action.defense].bonuses[action.index],
                {name: state[action.defense].bonuses[action.index].name, bonus: action.score});
            newState = Object.assign({}, state, temp);
            break;
        case 'SET_DEFENSES':
            newState = action.defenses;
            break;
    }
    return newState;
}

export { defense_reducer }

