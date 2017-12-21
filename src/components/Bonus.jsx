import React from 'react';
import { bonus_types } from '../resources/bonus_types.js';

class Bonus extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(e) {
        this.props.updateDefenses({type: 'update_defense_bonus_choice', defense: this.props.defense, index: this.props.index, bonus: e.target.value});
    }
    render() {
        var _this = this;
        return (
            <div key={_this.props.index}>
                <select value={_this.props.bonus.name} onChange={_this.handleSelect}>
                    {bonus_types.map((bonus, index) => {
                        return (
                            <option key={index} value={bonus}>{bonus}</option>
                        )
                    })}
                </select>
                {_this.props.bonus.name}
                <input type="number" min={-10} max={20} name={_this.props.bonus.name} value={_this.props.bonus.score} onChange={_this.props.handleChange} />
            </div>
        )
    }
}

export default Bonus;

