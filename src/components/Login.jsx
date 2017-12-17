import React from 'react';
import firebase, { auth, provider } from '../resources/firebase.js';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }
    login() {
        var _this = this;
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                _this.props.updateUser({type: 'LOGIN', email: user.email});
            }).catch((error) => {
                console.log(error);
            });
    }
    logout() {
        var _this = this;
        auth.signOut()
            .then((result) => {
                _this.props.updateUser({type: 'LOGOUT'});
            }).catch((error) => {
                console.log(error);
            });
    }
    render() {
        var _this = this;
        return (
            <div>
                <h2>Login</h2>
                {_this.props.user.email ?
                <button onClick={_this.logout}>Log Out</button>
                :
                <button onClick={_this.login}>Log In</button>
                }
            </div>
        )
    }
}

export default Login;

