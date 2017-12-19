var equipment_reducer = function(state, action) {
    if (state == undefined) {
        var data = {
            abils: {},
            levels: {},
            user: {},
            equipment: {}
        }
        return data;
    }
    var newState = state;
    switch(action.type) {
        case 'update_equipment':
            let selected_armor = Object.assign({}, name, {name: action.equipment});
            newState = Object.assign({}, state, {selected_armor: selected_armor});
            break;
    }
    return newState;
}

export { equipment_reducer }

