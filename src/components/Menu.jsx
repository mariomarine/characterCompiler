import React from 'react';
import firebase, { auth, provider } from '../resources/firebase.js';
import CharacterSelector from './CharacterSelector.jsx';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.save = this.save.bind(this);
        this.showCharacters = this.showCharacters.bind(this);
    }
    save() {
        var _this = this;
        firebase.database()
            .ref('characters/' + _this.props.state.user.userId + '/' + _this.props.state.name)
            .set(_this.props.state);
    }
    showCharacters() {
        var _this = this;
        firebase.database()
            .ref('characters/' + _this.props.state.user.userId)
            .once('value')
            .then((snapshot) => {
                var characters = snapshot.val();
                _this.props.updateCharacterList({type: 'SHOW_CHARACTERS', characters: Object.keys(characters)});
            });
    }
    render() {
        var _this = this;
        return (
            <div>
                <h2>Menu</h2>
                <button onClick={_this.save}>Save</button>
                <button onClick={_this.showCharacters}>Load</button>
                {_this.props.character_list.length > 0 ?
                    <CharacterSelector updateAbils={_this.props.updateAbils} updateLevels={_this.props.updateLevels} updateName={_this.props.updateName} user={_this.props.state.user} character_list={_this.props.character_list} />
                    :
                    <p>Please select "Load"</p>
                }
            </div>
        )
    }
}

export default Menu;

