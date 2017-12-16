import React from 'react';
import firebase, { auth, provider } from '../resources/firebase.js';

class Login extends React.Component {
    login() {
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                console.log(error);
            });
    }
    render() {
        var _this = this;
        return (
            <div>
                <h2>Login</h2>
                <button onClick={_this.login}>Log In</button>
            </div>
        )
    }
}

export default Login;

