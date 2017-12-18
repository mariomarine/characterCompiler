var character_list_reducer = function(state, action) {
    if (state == undefined) {
        var data = {
            abils: {},
            levels: {},
            user: {}
        }
        return data;
    }
    var newState = [];
    switch(action.type) {
        case 'SHOW_CHARACTERS':
            newState = action.characters;
            break;
    }
    return newState;
}

export { character_list_reducer }

