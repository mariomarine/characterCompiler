import React from 'react';
import Abils from './Abils.jsx';

class App extends React.Component {
    render() {
        var _this = this;
        return (
            <div>
                <h1>Character Compiler</h1>
                <Abils abils={_this.props.abils} />
            </div>
        )
    }
}

export default App;
