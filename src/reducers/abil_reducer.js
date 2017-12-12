var abil_reducer = function(state, action) {
    if (state == undefined) {
        var data = {
            abils: {
                str: {
                    name: 'Strength',
                    score: 10,
                    racial: 0,
                    bonus: 0,
                    mod: 0
                },
                con: {
                    name: 'Constitution',
                    score: 10,
                    racial: 0,
                    bonus: 0,
                    mod: 0
                },
                int: {
                    name: 'Intelligence',
                    score: 10,
                    racial: 0,
                    bonus: 0,
                    mod: 0
                },
                dex: {
                    name: 'Dexterity',
                    score: 10,
                    racial: 0,
                    bonus: 0,
                    mod: 0
                },
                wis: {
                    name: 'Wisdom',
                    score: 10,
                    racial: 0,
                    bonus: 0,
                    mod: 0
                },
                cha: {
                    name: 'Charisma',
                    score: 10,
                    racial: 0,
                    bonus: 0,
                    mod: 0
                }
            },
            levels: {
                level: 1,
                half_level: 0
            }
        }
        return data;
    }
    var newState = state;
    switch(action.type) {
        case 'update_abils':
            var temp = {};
            temp[action.abil] = Object.assign({}, state.abils[action.abil], {score: action.newScore});
            newState = Object.assign({}, state, 
                {abils: Object.assign({}, state.abils, temp)}
            );
            break;
        case 'update_levels':
            var temp = {};
            newState = Object.assign({}, state, {levels: Object.assign({}, state.levels, {level: action.level})});
            break;
    }
    return newState;
}

export { abil_reducer }

