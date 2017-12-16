import React from 'react';
import Abils from './Abils.jsx';
import Levels from './Levels.jsx';
import Login from './Login.jsx';

class App extends React.Component {
    handleAbilChange(target) {
        this.props.updateAbils({type: 'update_abils', abil: target.name, newScore: target.value});
    }
    handleRacialChange(target) {
        this.props.updateAbils({type: 'update_racial', abil: target.name, racial: target.checked});
    }
    handleBonusChange(target) {
        this.props.updateAbils({type: 'update_bonus', abil: target.name, bonus: target.value});
    }
    handleLevelChange(target) {
        this.props.updateLevels({type: 'update_levels', level: target.value});
    }
    render() {
        var _this = this;
        return (
            <div>
                <h1>Character Compiler</h1>
                <Login />
                <Levels levels={_this.props.levels} handleLevelChange={_this.handleLevelChange.bind(this)} />
                <Abils abils={_this.props.abils} handleAbilChange={_this.handleAbilChange.bind(this)} handleRacialChange={_this.handleRacialChange.bind(this)} handleBonusChange={_this.handleBonusChange.bind(this)} />
            </div>
        )
    }
}

export default App;

