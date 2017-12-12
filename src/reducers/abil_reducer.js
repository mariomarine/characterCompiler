var abil_reducer = function(state, action) {
    if (state == undefined) {
        var data = {
            abils: {
                str: {
                    name: 'Strength',
                    score: 10
                },
                con: {
                    name: 'Constitution',
                    score: 10
                },
                int: {
                    name: 'Intelligence',
                    score: 10
                },
                dex: {
                    name: 'Dexterity',
                    score: 10
                },
                wis: {
                    name: 'Wisdom',
                    score: 10
                },
                cha: {
                    name: 'Charisma',
                    score: 10
                }
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
    }
    return newState;
}

export { abil_reducer }

