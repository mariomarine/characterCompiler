import { abil_reducer } from '../reducers/abil_reducer.js';

var update_abils_tester = function () {
    var update_abils_action = {
        type: 'update_abils',
        abil: 'str',
        newScore: 11
    }

    var given_state = {
        str: {
            score: 10
        },
        con: {
            score: 9
        }
    }

    var expected_state = {
        str: {
            score: 11
        },
        con: {
            score: 9
        }
    }

    test('Update Abil Reducer Test', () => {
        expect(abil_reducer(given_state, update_abils_action)).toEqual(expected_state);
    });
};
update_abils_tester();

var update_racial_tester = function () {
    var update_racial_action = {
        type: 'update_racial',
        abil: 'con',
        racial: 2
    }

    var given_state = {
        str: {
            racial: 0
        },
        con: {
            racial: 1
        }
    }

    var expected_state = {
        str: {
            racial: 0
        },
        con: {
            racial: 2
        }
    }

    test('Update Racial Reducer Test', () => {
        expect(abil_reducer(given_state, update_racial_action)).toEqual(expected_state);
    });
};
update_racial_tester();

var update_bonus_tester = function () {
    var update_bonus_action = {
        type: 'update_bonus',
        abil: 'wis',
        bonus: 4
    }

    var given_state = {
        str: {
            bonus: 10
        },
        wis: {
            bonus: 9
        }
    }

    var expected_state = {
        str: {
            bonus: 10
        },
        wis: {
            bonus: 4
        }
    }

    test('Update Bonus Reducer Test', () => {
        expect(abil_reducer(given_state, update_bonus_action)).toEqual(expected_state);
    });
};
update_bonus_tester();

