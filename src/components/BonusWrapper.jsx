import React from 'react';
import Bonus from './Bonus.jsx';

class BonusWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.createAction = this.createAction.bind(this);
    }
    createAction(type, index, bonus) {
        let action = {};
        action.type = 'update_' + type + '_bonus_choice';
        action[type] = this.props[type];
        action.index = index;
        action.bonus = bonus
        return action;
    }
    handleSelect(e) {
        this.props.updateDefenses(this.createAction('defense', this.props.index, e.target.value));
        // this.props.updateDefenses({type: 'update_defense_bonus_choice', defense: this.props.defense, index: this.props.index, bonus: e.target.value});
    }
    render() {
        var _this = this;
        return (
            <Bonus index={_this.props.index} bonus={_this.props.bonus} changeInput={_this.props.handleChange} changeSelect={_this.handleSelect} />
        )
    }
}

export default BonusWrapper;

