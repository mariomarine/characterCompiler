import React from 'react';
import { armor } from '../resources/armor.js';
import BonusWrapper from './BonusWrapper.jsx';

class Defenses extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
        this.state.show = {};
    }
    getAbilTotal(key) {
        let total = parseInt(this.props.abils[key].score);
        total += parseInt(this.props.abils[key].bonus);
        total += parseInt(this.props.abils[key].racial ? 2 : 0);
        return total;
    }
    getMod(score) {
        let mod = Math.floor(score / 2) - 5;
        return mod;
    }
    getTotal(defense) {
        let total = 10;
        let strMod = this.getMod(this.getAbilTotal('str'));
        let conMod = this.getMod(this.getAbilTotal('con'));
        let dexMod = this.getMod(this.getAbilTotal('dex'));
        let intMod = this.getMod(this.getAbilTotal('int'));
        let wisMod = this.getMod(this.getAbilTotal('wis'));
        let chaMod = this.getMod(this.getAbilTotal('cha'));
        total += Math.floor(this.props.level / 2);
        if (defense == 'ac') {
            total += armor[this.props.equipment.selected_armor.name].bonus;
            total += (armor[this.props.equipment.selected_armor.name].type == 'light') ? Math.max(intMod, dexMod) : 0;
        } else if (defense == 'fort') {
            total += Math.max(strMod, conMod);
        } else if (defense == 'ref') {
            total += Math.max(intMod, dexMod);
        } else { // will
            total += Math.max(wisMod, chaMod);
        }
        total = this.props.defenses[defense].bonuses.reduce((total, b) => total + parseInt(b.bonus), total);
        return total;
    }
    showBonus(e) {
        let defense = e.target.name;
        this.setState((prevState, props) => {
            let show_def = {};
            show_def[defense] = true;
            return Object.assign({}, prevState, {show: show_def});
        });
    }
    hideBonus(e) {
        let defense = e.target.name;
        this.setState((prevState, props) => {
            let show_def = {};
            show_def[defense] = false;
            return Object.assign({}, prevState, {show: show_def});
        });
    }
    handleChange(target, index, defense) {
        this.props.updateDefenses({type: 'update_defense_bonus_score', defense: defense, index: index, score: target.value});
    }
    render() {
        var defenses = this.props.defenses;
        var _this = this;
        return (
            <div>
                <h2>Defenses</h2>
                {
                    Object.keys(defenses).map((key, index) => {
                        return (
                            <div key={index}>
                                <label >
                                    <input disabled type="number" min={1} max={20} name={key} value={_this.getTotal(key)} />
                                    {key}
                                    {_this.state.show[key] ?
                                        <div>
                                            <button name={key} onClick={(e) => _this.hideBonus(e)}>Hide Bonuses</button>
                                            {
                                                defenses[key].bonuses.map((bonus, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <BonusWrapper defense={key} group={'defense'} bonus={bonus} index={index} handleChange={(e) => _this.handleChange(e.target, index, key)} updateDefenses={_this.props.updateDefenses} />
                                                            <br />
                                                        </div>
                                                    )
                                                })
                                            }
                                            <button value={key} onClick={(e) => {_this.props.updateDefenses({type: 'add_bonus_defense', defense: e.target.value})}}>Add Bonus</button>
                                        </div>
                                    :
                                        <div>
                                            <button name={key} onClick={(e) => _this.showBonus(e)}>Show Bonuses</button>
                                        </div>
                                    }
                                </label>
                                <br />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Defenses;

