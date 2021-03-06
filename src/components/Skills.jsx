import React from 'react';
import point_buy from '../resources/point_buy.js';
import { skills } from '../resources/skills.js';
import { armor } from '../resources/armor.js';

class Skills extends React.Component {
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
    getSkillMod(skill) {
        let total = this.getAbilTotal(skills[skill].abil);
        let skillMod = this.getMod(total);
        return skillMod;
    }
    getTotal(key) {
        let total = parseInt(this.props.skills[key].misc);
        total += parseInt(this.props.skills[key].trained ? 5 : 0);
        total += this.getSkillMod(key);
        total += (skills[key].armor_pen) ? armor[this.props.equipment.selected_armor.name].check : 0;
        total += Math.floor(this.props.level / 2);
        return total;
    }
    render() {
        var skills = this.props.skills;
        var _this = this;
        var half_level = Math.floor(this.props.level / 2);
        return (
            <div>
                <h2>Skills</h2>
                <div>
                    <div>
                        <label className="skill">
                            <span>Total</span>
                            <span>Skill</span>
                            <span>Abil Mod</span>
                            <span>1/2 Level</span>
                            <span>Train</span>
                            <span>Misc</span>
                        </label>
                    </div>
                    {
                        Object.keys(skills).map((skill, index) => {
                            return (
                                <div key={index}>
                                    <label className="skill">
                                        <input type="number" disabled min={-20} max={40} name={skill} value={_this.getTotal(skill)} />
                                        <span>{skill}</span>
                                        <input type="number" disabled min={-10} max={12} name={skill} value={_this.getSkillMod(skill)} />
                                        <input type="number" disabled min={0} max={15} name={skill} value={half_level} />
                                        <input type="checkbox" name={skill} checked={skills[skill].trained} onChange={(e) => _this.props.handleTrainedChange(e.target)} />
                                        <input type="number" min={-50} max={50} name={skill} value={skills[skill].misc} onChange={(e) => _this.props.handleSkillChange(e.target)} />
                                    </label>
                                    <br />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Skills;

