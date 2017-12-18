import React from 'react';
import firebase, { auth, provider } from '../resources/firebase.js';

class CharacterSelector extends React.Component {
    render() {
        var _this = this;
        var character_list = _this.props.character_list;
        var character = '';
        return (
            <select>
                {Object.keys(character_list).map((index) => {
                    character = character_list[index];
                    return <option key={character} value={character}>{character}</option>
                })}
            </select>
        )
    }
}

export default CharacterSelector;

