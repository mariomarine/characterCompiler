import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import App from './components/App.jsx';
import { abil_reducer } from './reducers/abil_reducer.js';
import { level_reducer } from './reducers/level_reducer.js';
import { name_reducer } from './reducers/name_reducer.js';
import { user_reducer } from './reducers/user_reducer.js';
import { character_list_reducer } from './reducers/character_list_reducer.js';
import { initial_state } from './resources/initial_state.js';
import { skill_reducer } from './reducers/skill_reducer.js';
import { defense_reducer } from './reducers/defense_reducer.js';
import { equipment_reducer } from './reducers/equipment_reducer.js';

const rootReducer = combineReducers({
    abils: abil_reducer,
    levels: level_reducer,
    name: name_reducer,
    user: user_reducer,
    skills: skill_reducer,
    character_list: character_list_reducer,
    defenses: defense_reducer,
    equipment: equipment_reducer
});

const store = createStore(rootReducer, initial_state);

function mapStateToProps(state) {
    return {
        abils: state.abils,
        levels: state.levels,
        name: state.name,
        user: state.user,
        skills: state.skills,
        store: state,
        character_list: state.character_list,
        defenses: state.defenses,
        equipment: state.equipment
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateAbils: (abil_action) => dispatch(abil_action),
        updateLevels: (level_action) => dispatch(level_action),
        updateName: (name_action) => dispatch(name_action),
        updateUser: (user_action) => dispatch(user_action),
        updateSkills: (skill_action) => dispatch(skill_action),
        updateCharacterList: (character_action) => dispatch(character_action),
        updateDefenses: (defense_action) => dispatch(defense_action),
        updateEquipment: (equipment_action) => dispatch(equipment_action)
    }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
    <Provider store={store}>
        <Container/>
    </Provider>,
    document.getElementById('app')
);

