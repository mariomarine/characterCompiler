import React from 'react';
import firebase, { auth, provider } from '../resources/firebase.js';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.save = this.save.bind(this);
    }
    save() {
        var _this = this;
        firebase.database()
            .ref('characters/' + _this.props.state.user.userId + '/' + _this.props.state.name)
            .set(_this.props.state);
    }
    render() {
        var _this = this;
        return (
            <div>
                <h2>Menu</h2>
                <button onClick={_this.save}>Save</button>
            </div>
        )
    }
}

export default Menu;

