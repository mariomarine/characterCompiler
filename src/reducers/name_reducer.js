var name_reducer = function(state, action) {
    if (state == undefined) {
        var data = {
            abils: {},
            levels: {},
            name: ''
        }
        return data;
    }
    var newState = state;
    switch(action.type) {
        case 'update_name':
            newState = action.name;
            break;
    }
    return newState;
}

export { name_reducer }

