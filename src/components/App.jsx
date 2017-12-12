import React from 'react';
import Abils from './Abils.jsx';
import Levels from './Levels.jsx';

class App extends React.Component {
    handleAbilChange(target) {
        this.props.updateAbils({type: 'update_abils', abil: target.name, newScore: target.value});
    }
    handleLevelChange(target) {
        this.props.updateAbils({type: 'update_levels', level: target.value});
    }
    render() {
        var _this = this;
        return (
            <div>
                <h1>Character Compiler</h1>
                <Levels levels={_this.props.levels} handleChange={_this.handleLevelChange.bind(this)} />
                <Abils abils={_this.props.abils} handleChange={_this.handleAbilChange.bind(this)} />
            </div>
        )
    }
}

export default App;

