import React from 'react';
import Abils from './Abils.jsx';
import Levels from './Levels.jsx';
import Login from './Login.jsx';
import Name from './Name.jsx';
import Menu from './Menu.jsx';
import Skills from './Skills.jsx';
import Defenses from './Defenses.jsx';
import Equipment from './Equipment.jsx';

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
    handleNameChange(target) {
        this.props.updateName({type: 'update_name', name: target.value});
    }
    handleSkillChange(target) {
        this.props.updateSkills({type: 'update_skill', name: target.name, newScore: target.value});
    }
    handleTrainedChange(target) {
        this.props.updateSkills({type: 'update_trained', skill: target.name, trained: target.checked});
    }
    handleEquipmentChange(e) {
        this.props.updateEquipment({type: 'update_equipment', equipment: e.target.value});
    }
    handleDefMiscChange(target) {
        this.props.updateDefenses({type: 'update_defense_misc', defense: target.name, newScore: target.value});
    }
    render() {
        var _this = this;
        return (
            <div>
                <h1>Character Compiler</h1>
                <Menu character_list={_this.props.character_list} state={_this.props.store} updateCharacterList={_this.props.updateCharacterList} updateAbils={_this.props.updateAbils} updateLevels={_this.props.updateLevels} updateName={_this.props.updateName} />
                <Login user={_this.props.user} updateUser={_this.props.updateUser} />
                <Name name={_this.props.name} handleNameChange={_this.handleNameChange.bind(this)} />
                <Levels levels={_this.props.levels} handleLevelChange={_this.handleLevelChange.bind(this)} />
                <Abils abils={_this.props.abils} level={_this.props.levels.level} handleAbilChange={_this.handleAbilChange.bind(this)} handleRacialChange={_this.handleRacialChange.bind(this)} handleBonusChange={_this.handleBonusChange.bind(this)} />
                <Skills equipment={_this.props.equipment} level={_this.props.levels.level} abils={_this.props.abils} skills={_this.props.skills} handleSkillChange={_this.handleSkillChange.bind(this)} handleTrainedChange={this.handleTrainedChange.bind(this)} />
                <Equipment equipment={_this.props.equipment} handleEquipmentChange={_this.handleEquipmentChange.bind(this)} />
                <Defenses equipment={_this.props.equipment} level={_this.props.levels.level} abils={_this.props.abils} defenses={_this.props.defenses} handleDefMiscChange={_this.handleDefMiscChange.bind(this)} />
            </div>
        )
    }
}

export default App;

