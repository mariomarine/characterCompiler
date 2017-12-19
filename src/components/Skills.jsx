import React from 'react';
import point_buy from '../resources/point_buy.js';
import { skills } from '../resources/skills.js';

class Skills extends React.Component {
    getTotal(key) {
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
        let total = this.getTotal(skills[skill].abil);
        let skillMod = this.getMod(total);
        return skillMod;
    }
    render() {
        var skills = this.props.skills;
        var _this = this;
        return (
            <div>
                <h2>Skills</h2>
                <form>
                    {
                        Object.keys(skills).map((skill, index) => {
                            return (
                                <div key={index}>
                                    <label>
                                        {skill}
                                        <input type="number" min={-20} max={40} name={skill} value={skills[skill].score} onChange={(e) => _this.props.handleSkillChange(e.target)} />
                                        <input type="number" min={-10} max={12} disabled name={skill} value={_this.getSkillMod(skill)} onChange={(e) => _this.props.handleSkillChange(e.target)} />
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

export default Skills;

