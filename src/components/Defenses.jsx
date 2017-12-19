import React from 'react';
import { armor } from '../resources/armor.js';

class Defenses extends React.Component {
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
        total += parseInt(this.props.defenses[defense].misc);
        return total;
    }
    render() {
        var defenses = this.props.defenses;
        var _this = this;
        return (
            <div>
                <h2>Defenses</h2>
                <form>
                    {
                        Object.keys(defenses).map((key, index) => {
                            return (
                                <div key={index}>
                                    <label>
                                        <input disabled type="number" min={1} max={20} name={key} value={_this.getTotal(key)} />
                                        {key}
                                        <input type="number" min={-10} max={20} name={key} value={defenses[key].misc} onChange={(e) => _this.props.handleDefMiscChange(e.target)} />
                                    </label>
                                    <br />
                                </div>
                            )
                        })
                    }
                </form>
            </div>
        )
    }
}

export default Defenses;

