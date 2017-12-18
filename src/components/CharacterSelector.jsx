import React from 'react';
import firebase, { auth, provider } from '../resources/firebase.js';

class CharacterSelector extends React.Component {
    constructor(props) {
        super(props);
        this.handleCharacterSelect = this.handleCharacterSelect.bind(this);
    }
    handleCharacterSelect(e) {
        var _this = this;
        firebase.database()
            .ref('characters/' + _this.props.user.userId + '/' + e.target.value)
            .once('value')
            .then((snapshot) => {
                var character = snapshot.val();
                _this.props.updateAbils({type: 'SET_ABILS', abils: character.abils});
                _this.props.updateLevels({type: 'SET_LEVEL', levels: character.levels});
                _this.props.updateName({type: 'SET_NAME', name: character.name});
            });
    }
    render() {
        var _this = this;
        var character_list = _this.props.character_list;
        var character = '';
        return (
            <select onChange={_this.handleCharacterSelect}>
                <option key={'default'} selected disabled>--- Choose a Character ---</option>
                {Object.keys(character_list).map((index) => {
                    character = character_list[index];
                    return <option key={character} value={character}>{character}</option>
                })}
            </select>
        )
    }
}

export default CharacterSelector;

