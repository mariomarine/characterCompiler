import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import App from './components/App.jsx';
import { abil_reducer } from './reducers/abil_reducer.js';

const store = createStore(abil_reducer);

function mapStateToProps(state) {
    return {
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




}

function mapDispatchToProps(dispatch) {
    return {
        updateAbils: (abil_action) => dispatch(abil_action)
    }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
    <Provider store={store}>
        <Container/>
    </Provider>,
    document.getElementById('app')
);

