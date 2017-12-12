import React from 'react';
import Abils from './Abils.jsx';

class App extends React.Component {
    handleChange(target) {
        this.props.updateAbils({type: 'update_abils', abil: target.name, newScore: target.value});
    }
    render() {
        var _this = this;
        return (
            <div>
                <h1>Character Compiler</h1>
                <Abils abils={_this.props.abils} handleChange={_this.handleChange.bind(this)} />
            </div>
        )
    }
}

export default App;
