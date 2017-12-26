import { defense_reducer } from '../reducers/defense_reducer.js';

var add_bonus_defense_tester = function () {
    var add_bonus_defense_action = {
        type: 'add_bonus_defense',
        defense: 'ac'
    }

    var given_state = {
        ac: {
            bonuses: [
                {
                    name: 'Misc',
                    bonus: 10
                }
            ]
        },
        fort: {
            bonuses: [
                {
                    name: 'Misc',
                    bonus: 0
                }
            ]
        }
    };

    var expected_state = {
        ac: {
            bonuses: [
                {
                    name: 'Misc',
                    bonus: 10
                },
                {
                    name: 'Misc',
                    bonus: 0
                }
            ]
        },
        fort: {
            bonuses: [
                {
                    name: 'Misc',
                    bonus: 0
                }
            ]
        }
    }

    test('Add Bonus to Defense Test', () => {
        expect(defense_reducer(given_state, add_bonus_defense_action)).toEqual(expected_state);
    });
};
add_bonus_defense_tester();

